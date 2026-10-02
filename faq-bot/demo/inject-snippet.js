/**
 * ARENACORE '26 - Live Site DevTools Injection Snippet
 * 
 * Paste this snippet into the Chrome / Firefox DevTools Console on https://arenacore26.netlify.app
 * while running your local static server (e.g. on port 8080).
 */

(function () {
  // 1. Configure your local server origin:
  const LOCAL_ORIGIN = "http://localhost:8080";

  // Prevent multiple injections
  if (window.__AC26_FAQBOT_INITIALIZED__ || document.getElementById("ac26faq-root")) {
    console.log("ℹ️ [ARENA-Bot] Widget already injected and active!");
    if (window.ARENACORE_FAQBOT) window.ARENACORE_FAQBOT.open();
    return;
  }

  console.log(`🚀 [ARENA-Bot] Injecting FAQ Bot from ${LOCAL_ORIGIN}...`);

  // First load knowledge base, then load widget logic
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = (err) => reject(new Error(`Failed to load ${src}. Ensure your local server is running (e.g. python -m http.server 8080) and CORS is allowed.`));
      document.head.appendChild(s);
    });
  };

  loadScript(`${LOCAL_ORIGIN}/faq-bot/faq-data.js`)
    .then(() => loadScript(`${LOCAL_ORIGIN}/faq-bot/arenacore-faqbot.js`))
    .then(() => {
      console.log("✅ [ARENA-Bot] Successfully injected and initialized on live site!");
      setTimeout(() => {
        if (window.ARENACORE_FAQBOT) {
          window.ARENACORE_FAQBOT.open();
        }
      }, 500);
    })
    .catch((err) => {
      console.error("❌ [ARENA-Bot] Injection failed:", err);
      console.warn(
        "💡 CSP Fallback Note: If Netlify Content-Security-Policy blocks localhost scripts, you can test directly in Chrome via DevTools -> Sources -> Overrides (right click index.html -> Save for overrides -> add the script tag before </body>) or test on the local demo page at /demo/index.html."
      );
    });
})();
