/**
 * GDG On Campus PSNACET - ARENACORE '26 Platform Engine (GDG x ACM PSNACET)
 * Full interactive features: Particle Mesh, Tab Router, Countdown, Badge Canvas, 
 * Themes & SDGs Explorer, Filterable Gallery & Lightbox, Status Lookup & Dynamic Directory.
 */

// =============================================================================
// 1. GLOBAL STATE & DATASETS
// =============================================================================

const HACKATHON_CONFIG = {
  eventName: "ARENACORE '26",
  targetDate: new Date("2026-10-27T08:30:00+05:30").getTime(),
  deadlineDate: new Date("2026-10-12T23:59:59+05:30").getTime(),
  feePerMember: 500,
  requiredMembers: 4,
  maxMembers: 4,
};

// Official Hackathon Themes & UN SDGs Database (No pre-assigned problem statements)
const OFFICIAL_THEMES = {
  ai: {
    id: "THEME-01",
    name: "AI & Intelligent Systems",
    sdgs: [3, 4, 8, 9],
    sdgText: "UN SDGs: 3, 4, 8, 9",
    focusAreas: ["Generative AI", "AI Agents", "Machine Learning", "Computer Vision", "NLP", "Automation"],
    color: "blue"
  },
  autonomous: {
    id: "THEME-02",
    name: "Connected & Autonomous Technologies",
    sdgs: [7, 9, 11],
    sdgText: "UN SDGs: 7, 9, 11",
    focusAreas: ["IoT", "Edge AI", "Robotics", "Embedded Systems", "Drones", "Smart Devices"],
    color: "green"
  },
  secure: {
    id: "THEME-03",
    name: "Secure & Sustainable Future",
    sdgs: [3, 7, 13, 16],
    sdgText: "UN SDGs: 3, 7, 13, 16",
    focusAreas: ["Cybersecurity", "Privacy", "HealthTech", "ClimateTech", "Smart Energy"],
    color: "yellow"
  }
};

// Safe fallback for legacy code references
const PROBLEM_STATEMENTS = {};

// Steering Committee Directory Data
const STEERING_COMMITTEE = [
  { name: "Dr. R. Venkatesh", title: "Professor, PSNACET IT" },
  { name: "Dr. R.V. Selvaraj", title: "Professor, PSNACET IT" },
  { name: "Dr. P. Babu", title: "Professor, PSNACET IT" },
  { name: "Dr. R. Bhaskaran", title: "Professor, PSNACET IT" },
  { name: "Dr. M. Anandaraj", title: "Professor, PSNACET IT" },
  { name: "Dr. N. Pandeeswari", title: "Associate Professor, PSNACET IT" },
  { name: "Ms. R. Sudha", title: "Assistant Professor, PSNACET IT" },
  { name: "Mrs. S.T Bharathi", title: "Assistant Professor, PSNACET IT" },
  { name: "Mrs. C. Gayathri", title: "Assistant Professor, PSNACET IT" },
  { name: "Dr. R. Adhi Lakshmi", title: "Assistant Professor, PSNACET IT" },
  { name: "Mrs. P. Priyadharshini", title: "Assistant Professor, PSNACET IT" },
  { name: "Mrs. M. Karthiha Devi", title: "Assistant Professor, PSNACET IT" },
  { name: "Mrs. A. Sangeetha", title: "Assistant Professor, PSNACET IT" },
  { name: "Dr. S. Nithya", title: "Assistant Professor, PSNACET IT" },
  { name: "Mrs. M. Priya", title: "Assistant Professor, PSNACET IT" },
  { name: "Dr. K. Jeevitha", title: "Assistant Professor, PSNACET IT" },
  { name: "Dr. M. Arun Kumar", title: "Assistant Professor, PSNACET IT" },
  { name: "Mr. Vikkiramapandian", title: "Assistant Professor, PSNACET IT" },
  { name: "Dr. B. Mathan Kumar", title: "Assistant Professor, PSNACET IT" },
  { name: "Mr. J. Jeganathan", title: "Assistant Professor, PSNACET IT" },
  { name: "Mrs. B. Vijaya Nirmala", title: "Assistant Professor, PSNACET IT" },
  { name: "Dr. W.R. Salem Jeyaseelan", title: "Assistant Professor, PSNACET IT" },
  { name: "Mr. P. Seethamani", title: "Assistant Professor, PSNACET IT" },
  { name: "Dr. R. Karuppathal", title: "Professor, PSNACET IT" },
  { name: "Mrs. Venkata Lakshmi", title: "Assistant Professor, PSNACET IT" },
  { name: "Mrs. Sahana Preethi", title: "Assistant Professor, PSNACET IT" },
  { name: "Mr. P. Padmanathan", title: "Lab Technician, PSNACET IT" },
  { name: "Mr. Prabhu", title: "Lab Incharge, PSNACET IT" }
];

// Photo Gallery Items Data
const GALLERY_ITEMS = [
  {
    title: "IDE Bootcamp Phase-2, Tamil Nadu",
    desc: "Statewide innovation and design thinking sprint with 100+ collegiate innovators in active collaboration.",
    year: "2024",
    category: "bootcamp",
    bgClass: "bg-gradient-blue",
    icon: "fa-chalkboard-user"
  },
  {
    title: "MathHACK 2.0 @ T-HUB, Hyderabad",
    desc: "PSNACET teams pitching algorithmic intelligence platforms at India's largest innovation incubator hub.",
    year: "2024",
    category: "hackathon",
    bgClass: "bg-gradient-red",
    icon: "fa-brain"
  },
  {
    title: "Startup TN Innovation Expo",
    desc: "Student pre-seed ventures presenting to venture capitalists and Tamil Nadu innovation department heads.",
    year: "2024",
    category: "expo",
    bgClass: "bg-gradient-yellow",
    icon: "fa-rocket"
  },
  {
    title: "IDE Bootcamp: Drone Voyagers",
    desc: "Autonomous drone navigation and disaster survey prototypes engineered by IT department innovators.",
    year: "2024",
    category: "bootcamp",
    bgClass: "bg-gradient-green",
    icon: "fa-helicopter"
  },
  {
    title: "IISc Project Expo, Bangalore",
    desc: "Representing PSNACET with smart bio-sensing prototypes at Indian Institute of Science project conclave.",
    year: "2024",
    category: "expo",
    bgClass: "bg-gradient-blue",
    icon: "fa-microscope"
  },
  {
    title: "National Inventors Challenge, New Delhi",
    desc: "National finalist accolades in embedded AI, renewable clean energy, and smart city sensors.",
    year: "2024",
    category: "hackathon",
    bgClass: "bg-gradient-red",
    icon: "fa-lightbulb"
  },
  {
    title: "GEN BRAINIACS '25 Hackers In Action",
    desc: "Top 30 inter-college teams coding through the 24-hour sprint at PSNACET IT Labs.",
    year: "2025",
    category: "hackathon",
    bgClass: "bg-gradient-yellow",
    icon: "fa-laptop-code"
  },
  {
    title: "GDG On Campus PSNA Community Assembly",
    desc: "Core student leads and members celebrating tech milestones and Google Developer days.",
    year: "2024",
    category: "community",
    bgClass: "bg-gradient-green",
    icon: "fa-users"
  }
];

// Mock Registered Teams for Status Lookup
const MOCK_REGISTERED_TEAMS = [
  {
    name: "ByteBusters",
    email: "alex@college.edu",
    leader: "Alex Johnson",
    college: "PSNA CET",
    status: "Shortlisted for Round 2 (On-Campus Finals)",
    track: "Quality Education",
    passId: "GDG-GB25-0842",
    badgeType: "approved"
  },
  {
    name: "NeuralNexus",
    email: "lead@gce.edu",
    leader: "Priya Sundaram",
    college: "Govt Engg College Salem",
    status: "Shortlisted for Round 2 (On-Campus Finals)",
    track: "Smart Healthcare",
    passId: "GDG-GB25-0119",
    badgeType: "approved"
  },
  {
    name: "GreenGrid",
    email: "greengrid@tce.edu",
    leader: "Karthik Raja",
    college: "Thiagarajar College of Engg",
    status: "Shortlisted for Round 2 (On-Campus Finals)",
    track: "Climate Action",
    passId: "GDG-GB25-0304",
    badgeType: "approved"
  },
  {
    name: "AgriSensors",
    email: "agri@psnacet.edu.in",
    leader: "Suresh Kumar",
    college: "PSNACET IT",
    status: "Application Under Review (Round 1 Scrutiny)",
    track: "Zero Hunger",
    passId: "GDG-GB25-0951",
    badgeType: "pending"
  }
];

// =============================================================================
// 2. INITIALIZATION ON DOM LOAD
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initParticleCanvas();
  initCountdownTimer();
  initTabRouting();
  initMobileDrawer();
  initThemesFilter();
  renderFacultyCommittee(STEERING_COMMITTEE);
  calculateFee();
  updateLiveBadge();
  initBannerClose();
  init3DBadgeTilt();
  initDevTerminal();
  initRubricSimulator();
  initTimelineScrubber();
});

// =============================================================================
// 3. INTERACTIVE GOOGLE PARTICLE MESH BACKGROUND CANVAS
// =============================================================================

function initParticleCanvas() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const particleCount = Math.min(Math.floor(window.innerWidth / 20), 55);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1.5,
      color: googleColors[Math.floor(Math.random() * googleColors.length)],
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      alpha: Math.random() * 0.4 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(180, 200, 230, ${0.2 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.75;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Move particles
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// =============================================================================
// 4. LIVE DYNAMIC COUNTDOWN TIMER
// =============================================================================

function initCountdownTimer() {
  const daysEl = document.getElementById("countDays");
  const hoursEl = document.getElementById("countHours");
  const minEl = document.getElementById("countMinutes");
  const secEl = document.getElementById("countSeconds");

  if (!daysEl || !hoursEl || !minEl || !secEl) return;

  function update() {
    const now = new Date().getTime();
    let diff = HACKATHON_CONFIG.targetDate - now;

    if (diff <= 0) {
      // If target passed, show active or count to next phase
      diff = 1000 * 60 * 60 * 24 * 14; // Default 14 days demo cycle
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minEl.textContent = String(minutes).padStart(2, "0");
    secEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// =============================================================================
// 5. SPA TAB VIEW ROUTING & VIEW SWITCHER (BULLETPROOF)
// =============================================================================

const ALL_SECTION_IDS = ["home", "events", "register", "guidelines", "records", "about", "contact"];

function switchTab(targetId, pushState = true, subScrollTarget = null) {
  let cleanId = targetId ? String(targetId).replace(/^#/, "").trim().toLowerCase() : "home";

  // Handle special sub-routes
  if (cleanId === "schedule") {
    subScrollTarget = "schedule";
    cleanId = "events";
  }

  if (!ALL_SECTION_IDS.includes(cleanId)) {
    // If not a main section, check if it's an element ID
    const el = document.getElementById(cleanId);
    if (!el) cleanId = "home";
  }

  // Iterate over all known sections
  ALL_SECTION_IDS.forEach(id => {
    const sec = document.getElementById(id);
    if (!sec) return;

    if (id === cleanId) {
      sec.style.setProperty("display", "block", "important");
      sec.classList.add("active-view");
    } else {
      sec.style.setProperty("display", "none", "important");
      sec.classList.remove("active-view");
    }
  });

  // Also handle any other .tab-view elements if present
  document.querySelectorAll(".section.tab-view").forEach(sec => {
    if (sec.id === cleanId) {
      sec.style.setProperty("display", "block", "important");
      sec.classList.add("active-view");
    } else if (ALL_SECTION_IDS.includes(sec.id)) {
      sec.style.setProperty("display", "none", "important");
      sec.classList.remove("active-view");
    }
  });

  // Update Desktop Nav Tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    const tabTarget = (tab.getAttribute("data-target") || tab.getAttribute("href") || "").replace("#", "").toLowerCase();
    if (tabTarget === cleanId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Update Quick Nav items
  document.querySelectorAll(".q-item").forEach(q => {
    const qTarget = (q.getAttribute("data-target") || q.getAttribute("href") || "").replace("#", "").toLowerCase();
    if (qTarget === cleanId || (cleanId === "events" && q.getAttribute("href") === "#schedule")) {
      q.classList.add("active");
    } else {
      q.classList.remove("active");
    }
  });

  // Update Mobile Drawer Links
  document.querySelectorAll(".mobile-nav-link").forEach(m => {
    const mTarget = (m.getAttribute("data-target") || m.getAttribute("href") || "").replace("#", "").toLowerCase();
    if (mTarget === cleanId) {
      m.classList.add("active");
    } else {
      m.classList.remove("active");
    }
  });

  // Update Mobile Bottom Dock items
  document.querySelectorAll(".mobile-bottom-dock .dock-item:not(.dock-cta)").forEach(d => {
    const dTarget = (d.getAttribute("data-target") || d.getAttribute("href") || "").replace("#", "").toLowerCase();
    if (dTarget === cleanId) {
      d.classList.add("active");
    } else {
      d.classList.remove("active");
    }
  });

  // Scroll to top or specific sub-element
  if (subScrollTarget) {
    setTimeout(() => {
      const subEl = document.getElementById(subScrollTarget);
      if (subEl) subEl.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update URL Hash
  if (pushState && history.pushState) {
    history.pushState(null, null, `#${cleanId}`);
  }
}

// Make globally accessible for inline onclick handlers
window.switchTab = switchTab;

function initTabRouting() {
  // Global click delegator for any link with href="#tabId"
  document.addEventListener("click", e => {
    const link = e.target.closest("a[href^='#']");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const targetId = href.substring(1).toLowerCase();
    const isKnownTab = ALL_SECTION_IDS.includes(targetId) || targetId === "schedule";

    if (isKnownTab) {
      e.preventDefault();
      switchTab(targetId, true);

      // Close mobile drawer if open
      const drawer = document.getElementById("mobileDrawer");
      if (drawer) drawer.classList.remove("open");
    }
  });

  // Handle browser Back & Forward navigation
  window.addEventListener("popstate", () => {
    const hash = (window.location.hash || "#home").replace("#", "");
    switchTab(hash, false);
  });

  // Initial tab load based on URL hash
  const initialHash = (window.location.hash || "#home").replace("#", "");
  switchTab(initialHash, false);
}

// =============================================================================
// 6. MOBILE DRAWER NAVIGATION
// =============================================================================

function initMobileDrawer() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const closeBtn = document.getElementById("closeDrawerBtn");
  const drawer = document.getElementById("mobileDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    drawer.classList.add("open");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  });
}

function initBannerClose() {
  const closeBtn = document.getElementById("closeBannerBtn");
  const banner = document.getElementById("announcementBanner");
  if (closeBtn && banner) {
    closeBtn.addEventListener("click", () => {
      banner.style.display = "none";
    });
  }
}

// =============================================================================
// 7. THEMES & TRACKS FILTERING
// =============================================================================

function initThemesFilter() {
  const filterBtns = document.querySelectorAll(".theme-pill-btn");
  const trackCards = document.querySelectorAll(".track-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      trackCards.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// =============================================================================
// 8. 2-DAY SCHEDULE SWITCHER
// =============================================================================

function switchScheduleDay(dayNum) {
  const day1Btn = document.getElementById("day1TabBtn");
  const day2Btn = document.getElementById("day2TabBtn");
  const day1List = document.getElementById("day1Timeline");
  const day2List = document.getElementById("day2Timeline");

  if (dayNum === 1) {
    day1Btn.classList.add("active");
    day2Btn.classList.remove("active");
    day1List.classList.add("active");
    day2List.classList.remove("active");
  } else {
    day2Btn.classList.add("active");
    day1Btn.classList.remove("active");
    day2List.classList.add("active");
    day1List.classList.remove("active");
  }
}

// =============================================================================
// 9. THEME SELECTION & REGISTRATION ROUTING
// =============================================================================

function selectThemeInForm(themeName) {
  switchTab("register");
  const trackSel = document.getElementById("trackSelect");
  if (trackSel) {
    trackSel.value = themeName;
    updateLiveBadge();
    showToast(`✅ Selected Theme: ${themeName}`);
  }
}
window.selectThemeInForm = selectThemeInForm;

// Backwards compatibility fallbacks
function openProblemModal(themeKey) {
  switchTab("events");
  const grid = document.getElementById("themesGrid");
  if (grid) grid.scrollIntoView({ behavior: "smooth" });
}
window.openProblemModal = openProblemModal;

function closeProblemModal() {}
window.closeProblemModal = closeProblemModal;

function navigateProblem() {}
window.navigateProblem = navigateProblem;

// Close modal when clicking outside dialog
window.addEventListener("click", e => {
  const statusBackdrop = document.getElementById("statusModalBackdrop");
  if (e.target === statusBackdrop) closeStatusModal();
});

// =============================================================================
// 10. DYNAMIC REGISTRATION FORM & LIVE VIRTUAL BADGE GENERATOR
// =============================================================================

let memberCount = 2; // Default 1 leader + 1 member

function addMemberRow() {
  if (memberCount >= HACKATHON_CONFIG.maxMembers) {
    showToast("Maximum 4 members allowed per team!");
    return;
  }

  memberCount++;
  const container = document.getElementById("dynamicMembersContainer");
  const row = document.createElement("div");
  row.className = "member-entry-row";
  row.id = `memberRow${memberCount}`;

  row.innerHTML = `
    <span class="member-num-pill">Member ${memberCount}</span>
    <input type="text" placeholder="Full Name *" required class="form-control m-name" oninput="calculateFee()">
    <input type="email" placeholder="Email Address *" required class="form-control m-email">
    <input type="text" placeholder="Roll No / ID" class="form-control m-id">
    <button type="button" class="btn-remove-member" onclick="removeMemberRow(${memberCount})" title="Remove Member">&times;</button>
  `;

  container.appendChild(row);
  updateMemberCounter();
  calculateFee();
}

function removeMemberRow(id) {
  const row = document.getElementById(`memberRow${id}`);
  if (row) {
    row.remove();
    memberCount--;
    updateMemberCounter();
    calculateFee();
  }
}

function updateMemberCounter() {
  const counter = document.getElementById("memberCounterBadge");
  if (counter) {
    counter.textContent = `1 Leader + ${memberCount - 1} Member${memberCount > 2 ? "s" : ""}`;
  }
}

function calculateFee() {
  const totalAmount = memberCount * HACKATHON_CONFIG.feePerMember;
  const feeEl = document.getElementById("totalFeeAmount");
  if (feeEl) {
    feeEl.textContent = `₹${totalAmount} INR (${memberCount} x ₹500)`;
  }
}

// =============================================================================
// 10. PRE-DEADLINE REGISTRATION HUB & SHORTLISTED TEAM PASS GENERATOR
// =============================================================================

function setRegistrationMode(mode) {
  const preView = document.getElementById("regPreDeadlineView");
  const postView = document.getElementById("regPostDeadlineView");
  const btnPre = document.getElementById("modeBtnPre");
  const btnPost = document.getElementById("modeBtnPost");

  if (mode === "post") {
    if (preView) preView.style.display = "none";
    if (postView) postView.style.display = "grid";
    if (btnPre) {
      btnPre.classList.remove("active");
      btnPre.setAttribute("aria-selected", "false");
    }
    if (btnPost) {
      btnPost.classList.add("active");
      btnPost.setAttribute("aria-selected", "true");
    }
    updateLiveShortlistedPass();
    if (typeof init3DBadgeTilt === "function") init3DBadgeTilt();
  } else {
    if (preView) preView.style.display = "block";
    if (postView) postView.style.display = "none";
    if (btnPre) {
      btnPre.classList.add("active");
      btnPre.setAttribute("aria-selected", "true");
    }
    if (btnPost) {
      btnPost.classList.remove("active");
      btnPost.setAttribute("aria-selected", "false");
    }
  }
}
window.setRegistrationMode = setRegistrationMode;

function copyRegistrationLink() {
  const link = "https://forms.gle/ir6Dbnn6GTzWCX6v7";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(link).then(() => {
      showToast("📋 Official Google Form registration link copied!");
    }).catch(() => {
      window.prompt("Copy Registration Link:", link);
    });
  } else {
    window.prompt("Copy Registration Link:", link);
  }
}
window.copyRegistrationLink = copyRegistrationLink;

function generateNewPassId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let randomCode = "";
  for (let i = 0; i < 4; i++) {
    randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const newId = `AC26-PSNA-${randomCode}`;
  const passIdInput = document.getElementById("passCustomId");
  if (passIdInput) passIdInput.value = newId;

  updateLiveShortlistedPass();
  showToast(`✨ Generated Pass ID: ${newId}`);
}
window.generateNewPassId = generateNewPassId;

function updateLiveShortlistedPass() {
  const nameInput = document.getElementById("passParticipantName");
  const roleInput = document.getElementById("passParticipantRole");
  const teamInput = document.getElementById("passTeamName");
  const collegeInput = document.getElementById("passCollegeName");
  const trackInput = document.getElementById("passThemeTrack");
  const passIdInput = document.getElementById("passCustomId");

  const nameVal = nameInput?.value.trim() || "Alex Johnson";
  const roleVal = roleInput?.value.trim() || "Team Leader";
  const teamVal = teamInput?.value.trim() || "ByteBusters";
  const collegeVal = collegeInput?.value.trim() || "PSNA College of Eng & Tech";
  const trackVal = trackInput?.value.trim() || "AI & Intelligent Systems";
  const passIdVal = passIdInput?.value.trim() || "AC26-PSNA-8429";

  const bName = document.getElementById("badgePreviewName");
  if (bName) bName.textContent = nameVal;

  const bRole = document.getElementById("badgePreviewRole");
  if (bRole) bRole.textContent = roleVal;

  const bTeam = document.getElementById("badgePreviewTeam");
  if (bTeam) {
    bTeam.innerHTML = `Team: <span>${escapeSafeText(teamVal)}</span>`;
  }

  const bCollege = document.getElementById("badgePreviewCollege");
  if (bCollege) bCollege.textContent = collegeVal;

  const bTrack = document.getElementById("badgePreviewTrack");
  if (bTrack) bTrack.textContent = trackVal;

  const bId = document.getElementById("badgePreviewId");
  if (bId) bId.textContent = passIdVal;

  const barcodeNum = document.getElementById("badgeBarcodeNum");
  if (barcodeNum) barcodeNum.textContent = `${passIdVal}-SHORTLISTED`;

  const deskAllocation = document.getElementById("badgeDeskAllocation");
  if (deskAllocation) {
    const cluster = passIdVal.slice(-2) || "14";
    deskAllocation.textContent = `IT Block • Lab Cluster B, Terminal #${cluster}`;
  }
}
window.updateLiveShortlistedPass = updateLiveShortlistedPass;
window.updateLiveBadge = updateLiveShortlistedPass;

function escapeSafeText(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

function randomizeBadgeSeed() {
  const seed = Math.random().toString(36).substring(7);
  const avatar = document.getElementById("passAvatarImg");
  if (avatar) {
    avatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;
    showToast("🎲 Avatar Shuffled!");
  }
}
window.randomizeBadgeSeed = randomizeBadgeSeed;

function handlePassPhotoUpload(event) {
  const file = event.target?.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    const avatar = document.getElementById("passAvatarImg");
    if (avatar && e.target?.result) {
      avatar.src = e.target.result;
      showToast("📸 Custom photo applied to pass!");
    }
  };
  reader.readAsDataURL(file);
}
window.handlePassPhotoUpload = handlePassPhotoUpload;

function handleRegistrationSubmit(event) {
  if (event) event.preventDefault();
  handleRegisterNowClick(event);
}
window.handleRegistrationSubmit = handleRegistrationSubmit;

function scrollToPassGenerator() {
  const section = document.getElementById("register");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}
window.scrollToPassGenerator = scrollToPassGenerator;

// Download High-Resolution Virtual Pass with Dual Club Branding & Feature Clearance
function downloadVirtualPass() {
  const name = document.getElementById("passParticipantName")?.value.trim() || document.getElementById("badgePreviewName")?.textContent.trim() || "Alex Johnson";
  const role = document.getElementById("passParticipantRole")?.value.trim() || document.getElementById("badgePreviewRole")?.textContent.trim() || "Team Leader";
  const team = document.getElementById("passTeamName")?.value.trim() || "ByteBusters";
  const college = document.getElementById("passCollegeName")?.value.trim() || "PSNA College of Eng & Tech";
  const track = document.getElementById("passThemeTrack")?.value.trim() || "AI & Intelligent Systems";
  const passId = document.getElementById("passCustomId")?.value.trim() || document.getElementById("badgePreviewId")?.textContent.trim() || "AC26-PSNA-8429";

  const canvas = document.createElement("canvas");
  canvas.width = 680;
  canvas.height = 1020;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    showToast("⚠️ Could not generate pass image.");
    return;
  }

  const w = canvas.width;
  const h = canvas.height;
  const radius = 28;

  // Clip rounded card boundaries
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(w - radius, 0);
  ctx.quadraticCurveTo(w, 0, w, radius);
  ctx.lineTo(w, h - radius);
  ctx.quadraticCurveTo(w, h, w - radius, h);
  ctx.lineTo(radius, h);
  ctx.quadraticCurveTo(0, h, 0, h - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.clip();

  // Dark tech gradient background
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, "#0b0f19");
  bgGrad.addColorStop(0.5, "#111827");
  bgGrad.addColorStop(1, "#0a0d14");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Holographic accent light
  const lightGrad = ctx.createRadialGradient(w / 2, 0, 10, w / 2, 100, 340);
  lightGrad.addColorStop(0, "rgba(66, 133, 244, 0.35)");
  lightGrad.addColorStop(1, "transparent");
  ctx.fillStyle = lightGrad;
  ctx.fillRect(0, 0, w, 400);

  // Lanyard hole slot
  ctx.fillStyle = "#1e293b";
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(w / 2 - 38, 16, 76, 12, 6);
  } else {
    ctx.rect(w / 2 - 38, 16, 76, 12);
  }
  ctx.fill();
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Header: Dual Clubs GDG & ACM
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 21px Inter, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("GDG On Campus  •  ACM PSNACET", 42, 68);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "12px Inter, sans-serif";
  ctx.fillText("ARENACORE '26  |  24-HOUR NATIONAL HACKATHON", 42, 90);

  // Shortlisted Status Chip
  ctx.fillStyle = "rgba(52, 168, 83, 0.22)";
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(w - 188, 52, 146, 28, 14);
  } else {
    ctx.rect(w - 188, 52, 146, 28);
  }
  ctx.fill();
  ctx.strokeStyle = "#34a853";
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.fillStyle = "#4ade80";
  ctx.font = "bold 11px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("SHORTLISTED PASS", w - 115, 70);

  // 4-Color Google Stripe
  const stripeY = 112;
  const stripeH = 4;
  const segW = (w - 84) / 4;
  const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];
  colors.forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.fillRect(42 + i * segW, stripeY, segW, stripeH);
  });

  // Attendee Info Section
  ctx.textAlign = "left";
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 30px Inter, sans-serif";
  ctx.fillText(name, 42, 172);

  ctx.fillStyle = "#60a5fa";
  ctx.font = "bold 15px Inter, sans-serif";
  ctx.fillText(role.toUpperCase(), 42, 200);

  ctx.fillStyle = "#e2e8f0";
  ctx.font = "16px Inter, sans-serif";
  ctx.fillText(`Team: ${team}`, 42, 232);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "14px Inter, sans-serif";
  ctx.fillText(college, 42, 258);

  // Track & Pass ID Container
  ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(42, 285, w - 84, 82, 12);
  } else {
    ctx.rect(42, 285, w - 84, 82);
  }
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.stroke();

  ctx.fillStyle = "#94a3b8";
  ctx.font = "11px Inter, sans-serif";
  ctx.fillText("SELECTED THEME TRACK", 60, 312);
  ctx.fillStyle = "#38bdf8";
  ctx.font = "bold 15px Inter, sans-serif";
  ctx.fillText(track, 60, 338);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "11px Inter, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText("PASS IDENTIFIER", w - 60, 312);
  ctx.fillStyle = "#facc15";
  ctx.font = "bold 17px monospace";
  ctx.fillText(passId, w - 60, 338);

  // ArenaCore Feature Access Clearance Box
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(66, 133, 244, 0.09)";
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(42, 390, w - 84, 168, 14);
  } else {
    ctx.rect(42, 390, w - 84, 168);
  }
  ctx.fill();
  ctx.strokeStyle = "rgba(66, 133, 244, 0.35)";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = "#60a5fa";
  ctx.font = "bold 13px Inter, sans-serif";
  ctx.fillText("✓ ARENACORE ACCESS CLEARANCE & CREDENTIALS", 60, 422);

  const clearanceItems = [
    "• PSNACET Campus & IT Block 24-Hour Entry",
    "• Dedicated Hacker Wi-Fi (SSID: PSNA_GDG_HACK_5G)",
    "• Lab Cluster Workstation & Power Strip Access",
    "• Full Meals, Midnight Refreshments & Energy Station",
    "• Industry Mentorship & Stage Jury Evaluation"
  ];
  ctx.fillStyle = "#cbd5e1";
  ctx.font = "13px Inter, sans-serif";
  clearanceItems.forEach((item, idx) => {
    ctx.fillText(item, 60, 452 + idx * 23);
  });

  // Venue & Schedule Box
  ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(42, 580, w - 84, 94, 12);
  } else {
    ctx.rect(42, 580, w - 84, 94);
  }
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.stroke();

  ctx.fillStyle = "#f8fafc";
  ctx.font = "bold 14px Inter, sans-serif";
  ctx.fillText("📅 DATES: 27 & 28 OCTOBER 2026 (24-Hour Hackathon)", 60, 614);
  ctx.fillStyle = "#94a3b8";
  ctx.font = "13px Inter, sans-serif";
  ctx.fillText("📍 VENUE: IT Block • PSNA College of Engineering & Technology, Dindigul", 60, 644);

  // Emergency & Helpdesk
  ctx.fillStyle = "rgba(251, 188, 5, 0.08)";
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(42, 695, w - 84, 54, 10);
  } else {
    ctx.rect(42, 695, w - 84, 54);
  }
  ctx.fill();
  ctx.strokeStyle = "rgba(251, 188, 5, 0.3)";
  ctx.stroke();

  ctx.fillStyle = "#fde047";
  ctx.font = "bold 11px Inter, sans-serif";
  ctx.fillText("ON-SITE ORGANIZER DESK:", 60, 727);
  ctx.fillStyle = "#ffffff";
  ctx.font = "12px Inter, sans-serif";
  ctx.fillText("+91 86820 67304 / +91 93455 30457 / +91 82486 03031", 230, 727);

  // Footer & Barcode Simulation
  ctx.textAlign = "center";
  ctx.fillStyle = "#64748b";
  ctx.font = "11px Inter, sans-serif";
  ctx.fillText("Present this official pass along with your College ID card at the check-in desk.", w / 2, 792);

  // Barcode lines
  const bcY = 818;
  const bcW = 420;
  const bcStartX = (w - bcW) / 2;
  ctx.fillStyle = "#cbd5e1";
  for (let x = 0; x < bcW; x += 5) {
    const barWidth = (x % 3 === 0) ? 3 : (x % 4 === 0) ? 1.5 : 2;
    ctx.fillRect(bcStartX + x, bcY, barWidth, 42);
  }

  ctx.fillStyle = "#94a3b8";
  ctx.font = "11px monospace";
  ctx.fillText(`* ${passId} * ARENACORE26 * GDG x ACM *`, w / 2, 888);

  ctx.fillStyle = "#475569";
  ctx.font = "10px Inter, sans-serif";
  ctx.fillText("© 2026 Google Developer Groups On Campus & ACM • PSNACET Dindigul", w / 2, 928);

  ctx.restore();

  // Export to PNG
  try {
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    const cleanName = name.replace(/[^a-zA-Z0-9]/g, "_");
    link.download = `ArenaCore26-Pass-${cleanName}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("✅ Official ArenaCore '26 Pass downloaded successfully!");
  } catch (err) {
    console.error("Pass export failed", err);
    showToast("⚠️ Could not download pass. Please try again.");
  }
}
window.downloadVirtualPass = downloadVirtualPass;

function printVirtualPass() {
  window.print();
}
window.printVirtualPass = printVirtualPass;

// =============================================================================
// 11. REGISTRATION STATUS LOOKUP MODAL
// =============================================================================

const openStatusModalBtn = document.getElementById("openStatusModalBtn");
if (openStatusModalBtn) {
  openStatusModalBtn.addEventListener("click", () => {
    const backdrop = document.getElementById("statusModalBackdrop");
    if (backdrop) backdrop.classList.add("open");
  });
}

function closeStatusModal() {
  const backdrop = document.getElementById("statusModalBackdrop");
  if (backdrop) backdrop.classList.remove("open");
}

function performStatusLookup() {
  const input = document.getElementById("statusLookupInput")?.value.trim().toLowerCase();
  const resultBox = document.getElementById("statusResultBox");
  if (!resultBox) return;

  if (!input) {
    showToast("Please enter a Team Name or Email!");
    return;
  }

  const found = MOCK_REGISTERED_TEAMS.find(
    t => t.name.toLowerCase() === input || t.email.toLowerCase() === input
  );

  resultBox.style.display = "block";

  if (found) {
    resultBox.className = "status-result-box";
    resultBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <strong style="font-size:1.1rem; color:#1e293b;">${found.name}</strong>
        <span class="badge-pill bg-google-blue-subtle" style="font-size:0.75rem;">${found.passId}</span>
      </div>
      <p style="margin-bottom:6px;"><strong>Team Leader:</strong> ${found.leader} (${found.college})</p>
      <p style="margin-bottom:6px;"><strong>Domain Track:</strong> ${found.track}</p>
      <div style="background:#dcfce7; color:#15803d; padding:10px; border-radius:8px; font-weight:700; margin-top:10px;">
        <i class="fa-solid fa-circle-check"></i> ${found.status}
      </div>
    `;
  } else {
    // Generative fallback record for demonstration
    resultBox.className = "status-result-box";
    resultBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <strong style="font-size:1.1rem; color:#1e293b;">Team: ${input}</strong>
        <span class="badge-pill bg-google-yellow-subtle" style="font-size:0.75rem;">GDG-GB25-LIVE</span>
      </div>
      <p style="margin-bottom:6px;"><strong>Status:</strong> Registration Received & Logged in PSNA GDG Database.</p>
      <div style="background:#fef9c3; color:#854d0e; padding:10px; border-radius:8px; font-weight:600; margin-top:10px;">
        <i class="fa-solid fa-clock"></i> Round 1 Scrutiny in Progress. Official confirmation emails will be sent to team leads.
      </div>
    `;
  }
}

function openStatusModalWithData(data) {
  const backdrop = document.getElementById("statusModalBackdrop");
  const resultBox = document.getElementById("statusResultBox");
  if (backdrop && resultBox) {
    backdrop.classList.add("open");
    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <strong style="font-size:1.1rem; color:#1e293b;">${data.name}</strong>
        <span class="badge-pill bg-google-blue-subtle" style="font-size:0.75rem;">${data.passId}</span>
      </div>
      <p style="margin-bottom:6px;"><strong>Leader:</strong> ${data.leader}</p>
      <p style="margin-bottom:6px;"><strong>Track:</strong> ${data.track}</p>
      <div style="background:#dcfce7; color:#15803d; padding:10px; border-radius:8px; font-weight:700; margin-top:10px;">
        <i class="fa-solid fa-check-circle"></i> ${data.status}
      </div>
    `;
  }
}

// =============================================================================
// 12. RULES CATEGORY SWITCHER & FAQ ACCORDION
// =============================================================================

function switchRuleCategory(catName) {
  const tabs = document.querySelectorAll(".rule-tab-btn");
  const cards = document.querySelectorAll(".guideline-card");

  tabs.forEach(tab => {
    if (tab.getAttribute("onclick") && tab.getAttribute("onclick").includes(`'${catName}'`)) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (catName === "all" || cardCat === catName) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filterGuidelines() {
  const query = document.getElementById("guidelinesSearchInput")?.value.toLowerCase().trim() || "";
  const cards = document.querySelectorAll(".guideline-card");

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (!query || text.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function toggleFaq(btn) {
  const item = btn.parentElement;
  item.classList.toggle("active");
}

function filterFaqs() {
  const query = document.getElementById("faqSearchInput")?.value.toLowerCase() || "";
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// =============================================================================
// 13. PHOTO GALLERY FILTERING & LIGHTBOX
// =============================================================================

let activeGalleryYear = "all";
let activeGalleryCat = "all";
let currentLightboxIndex = 0;

function filterGalleryByYear(year) {
  activeGalleryYear = year;
  document.querySelectorAll(".year-pill").forEach(p => {
    if (p.getAttribute("data-year") === year) p.classList.add("active");
    else p.classList.remove("active");
  });
  applyGalleryFilters();
}

function filterGalleryByCat(cat) {
  activeGalleryCat = cat;
  document.querySelectorAll(".cat-pill").forEach(p => {
    if (p.getAttribute("data-cat") === cat) p.classList.add("active");
    else p.classList.remove("active");
  });
  applyGalleryFilters();
}

function applyGalleryFilters() {
  const cards = document.querySelectorAll(".gallery-card");
  cards.forEach(card => {
    const cardYear = card.getAttribute("data-year");
    const cardCat = card.getAttribute("data-cat");

    const matchYear = (activeGalleryYear === "all" || cardYear === activeGalleryYear);
    const matchCat = (activeGalleryCat === "all" || cardCat === activeGalleryCat);

    if (matchYear && matchCat) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  renderLightbox();
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.add("open");
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("open");
}

function closeLightboxOnBackdrop(e) {
  if (e.target.id === "lightboxModal") closeLightbox();
}

function changeLightboxSlide(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) currentLightboxIndex = GALLERY_ITEMS.length - 1;
  if (currentLightboxIndex >= GALLERY_ITEMS.length) currentLightboxIndex = 0;
  renderLightbox();
}

function renderLightbox() {
  const item = GALLERY_ITEMS[currentLightboxIndex];
  if (!item) return;

  const visual = document.getElementById("lightboxVisual");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxDesc");
  const tag = document.getElementById("lightboxTag");

  if (visual) {
    visual.innerHTML = `
      <div class="gallery-placeholder ${item.bgClass}" style="width:100%; height:100%; font-size:1.4rem;">
        <i class="fa-solid ${item.icon}" style="font-size:3.5rem; margin-bottom:12px;"></i>
        <span>${item.title}</span>
      </div>
    `;
  }

  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.desc;
  if (tag) tag.textContent = `${item.year} • ${item.category.toUpperCase()}`;
}

// Keyboard arrow support for lightbox
window.addEventListener("keydown", e => {
  const modal = document.getElementById("lightboxModal");
  if (modal && modal.classList.contains("open")) {
    if (e.key === "ArrowLeft") changeLightboxSlide(-1);
    if (e.key === "ArrowRight") changeLightboxSlide(1);
    if (e.key === "Escape") closeLightbox();
  }
});

// =============================================================================
// 14. STEERING COMMITTEE DIRECTORY & SEARCH
// =============================================================================

function renderFacultyCommittee(facultyList) {
  const container = document.getElementById("facultyCommitteeGrid");
  if (!container) return;

  if (facultyList.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#64748b;">No matching faculty found.</p>`;
    return;
  }

  container.innerHTML = facultyList.map(f => `
    <div class="committee-card">
      <h5>${f.name}</h5>
      <p>${f.title}</p>
    </div>
  `).join("");
}

function filterFacultyDirectory() {
  const query = document.getElementById("facultySearchInput")?.value.toLowerCase() || "";
  const filtered = STEERING_COMMITTEE.filter(f => 
    f.name.toLowerCase().includes(query) || f.title.toLowerCase().includes(query)
  );
  renderFacultyCommittee(filtered);
}

// =============================================================================
// 15. NEWSLETTER & TOAST ENGINE
// =============================================================================

function handleNewsletterSubmit(event) {
  event.preventDefault();
  showToast("📬 Thank you for subscribing to GDG PSNA updates!");
  event.target.reset();
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-bell text-google-yellow"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

// =============================================================================
// 16. GOOGLE THEME ENGINE (DARK / LIGHT MODE)
// =============================================================================

function initTheme() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  localStorage.removeItem("gdg_theme");
}

// =============================================================================
// 17. 3D HOLOGRAPHIC FLIP ID PASS & SOCIAL SHARING
// =============================================================================

function init3DBadgeTilt() {
  const scene = document.getElementById("badge3DScene");
  const card = document.getElementById("virtualPassCard");
  const glare = document.getElementById("holoGlare");
  if (!scene || !card) return;

  scene.addEventListener("mousemove", e => {
    if (card.classList.contains("is-flipped")) return;
    const rect = scene.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 14;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.45) 0%, rgba(66,133,244,0.15) 35%, transparent 70%)`;
      glare.style.opacity = "1";
    }
  });

  scene.addEventListener("mouseleave", () => {
    if (!card.classList.contains("is-flipped")) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
    if (glare) glare.style.opacity = "0";
  });
}

function flipPassCard() {
  const card = document.getElementById("virtualPassCard");
  if (!card) return;
  card.classList.toggle("is-flipped");
  const isFlipped = card.classList.contains("is-flipped");
  if (isFlipped) {
    card.style.transform = "perspective(1000px) rotateY(180deg)";
  } else {
    card.style.transform = "perspective(1000px) rotateY(0deg)";
  }
}
window.flipPassCard = flipPassCard;

function openShareBadgeModal() {
  const modal = document.getElementById("shareBadgeModalBackdrop");
  if (modal) modal.classList.add("open");
}
window.openShareBadgeModal = openShareBadgeModal;

function closeShareBadgeModal() {
  const modal = document.getElementById("shareBadgeModalBackdrop");
  if (modal) modal.classList.remove("open");
}
window.closeShareBadgeModal = closeShareBadgeModal;

function copyBadgeShareLink() {
  const team = document.getElementById("passTeamName")?.value || document.getElementById("teamNameInput")?.value || "ArenaCoreSquad";
  const url = `${window.location.origin}${window.location.pathname}#register?team=${encodeURIComponent(team)}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("📋 Badge verification link copied to clipboard!");
      closeShareBadgeModal();
    }).catch(() => {
      showToast("Link: " + url);
    });
  } else {
    showToast("Link: " + url);
  }
}
window.copyBadgeShareLink = copyBadgeShareLink;

function shareOnLinkedIn() {
  const team = document.getElementById("passTeamName")?.value || document.getElementById("teamNameInput")?.value || "ArenaCore Squad";
  const text = `Excited to participate in ARENACORE '26 - 24-Hour Hackathon by GDG On Campus & ACM PSNACET! My squad: ${team}. Let's build, innovate & impact! #ArenaCore26 #GDGPSNA #ACM`;
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${encodeURIComponent(text)}`, "_blank");
}
window.shareOnLinkedIn = shareOnLinkedIn;

function shareOnWhatsApp() {
  const team = document.getElementById("passTeamName")?.value || document.getElementById("teamNameInput")?.value || "Our Squad";
  const text = `🎉 We are shortlisted for ARENACORE '26 24-Hour Hackathon by GDG & ACM at PSNACET! Team: ${team}. Check it out: ${window.location.href}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
}
window.shareOnWhatsApp = shareOnWhatsApp;

function shareOnTwitter() {
  const team = document.getElementById("passTeamName")?.value || document.getElementById("teamNameInput")?.value || "ArenaCoreSquad";
  const text = `Ready for ARENACORE '26 by GDG x ACM PSNACET! 🚀 Check out our shortlisted squad pass for ${team}:`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, "_blank");
}
window.shareOnTwitter = shareOnTwitter;

// =============================================================================
// 18. DEVELOPER CLI TERMINAL OVERLAY (Ctrl + ~) & MATRIX RAIN
// =============================================================================

let isMatrixRainActive = false;
let matrixInterval = null;
let terminalHistory = [];
let terminalHistoryIndex = -1;

const GDG_TERMINAL_ASCII_BANNER = `
<pre class="terminal-banner">
<span style="color:var(--g-blue)">██████ </span>  <span style="color:var(--g-red)">██████ </span>  <span style="color:var(--g-yellow)">██████ </span>
<span style="color:var(--g-blue)">██     </span>  <span style="color:var(--g-red)">██   ██</span>  <span style="color:var(--g-yellow)">██     </span>
<span style="color:var(--g-blue)">██  ███</span>  <span style="color:var(--g-red)">██   ██</span>  <span style="color:var(--g-yellow)">██  ███</span>
<span style="color:var(--g-blue)">██   ██</span>  <span style="color:var(--g-red)">██   ██</span>  <span style="color:var(--g-yellow)">██   ██</span>
<span style="color:var(--g-blue)"> ██████</span>  <span style="color:var(--g-red)">██████ </span>  <span style="color:var(--g-yellow)"> ██████</span>

<span style="color:var(--g-green)">██████ </span> <span style="color:var(--g-blue)"> ██████</span> <span style="color:var(--g-red)">███   ██</span> <span style="color:var(--g-yellow)"> █████ </span> <span style="color:var(--g-green)"> ██████</span> <span style="color:var(--g-blue)">███████</span> <span style="color:var(--g-red)">███████</span>
<span style="color:var(--g-green)">██   ██</span> <span style="color:var(--g-blue)">██     </span> <span style="color:var(--g-red)">████  ██</span> <span style="color:var(--g-yellow)">██   ██</span> <span style="color:var(--g-green)">██     </span> <span style="color:var(--g-blue)">██     </span> <span style="color:var(--g-red)">  ███  </span>
<span style="color:var(--g-green)">██████ </span> <span style="color:var(--g-blue)"> █████ </span> <span style="color:var(--g-red)">██ ██ ██</span> <span style="color:var(--g-yellow)">███████</span> <span style="color:var(--g-green)">██     </span> <span style="color:var(--g-blue)">█████  </span> <span style="color:var(--g-red)">  ███  </span>
<span style="color:var(--g-green)">██     </span> <span style="color:var(--g-blue)">     ██</span> <span style="color:var(--g-red)">██  ████</span> <span style="color:var(--g-yellow)">██   ██</span> <span style="color:var(--g-green)">██     </span> <span style="color:var(--g-blue)">██     </span> <span style="color:var(--g-red)">  ███  </span>
<span style="color:var(--g-green)">██     </span> <span style="color:var(--g-blue)">██████ </span> <span style="color:var(--g-red)">██   ███</span> <span style="color:var(--g-yellow)">██   ██</span> <span style="color:var(--g-green)"> ██████</span> <span style="color:var(--g-blue)">███████</span> <span style="color:var(--g-red)">  ███  </span>
</pre>`;

function getTerminalWelcomeHtml() {
  return `
    <div class="terminal-welcome">
      ${GDG_TERMINAL_ASCII_BANNER}
      <div style="font-weight:bold; margin-bottom:6px; font-size:1rem; letter-spacing:0.3px;">
        <span style="color:var(--g-blue)">G</span><span style="color:var(--g-red)">D</span><span style="color:var(--g-yellow)">G</span> <span style="color:var(--text-secondary)">On Campus</span> <span style="color:var(--g-green)">P</span><span style="color:var(--g-blue)">S</span><span style="color:var(--g-red)">N</span><span style="color:var(--g-yellow)">A</span><span style="color:var(--g-green)">C</span><span style="color:var(--g-blue)">E</span><span style="color:var(--g-red)">T</span> <span style="color:var(--text-muted)">•</span> <span style="color:var(--g-blue)">ARENACORE '26 Terminal v2.6.0</span>
      </div>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:8px;">Interactive developer shell. Type <strong style="color:var(--g-green);">'help'</strong> or <strong style="color:var(--g-yellow);">'colors'</strong> to view available commands.</div>
    </div>
  `;
}

function initDevTerminal() {
  const input = document.getElementById("terminalInput");
  const output = document.getElementById("terminalOutput");
  if (!input || !output) return;

  output.innerHTML = getTerminalWelcomeHtml();

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      if (cmd) {
        terminalHistory.push(cmd);
        terminalHistoryIndex = terminalHistory.length;
        executeTerminalCommand(cmd);
      }
      input.value = "";
    } else if (e.key === "ArrowUp") {
      if (terminalHistoryIndex > 0) {
        terminalHistoryIndex--;
        input.value = terminalHistory[terminalHistoryIndex];
      }
    } else if (e.key === "ArrowDown") {
      if (terminalHistoryIndex < terminalHistory.length - 1) {
        terminalHistoryIndex++;
        input.value = terminalHistory[terminalHistoryIndex];
      } else {
        terminalHistoryIndex = terminalHistory.length;
        input.value = "";
      }
    }
  });

  // Global key listener for Ctrl + ` or Ctrl + ~
  window.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && (e.key === "`" || e.key === "~")) {
      e.preventDefault();
      toggleDevTerminal();
    }
  });
}

function toggleDevTerminal() {
  const overlay = document.getElementById("devTerminalOverlay");
  const input = document.getElementById("terminalInput");
  if (!overlay) return;

  overlay.classList.toggle("open");
  if (overlay.classList.contains("open") && input) {
    setTimeout(() => input.focus(), 100);
  }
}
window.toggleDevTerminal = toggleDevTerminal;

function closeTerminalOnBackdrop(e) {
  if (e.target.id === "devTerminalOverlay") toggleDevTerminal();
}
window.closeTerminalOnBackdrop = closeTerminalOnBackdrop;

function executeTerminalCommand(rawCmd) {
  const output = document.getElementById("terminalOutput");
  if (!output) return;

  const cmdLine = document.createElement("div");
  cmdLine.className = "terminal-history-row";
  cmdLine.innerHTML = `<span class="terminal-prompt">hacker@gdg-psna:~$</span> <strong>${escapeHtml(rawCmd)}</strong>`;
  output.appendChild(cmdLine);

  const parts = rawCmd.toLowerCase().trim().split(/\s+/);
  const primary = parts[0];
  const responseDiv = document.createElement("div");
  responseDiv.className = "terminal-res-row";

  switch (primary) {
    case "help":
      responseDiv.innerHTML = `
        <div style="display:grid; grid-template-columns: 140px 1fr; gap:6px; font-size:0.88rem;">
          <div><strong style="color:var(--g-blue)">colors</strong></div><div>Display GDG PSNACET official color palette</div>
          <div><strong style="color:var(--g-green)">banner</strong></div><div>Show colored GDG PSNACET ASCII logo</div>
          <div><strong style="color:var(--g-yellow)">tracks</strong></div><div>List all 6 challenge tracks & UN SDGs</div>
          <div><strong style="color:var(--g-green)">schedule</strong></div><div>Display 24-hour run of show</div>
          <div><strong style="color:var(--g-yellow)">prizes</strong></div><div>View cash prize pool & perks</div>
          <div><strong style="color:var(--g-red)">register</strong></div><div>Jump directly to registration form</div>
          <div><strong style="color:var(--g-green)">matrix</strong></div><div>Toggle Google-colored code rain canvas</div>
          <div><strong style="color:var(--g-red)">flip</strong></div><div>Flip the 3D Virtual Badge</div>
          <div><strong style="color:var(--g-blue)">whoami</strong></div><div>View your hacker terminal identity</div>
          <div><strong style="color:var(--g-green)">sudo win</strong></div><div>Official jury winning formula</div>
          <div><strong style="color:var(--g-yellow)">clear</strong></div><div>Clear terminal screen</div>
          <div><strong style="color:var(--g-red)">exit</strong></div><div>Close developer console</div>
        </div>
      `;
      break;

    case "tracks":
      responseDiv.innerHTML = `
        <div style="color:var(--g-blue); font-weight:bold; margin-bottom:4px;">ARENACORE '26 CHALLENGE THEMES:</div>
        <div>01. 🧠 <strong>AI & Intelligent Systems:</strong> GenAI, AI Agents, ML, Computer Vision, NLP, Automation</div>
        <div>02. 🤖 <strong>Connected & Autonomous Technologies:</strong> IoT, Edge AI, Robotics, Embedded Systems, Drones, Smart Devices</div>
        <div>03. 🛡️ <strong>Secure & Sustainable Future:</strong> Cybersecurity, Privacy, HealthTech, ClimateTech, Smart Energy</div>
      `;
      break;

    case "schedule":
      responseDiv.innerHTML = `
        <div style="font-family:monospace; font-size:0.85rem;">
          📅 <strong>DAY 1 (27 OCT 2026):</strong><br>
          08:30 AM - Check-in, Kit Distribution & Wi-Fi Setup<br>
          10:00 AM - Grand Inauguration by HOD Dr. A. Vincent Antony Kumar & Coordinators<br>
          11:00 AM - 🚀 24-HOUR HACKATHON COMMENCES<br>
          03:30 PM - Mentorship Round 1 (Architecture & DeepTech Feasibility)<br>
          08:00 PM - Dinner & Networking Jam<br>
          11:30 PM - Midnight Evaluation Checkpoint<br>
          <br>
          📅 <strong>DAY 2 (28 OCT 2026):</strong><br>
          07:00 AM - Breakfast & Final Deployment Polish<br>
          11:00 AM - 🛑 CODE FREEZE & Final Submissions<br>
          11:30 AM - Grand Jury Stage Presentations & Live Demos<br>
          03:30 PM - Valedictory Ceremony & Cash Prize Distribution (₹1,20,000)<br>
        </div>
      `;
      break;

    case "prizes":
      responseDiv.innerHTML = `
        <div>🏆 <strong style="color:var(--g-yellow)">Total Prize Pool:</strong> ₹1,20,000 Cash Awards + Prestigious Winner Trophies + GDG & ACM Tech Kits</div>
        <div>🚀 <strong style="color:var(--g-blue)">Incubation & Perks:</strong> Direct entry into institutional startup incubation & cloud credit pipelines</div>
        <div>⚡ <strong style="color:var(--g-green)">Perks for All:</strong> Official Participation Certificates + Meals & High-speed Wi-Fi!</div>
      `;
      break;

    case "register":
      switchTab("register");
      responseDiv.innerHTML = `<span style="color:var(--g-green)">Switched to Registration & ID Pass Generator tab.</span>`;
      break;

    case "colors":
      responseDiv.innerHTML = `
        <div style="font-weight:bold; margin-bottom:8px; color:var(--text-primary);">🎨 GDG PSNACET OFFICIAL GOOGLE COLOR PALETTE:</div>
        <div style="display:flex; flex-direction:column; gap:6px; font-family:monospace; font-size:0.88rem;">
          <div><span style="display:inline-block; width:13px; height:13px; background:#4285F4; border-radius:3px; vertical-align:middle; margin-right:8px; box-shadow:0 0 6px rgba(66,133,244,0.6);"></span><strong style="color:var(--g-blue)">Google Blue:</strong>   #4285F4 &nbsp;|&nbsp; rgb(66, 133, 244) &nbsp;|&nbsp; Primary Brand & Identity</div>
          <div><span style="display:inline-block; width:13px; height:13px; background:#EA4335; border-radius:3px; vertical-align:middle; margin-right:8px; box-shadow:0 0 6px rgba(234,67,53,0.6);"></span><strong style="color:var(--g-red)">Google Red:</strong>    #EA4335 &nbsp;|&nbsp; rgb(234, 67, 53)  &nbsp;|&nbsp; Alerts, Deadlines & Accent</div>
          <div><span style="display:inline-block; width:13px; height:13px; background:#FBBC05; border-radius:3px; vertical-align:middle; margin-right:8px; box-shadow:0 0 6px rgba(251,188,5,0.6);"></span><strong style="color:var(--g-yellow)">Google Yellow:</strong> #FBBC05 &nbsp;|&nbsp; rgb(251, 188, 5)  &nbsp;|&nbsp; Prizes, Highlight & Spark</div>
          <div><span style="display:inline-block; width:13px; height:13px; background:#34A853; border-radius:3px; vertical-align:middle; margin-right:8px; box-shadow:0 0 6px rgba(52,168,83,0.6);"></span><strong style="color:var(--g-green)">Google Green:</strong>  #34A853 &nbsp;|&nbsp; rgb(52, 168, 83)   &nbsp;|&nbsp; Success, Growth & Action</div>
        </div>
      `;
      break;

    case "banner":
      responseDiv.innerHTML = GDG_TERMINAL_ASCII_BANNER;
      break;

    case "flip":
      flipPassCard();
      responseDiv.innerHTML = `<span style="color:var(--g-blue)">Flipped 3D Virtual Attendee Badge.</span>`;
      break;

    case "matrix":
      toggleMatrixRain();
      responseDiv.innerHTML = `<span style="color:var(--g-green)">Matrix digital rain ${isMatrixRainActive ? "ENABLED" : "DISABLED"}.</span>`;
      break;

    case "whoami":
      const leaderName = document.getElementById("leaderNameInput")?.value || "Anonymous Innovator";
      const teamName = document.getElementById("teamNameInput")?.value || "Squad-001";
      responseDiv.innerHTML = `
        <div>Identity: <strong style="color:var(--g-blue)">${escapeHtml(leaderName)}</strong></div>
        <div>Affiliated Squad: <strong style="color:var(--g-yellow)">${escapeHtml(teamName)}</strong></div>
        <div>Terminal Permission: <span style="color:var(--g-green)">GUEST_HACKER_ROOT</span></div>
      `;
      break;

    case "sudo":
      if (parts[1] === "win") {
        responseDiv.innerHTML = `
          <div style="color:var(--g-green); font-weight:bold;">🏆 SECRET JURY WINNING RECIPE:</div>
          <div>1. Don't build a generic mock; have a working prototype with live API response.</div>
          <div>2. Keep your pitch under 4 minutes: 1m Concept/SDG Need $\\rightarrow$ 2m Live Demo $\\rightarrow$ 1m Scalability.</div>
          <div>3. Connect your solution directly to UN Sustainable Development Goals.</div>
          <div>4. Clean GitHub repo with architectural diagram will score maximum points!</div>
        `;
      } else {
        responseDiv.innerHTML = `<div>[sudo] password for hacker: access granted. Try: <code>sudo win</code></div>`;
      }
      break;

    case "clear":
      output.innerHTML = "";
      return;

    case "exit":
      toggleDevTerminal();
      return;

    default:
      responseDiv.innerHTML = `<span style="color:var(--g-red)">Command not recognized: '${escapeHtml(rawCmd)}'. Type 'help' for command list.</span>`;
  }

  output.appendChild(responseDiv);
  output.scrollTop = output.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function toggleMatrixRain() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  isMatrixRainActive = !isMatrixRainActive;

  if (isMatrixRainActive) {
    const chars = "01GDGPSNACETGENBRAINIACS<>/{}*+-~#";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];
    const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

    for (let i = 0; i < columns; i++) drops[i] = 1;

    matrixInterval = setInterval(() => {
      ctx.fillStyle = document.body.classList.contains("dark-theme") ? "rgba(10, 13, 20, 0.12)" : "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 45);
  } else {
    if (matrixInterval) clearInterval(matrixInterval);
    initParticleCanvas();
  }
}

// =============================================================================
// 19. AI TRACK & IDEA MATCHER (GEMINI CONCEPT RECOMMENDER)
// =============================================================================

let selectedMatcherSkill = "ai";
let selectedMatcherDomain = "education";

const AI_BLUEPRINTS = {
  "ai-education": {
    theme: "AI & Intelligent Systems",
    sdg: "UN SDG 4: Quality Education & SDG 9: Innovation",
    title: "Multimodal Vernacular AI Classroom Copilot",
    conceptSummary: "Student regional voice query translation, concept mindmap generation, and real-time interactive STEM assistance.",
    techStack: "Google Gemini 1.5 Flash API, TensorFlow Lite, Web Speech API, React PWA",
    architecture: "Regional Voice Query -> Gemini Multimodal Translation -> Concept Mindmap Generator -> Offline Cache",
    difficulty: "Podium Potential (High Impact)",
    formTrack: "AI & Intelligent Systems"
  },
  "web-education": {
    theme: "AI & Intelligent Systems",
    sdg: "UN SDG 4: Quality Education & SDG 10: Reduced Inequalities",
    title: "Neurodivergent Accessible Code & Cognitive Workspace",
    conceptSummary: "AI-assisted accessibility workspace decomposing complex logic with assistive visual aids and haptic audio beacons.",
    techStack: "Next.js, Web Speech API, OpenDyslexic Typography, Tailwind CSS",
    architecture: "Input Code/Text -> Focus Filter -> Step Decomposer -> Haptic Audio Beacons",
    difficulty: "High Usability (Accessible Design)",
    formTrack: "AI & Intelligent Systems"
  },
  "iot-climate": {
    theme: "Secure & Sustainable Future",
    sdg: "UN SDG 7: Clean Energy & SDG 13: Climate Action",
    title: "Smart Grid Institutional Micro-Telemetry & Carbon Auditor",
    conceptSummary: "Real-time edge sensor power auditing, automated peak load shedding, and verified carbon abatement metrics.",
    techStack: "ESP32, MQTT Telemetry, Python FastAPI, Google Cloud IoT Core, Chart.js",
    architecture: "Smart Energy Sensors -> MQTT Broker -> Peak Load Anomaly Detection -> Dynamic Curtailment Engine",
    difficulty: "Grand Winner Contender (Hardware + Cloud)",
    formTrack: "Secure & Sustainable Future"
  },
  "ai-climate": {
    theme: "Secure & Sustainable Future",
    sdg: "UN SDG 11: Sustainable Cities & SDG 13: Climate Action",
    title: "Computer Vision Flood Inundation & Safe Transit Corridors",
    conceptSummary: "Drone stream water level segmentation, emergency routing algorithm, and community SOS broadcasts.",
    techStack: "YOLOv8, OpenCV, Google Maps SDK, FastAPI, WebSockets",
    architecture: "CCTV/Drone Streams -> Water Level Segmentation -> Dijkstra Evacuation Router -> SOS Broadcast",
    difficulty: "High Impact (Disaster Relief)",
    formTrack: "Secure & Sustainable Future"
  },
  "mobile-agriculture": {
    theme: "AI & Intelligent Systems",
    sdg: "UN SDG 2: Zero Hunger & SDG 9: Innovation",
    title: "Offline-First Crop Disease Scanner with Regional Dialect Voice",
    conceptSummary: "Edge computer vision leaf disease identification with instant vernacular advice for rural farmers.",
    techStack: "Flutter, TensorFlow Lite (Quantized MobileNet), OpenWeather API",
    architecture: "Leaf Snapshot -> On-Device Classification -> Vernacular Audio Remedy -> Spraying Schedule Sync",
    difficulty: "Podium Contender (Direct Social Benefit)",
    formTrack: "AI & Intelligent Systems"
  },
  "iot-agriculture": {
    theme: "Connected & Autonomous Technologies",
    sdg: "UN SDG 2: Zero Hunger & SDG 9: Industry & Infrastructure",
    title: "LoRaWAN Micro-Drip Precision Irrigation & Soil Telemetry",
    conceptSummary: "Mesh sensor network monitoring NPK and moisture with automated solar valve relays saving 45% water.",
    techStack: "NodeMCU/ESP32, LoRa Transceivers, Node.js, TimescaleDB, MongoDB",
    architecture: "Soil Probe Sensors (NPK) -> LoRa Gateway -> Valve Actuator Relay -> 45% Water Conservation",
    difficulty: "High Hardware Ingenuity",
    formTrack: "Connected & Autonomous Technologies"
  },
  "ai-health": {
    theme: "Secure & Sustainable Future",
    sdg: "UN SDG 3: Good Health & Well-Being",
    title: "Edge Retinal & Dermatological Screening Triage Bot",
    conceptSummary: "Private on-device screening with automated grading heatmaps for rural tele-medicine camps.",
    techStack: "PyTorch / ONNX Web, FastAPI, Web Crypto API, Google Cloud Healthcare",
    architecture: "Medical Image -> Privacy Scrubber -> Grading Heatmap Generator -> Tele-Doctor Dispatch",
    difficulty: "Grand Winner Contender (High Clinical Value)",
    formTrack: "Secure & Sustainable Future"
  },
  "web-health": {
    theme: "Connected & Autonomous Technologies",
    sdg: "UN SDG 3: Good Health & SDG 11: Sustainable Cities",
    title: "Emergency Ambulance Green-Light Corridor & Telemetry Stream",
    conceptSummary: "V2X corridor preemption connecting ambulances, city traffic signals, and ICU triage dashboards.",
    techStack: "Socket.io, Google Maps JavaScript API, Chart.js, Simulated BLE Sensors",
    architecture: "Ambulance Live GPS -> City Signal Clearance Algorithm -> Realtime ECG/SpO2 Triage Dashboard",
    difficulty: "Podium Contender (Smart City Integration)",
    formTrack: "Connected & Autonomous Technologies"
  },
  "ai-ai": {
    theme: "AI & Intelligent Systems",
    sdg: "UN SDG 9: Industry, Innovation & Infrastructure",
    title: "Autonomous Developer Multi-Agent for Refactoring & Unit Tests",
    conceptSummary: "Collaborative AI agents performing semantic code refactoring, AST vulnerability scanning, and test synthesis.",
    techStack: "Google Gemini 1.5 Pro, LangChain, AST Parsers, Monaco Editor",
    architecture: "Monolithic Codebase -> Planner Agent -> Vulnerability Auditor -> Test Suite Generator",
    difficulty: "Grand Winner Potential (Cutting-Edge Agents)",
    formTrack: "AI & Intelligent Systems"
  },
  "default": {
    theme: "Secure & Sustainable Future",
    sdg: "UN SDG 16: Peace, Justice & Strong Institutions",
    title: "Decentralized Cyber Threat Intelligence & Phishing Guard",
    conceptSummary: "Real-time client-side heuristics and zero-trust threat verification protecting users from deceptive cyber attacks.",
    techStack: "Google Gemini API, Chrome Extension Manifest V3, WebAssembly, Python",
    architecture: "Live URL/Message Stream -> Heuristic Parser -> Gemini Risk Evaluator -> Instant Warning Modal",
    difficulty: "Podium Contender (Everyday Utility)",
    formTrack: "Secure & Sustainable Future"
  }
};

function selectMatcherSkill(btn, skill) {
  document.querySelectorAll("#matcherSkillsGroup .matcher-chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  selectedMatcherSkill = skill;
}
window.selectMatcherSkill = selectMatcherSkill;

function selectMatcherDomain(btn, domain) {
  document.querySelectorAll("#matcherDomainsGroup .matcher-chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  selectedMatcherDomain = domain;
}
window.selectMatcherDomain = selectMatcherDomain;

function runAiIdeaMatcher() {
  const resultBox = document.getElementById("aiMatchResultBox");
  const btn = document.getElementById("runAiMatcherBtn");
  if (!resultBox) return;

  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Synthesizing Blueprint with Gemini...`;
  btn.disabled = true;

  setTimeout(() => {
    const key = `${selectedMatcherSkill}-${selectedMatcherDomain}`;
    const blueprint = AI_BLUEPRINTS[key] || AI_BLUEPRINTS["default"];

    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div class="match-result-card border-google-blue">
        <div class="d-flex justify-between align-center mb-3">
          <span class="badge-pill bg-google-blue-subtle">OFFICIAL THEME: ${blueprint.theme}</span>
          <span class="badge-pill bg-google-green-subtle">${blueprint.difficulty}</span>
        </div>

        <h3 class="result-title text-google-blue mb-2"><i class="fa-solid fa-sparkles"></i> ${blueprint.title}</h3>
        <div class="mb-3">
          <span class="badge-pill bg-google-yellow-subtle" style="font-size:0.8rem;">
            <i class="fa-solid fa-earth-americas"></i> ${blueprint.sdg}
          </span>
        </div>
        <p class="result-concept mb-3"><strong>Concept Overview:</strong> ${blueprint.conceptSummary}</p>

        <div class="result-specs-box mb-3">
          <div><strong><i class="fa-solid fa-microchip text-google-yellow"></i> Recommended Tech Stack:</strong></div>
          <p class="font-mono text-google-blue mb-2" style="font-size:0.9rem;">${blueprint.techStack}</p>
          
          <div><strong><i class="fa-solid fa-diagram-project text-google-green"></i> Suggested Architecture Flow:</strong></div>
          <p class="font-mono text-secondary mb-0" style="font-size:0.88rem;">${blueprint.architecture}</p>
        </div>

        <div class="d-flex gap-3 mt-4" style="flex-wrap:wrap;">
          <button type="button" class="btn btn-primary" onclick="selectThemeInForm('${blueprint.formTrack}')">
            <i class="fa-solid fa-rocket"></i> Select Theme & Register Team
          </button>
          <a href="#events" class="btn btn-outline" onclick="switchTab('events')">
            <i class="fa-solid fa-layer-group"></i> View All 3 Official Themes
          </a>
        </div>
      </div>
    `;

    btn.innerHTML = `<span>Generate Intelligent Match & Blueprint</span> <i class="fa-solid fa-wand-magic-sparkles"></i>`;
    btn.disabled = false;
    resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast("✨ Generated custom hackathon project concept!");
  }, 600);
}
window.runAiIdeaMatcher = runAiIdeaMatcher;

function applyMatchedTrack(trackValue) {
  switchTab("register");
  const select = document.getElementById("trackSelect");
  if (select) {
    select.value = trackValue;
    updateLiveBadge();
    showToast(`✅ Selected Track updated to: ${trackValue}`);
  }
}
window.applyMatchedTrack = applyMatchedTrack;

// =============================================================================
// 20. INTERACTIVE HACKATHON SCORING RUBRIC SIMULATOR
// =============================================================================

function initRubricSimulator() {
  updateRubricScore();
}

function updateRubricScore() {
  const rInnov = parseInt(document.getElementById("rangeInnovation")?.value || 26, 10);
  const rTech = parseInt(document.getElementById("rangeTechnical")?.value || 22, 10);
  const rImpact = parseInt(document.getElementById("rangeImpact")?.value || 20, 10);
  const rPitch = parseInt(document.getElementById("rangePitch")?.value || 17, 10);

  const valInnov = document.getElementById("valInnovation");
  const valTech = document.getElementById("valTechnical");
  const valImpact = document.getElementById("valImpact");
  const valPitch = document.getElementById("valPitch");

  if (valInnov) valInnov.textContent = `${rInnov} pts`;
  if (valTech) valTech.textContent = `${rTech} pts`;
  if (valImpact) valImpact.textContent = `${rImpact} pts`;
  if (valPitch) valPitch.textContent = `${rPitch} pts`;

  const total = rInnov + rTech + rImpact + rPitch;
  const scoreVal = document.getElementById("simScoreVal");
  const tierLabel = document.getElementById("simTierLabel");
  const feedbackText = document.getElementById("juryFeedbackText");

  if (scoreVal) scoreVal.textContent = total;

  let tier = "Participation Tier";
  let tip = "Ensure your project satisfies the baseline requirements and includes a functional repository.";

  if (total >= 90) {
    tier = "👑 Grand Champion Contender";
    tip = "Grand Winner potential! Focus on perfecting your live demonstration timing (within 3 minutes) and show measurable UN SDG metrics.";
  } else if (total >= 80) {
    tier = "🥈 1st Runner Up Contender";
    tip = "Podium standing! To gain that final 5-10 points, strengthen your technical architecture and showcase edge-case handling or offline resiliency.";
  } else if (total >= 70) {
    tier = "🥉 2nd Runner Up Contender";
    tip = "Strong semi-finalist! Ensure your prototype has zero mock-data dependencies and that all team members speak during jury Q&A.";
  } else if (total >= 55) {
    tier = "Top 30 Finalist Team";
    tip = "Good concept! Refine your pitch deck using the ARENACORE '26 official Google Slides template to clearly highlight your innovation factor.";
  }

  if (tierLabel) tierLabel.textContent = tier;
  if (feedbackText) {
    feedbackText.innerHTML = `<strong>Jury Pro-Tip:</strong> ${tip}`;
  }
}
window.updateRubricScore = updateRubricScore;

// =============================================================================
// 21. 24-HOUR TIMELINE SCRUB SIMULATOR
// =============================================================================

let simInterval = null;
let isSimulating = false;

const TIMELINE_PHASES = [
  { hour: 0, text: "Hour 0:00 • Check-in, Breakfast & Wi-Fi Configuration", phase: "Reporting & Setup", coffee: "Hot Tea / Coffee Active", mentors: "Check-in Desk" },
  { hour: 2, text: "Hour 2:00 • Grand Inauguration & Keynote Address", phase: "Inaugural Ceremony", coffee: "Snacks Bar", mentors: "Faculty Mentors" },
  { hour: 4, text: "Hour 4:00 • Project Idea Lock & First Coding Sprint", phase: "Sprint Round 1", coffee: "Energy Drinks Available", mentors: "Floor Walkway Setup" },
  { hour: 8, text: "Hour 8:00 • Mentorship Round 1: Architecture & Feasibility", phase: "Mentorship Review 1", coffee: "Evening Refreshments", mentors: "1-on-1 Lab Reviews" },
  { hour: 12, text: "Hour 12:00 • Dinner & Midnight Dev Kahoot Jam", phase: "Midnight Coding Rush", coffee: "Midnight Coffee & Pizza", mentors: "On-call Night Mentors" },
  { hour: 16, text: "Hour 16:00 • Mentorship Round 2: Midnight Checkpoint & Debugging", phase: "Midnight Debugging", coffee: "Hot Beverages 24/7", mentors: "Senior Architects" },
  { hour: 20, text: "Hour 20:00 • Morning Breakfast & UI/UX Deployment Prep", phase: "Pre-Code Freeze", coffee: "Fresh Breakfast", mentors: "Deployment Assistance" },
  { hour: 24, text: "Hour 24:00 • CODE FREEZE & Grand Jury Live Demos!", phase: "Stage Presentations", coffee: "Valedictory Tea", mentors: "Industrial Jury Panel" }
];

function initTimelineScrubber() {
  handleTimelineScrub(0);
}

function handleTimelineScrub(hourVal) {
  const h = parseInt(hourVal, 10);
  const statusEl = document.getElementById("scrubberStatusText");
  const coffeeEl = document.getElementById("hudCoffeeStatus");
  const mentorEl = document.getElementById("hudMentorStatus");
  const phaseEl = document.getElementById("hudPhaseStatus");

  let current = TIMELINE_PHASES[0];
  for (let i = 0; i < TIMELINE_PHASES.length; i++) {
    if (h >= TIMELINE_PHASES[i].hour) {
      current = TIMELINE_PHASES[i];
    }
  }

  if (statusEl) statusEl.textContent = `Hour ${h}:00 • ${current.phase}`;
  if (coffeeEl) coffeeEl.textContent = current.coffee;
  if (mentorEl) mentorEl.textContent = current.mentors;
  if (phaseEl) phaseEl.textContent = current.phase;

  document.querySelectorAll(".scrubber-markers .marker").forEach(m => {
    const mHour = parseInt(m.getAttribute("data-hour") || 0, 10);
    if (mHour <= h) m.classList.add("active");
    else m.classList.remove("active");
  });
}
window.handleTimelineScrub = handleTimelineScrub;

function toggleTimelineSimulation() {
  const icon = document.getElementById("playSimIcon");
  const text = document.getElementById("playSimText");
  const range = document.getElementById("timelineScrubberRange");
  if (!range) return;

  isSimulating = !isSimulating;

  if (isSimulating) {
    if (icon) icon.className = "fa-solid fa-pause";
    if (text) text.textContent = "Pause";
    showToast("▶️ Simulating 24-Hour Hackathon Run of Show");

    simInterval = setInterval(() => {
      let val = parseInt(range.value, 10) + 1;
      if (val > 24) val = 0;
      range.value = val;
      handleTimelineScrub(val);

      if (val === 24) {
        toggleTimelineSimulation();
        showToast("🏁 24-Hour Code Freeze reached! Stage presentation starts.");
      }
    }, 850);
  } else {
    if (icon) icon.className = "fa-solid fa-play";
    if (text) text.textContent = "Simulate 24h";
    if (simInterval) clearInterval(simInterval);
  }
}
window.toggleTimelineSimulation = toggleTimelineSimulation;

function resetTimelineSimulation() {
  const range = document.getElementById("timelineScrubberRange");
  if (isSimulating) toggleTimelineSimulation();
  if (range) {
    range.value = 0;
    handleTimelineScrub(0);
  }
}
window.resetTimelineSimulation = resetTimelineSimulation;

// =============================================================================
// 22. OFFICIAL ARENACORE '26 HACKATHON GUIDELINES (18 RULES)
// =============================================================================

let currentGuidelineCategory = 'all';

function switchRuleCategory(category) {
  currentGuidelineCategory = category;

  document.querySelectorAll('.guidelines-cat-btn').forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  applyGuidelinesFilter();
}
window.switchRuleCategory = switchRuleCategory;

function filterGuidelines() {
  const searchInput = document.getElementById('guidelinesSearchInput');
  const clearBtn = document.getElementById('clearGuidelinesSearch');
  const query = (searchInput?.value || '').trim();

  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? 'block' : 'none';
  }

  applyGuidelinesFilter();
}
window.filterGuidelines = filterGuidelines;

function clearGuidelinesSearch() {
  const searchInput = document.getElementById('guidelinesSearchInput');
  const clearBtn = document.getElementById('clearGuidelinesSearch');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  applyGuidelinesFilter();
}
window.clearGuidelinesSearch = clearGuidelinesSearch;

function applyGuidelinesFilter() {
  const query = (document.getElementById('guidelinesSearchInput')?.value || '').toLowerCase().trim();
  const cards = document.querySelectorAll('.guideline-card');
  const noResultsEl = document.getElementById('guidelinesNoResults');
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category') || '';
    const cardText = card.innerText.toLowerCase();

    const matchesCategory = (currentGuidelineCategory === 'all' || cardCat.includes(currentGuidelineCategory));
    const matchesSearch = !query || cardText.includes(query);

    if (matchesCategory && matchesSearch) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (noResultsEl) {
    noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}
window.applyGuidelinesFilter = applyGuidelinesFilter;

// ==========================================================================
// ARENACORE '26 Live Font Style Switcher
// ==========================================================================
(function initFontSwitcher() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.font-switch-btn');
    if (!btn) return;
    const font = btn.dataset.font;
    if (!font) return;

    // Update active button state
    document.querySelectorAll('.font-switch-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update brand typography classes
    const brand = document.querySelector('.arenacore-brand-pro');
    if (brand) {
      brand.classList.remove('font-clash', 'font-syne', 'font-cabinet', 'font-unbounded', 'font-orbitron');
      brand.classList.add(`font-${font}`);
    }

    try {
      localStorage.setItem('arenacore_preferred_font', font);
    } catch (_) {}
  });

  // Restore saved preference on load if set
  document.addEventListener('DOMContentLoaded', () => {
    try {
      const saved = localStorage.getItem('arenacore_preferred_font');
      if (saved) {
        const targetBtn = document.querySelector(`.font-switch-btn[data-font="${saved}"]`);
        if (targetBtn) targetBtn.click();
      }
    } catch (_) {}
  });
})();
