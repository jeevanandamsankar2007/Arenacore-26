/**
 * ARENACORE '26 - Backend Integration Client (api.js)
 * Connects the frontend UI to the FastAPI backend platform.
 */

const API_CONFIG = {
  // Use relative path or local development server port 8000
  baseUrl: window.API_BASE_URL || (
    window.location.port === "3000" 
      ? "http://localhost:8000" 
      : (window.location.origin.includes(":8000") ? "" : "http://localhost:8000")
  )
};

// Cached registration configuration with official fallback form link
let currentRegistrationConfig = {
  status: "OPEN",
  registration_url: "https://forms.gle/ir6Dbnn6GTzWCX6v7",
  opening_date: "2026-10-01",
  closing_date: "2026-10-21"
};

/**
 * Fetches the dynamic registration status and Google Form URL from the backend.
 * Endpoint: GET /api/registration
 */
async function fetchRegistrationConfig() {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}/api/registration`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const result = await response.json();
    if (result && result.success && result.data) {
      currentRegistrationConfig = result.data;
      updateRegistrationUI(result.data);
      return result.data;
    }
  } catch (err) {
    console.warn("Could not fetch registration config from backend, using fallback:", err);
  }
  return currentRegistrationConfig;
}

/**
 * Updates UI badges or banners based on the dynamic registration status.
 */
function updateRegistrationUI(config) {
  if (!config) return;

  // Update status badges if present
  const statusBadges = document.querySelectorAll(".live-reg-status-badge");
  statusBadges.forEach(badge => {
    badge.textContent = config.status;
    badge.className = `live-reg-status-badge badge-${config.status.toLowerCase()}`;
  });

  // If closed or coming soon, optionally update hero banner text
  const deadlineNote = document.querySelector(".countdown-footer p");
  if (deadlineNote && config.closing_date) {
    // Keep closing date synchronized
  }
}

/**
 * Handles clicks on all "REGISTER NOW", "Register Your Team", and "Google Form" buttons.
 * Implements the required decision logic:
 *   - OPEN + valid URL: Opens Google Form in new tab
 *   - CLOSED: Displays "REGISTRATION CLOSED"
 *   - COMING_SOON: Displays "REGISTRATION COMING SOON"
 *   - OPEN + missing URL: Displays "Registration link is currently unavailable. Please try again later."
 */
async function handleRegisterNowClick(event) {
  if (event) {
    event.preventDefault();
  }

  // Fetch latest config from backend
  let config = await fetchRegistrationConfig();

  // If network unreachable, check if we have cached config
  if (!config) {
    config = { status: "OPEN", registration_url: null };
  }

  const status = (config.status || "OPEN").toUpperCase();
  const url = config.registration_url ? config.registration_url.trim() : null;

  if (status === "CLOSED") {
    if (typeof showToast === "function") {
      showToast("⚠️ REGISTRATION CLOSED: Registrations for ARENACORE '26 are currently closed.");
    } else {
      alert("REGISTRATION CLOSED: Registrations for ARENACORE '26 are currently closed.");
    }
    return false;
  }

  if (status === "COMING_SOON") {
    if (typeof showToast === "function") {
      showToast("⏳ REGISTRATION COMING SOON: Registrations for ARENACORE '26 will open shortly.");
    } else {
      alert("REGISTRATION COMING SOON: Registrations for ARENACORE '26 will open shortly.");
    }
    return false;
  }

  if (status === "OPEN") {
    if (url && url.length > 0) {
      // Valid Google Form URL provided by senior/organizers
      window.open(url, "_blank", "noopener,noreferrer");
      if (typeof showToast === "function") {
        showToast("🚀 Opening official Google Registration Form...");
      }
      return true;
    } else {
      // OPEN but senior has not provided the URL yet
      const message = "Registration link is currently unavailable. Please try again later.";
      if (typeof showToast === "function") {
        showToast(`ℹ️ ${message}`);
      } else {
        alert(message);
      }

      // Smoothly navigate to the registration guidelines tab so participant can see info
      if (typeof switchTab === "function") {
        switchTab("register");
      }
      return false;
    }
  }

  return false;
}

/**
 * Dynamically loads official team FAQs from the backend: GET /api/faqs
 * If backend is running, keeps FAQs synchronized with the database.
 */
async function loadFaqsFromBackend() {
  const accordion = document.getElementById("faqAccordion");
  if (!accordion) return;

  try {
    const response = await fetch(`${API_CONFIG.baseUrl}/api/faqs`);
    if (!response.ok) return;

    const result = await response.json();
    if (result && result.success && Array.isArray(result.data) && result.data.length > 0) {
      // Render loaded FAQs
      accordion.innerHTML = "";
      result.data.forEach((faq, index) => {
        const item = document.createElement("div");
        item.className = "faq-item";
        item.innerHTML = `
          <button class="faq-question-btn" onclick="toggleFaq(this)">
            <span>${escapeHtml(faq.question)}</span>
            <i class="fa-solid fa-chevron-down faq-chevron"></i>
          </button>
          <div class="faq-answer">
            <p>${escapeHtml(faq.answer)}</p>
          </div>
        `;
        accordion.appendChild(item);
      });
    }
  } catch (err) {
    console.debug("Backend FAQs unavailable, retaining static default FAQs:", err);
  }
}

/**
 * Dynamically loads published announcements: GET /api/announcements
 */
async function loadAnnouncementsFromBackend() {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}/api/announcements`);
    if (!response.ok) return;

    const result = await response.json();
    if (result && result.success && Array.isArray(result.data) && result.data.length > 0) {
      const latest = result.data[0];
      const tickerText = document.querySelector(".announcement-ticker span");
      if (tickerText && latest) {
        tickerText.innerHTML = `<strong>${escapeHtml(latest.title)}:</strong> ${escapeHtml(latest.content)}`;
      }
    }
  } catch (err) {
    console.debug("Announcements API not loaded:", err);
  }
}

/**
 * Helper to prevent XSS injection
 */
function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  fetchRegistrationConfig();
  loadFaqsFromBackend();
  loadAnnouncementsFromBackend();
});
