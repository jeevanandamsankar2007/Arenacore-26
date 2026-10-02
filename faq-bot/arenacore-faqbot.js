/**
 * ARENACORE '26 - Standalone FAQ Chatbot Widget (ARENA-Bot)
 * Department of Information Technology, PSNACET x GDG On Campus PSNACET x ACM PSNACET
 * 
 * Production-ready Vanilla JS (ES2018), zero dependencies, zero build steps.
 * Entirely self-contained within an open Shadow DOM.
 */

(function () {
  "use strict";

  // Guard against double initialization
  if (window.__AC26_FAQBOT_INITIALIZED__ || document.getElementById("ac26faq-root")) {
    return;
  }
  window.__AC26_FAQBOT_INITIALIZED__ = true;

  // =============================================================================
  // 1. INLINED ASSETS & ICONS (Zero external request dependency)
  // =============================================================================
  const GDG_LOGO_SVG = `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#f1f3f4" stroke-width="1"/>
  <line x1="43" y1="32" x2="22" y2="50" stroke="#EA4335" stroke-width="12" stroke-linecap="round"/>
  <line x1="22" y1="50" x2="43" y2="68" stroke="#4285F4" stroke-width="12" stroke-linecap="round"/>
  <line x1="57" y1="32" x2="78" y2="50" stroke="#34A853" stroke-width="12" stroke-linecap="round"/>
  <line x1="78" y1="50" x2="57" y2="68" stroke="#FBBC05" stroke-width="12" stroke-linecap="round"/>
</svg>`;

  const ARENA_ROBOT_ICON_SVG = `<svg viewBox="0 0 64 64" class="ac26faq-bubble-icon ac26faq-icon-chat" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ac26BotVisor" x1="16" y1="24" x2="48" y2="40" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0b1329"/>
        <stop offset="1" stop-color="#1e293b"/>
      </linearGradient>
      <linearGradient id="ac26BotHead" x1="14" y1="12" x2="50" y2="52" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ffffff"/>
        <stop offset="0.7" stop-color="#f8fafc"/>
        <stop offset="1" stop-color="#e2e8f0"/>
      </linearGradient>
      <linearGradient id="ac26EyeGlowGrad" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#38bdf8"/>
        <stop offset="1" stop-color="#06b6d4"/>
      </linearGradient>
      <filter id="ac26GlowFilter" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    <!-- Left Antenna with Google Blue & Red Tip -->
    <rect x="7" y="27" width="5" height="11" rx="2.5" fill="#4285F4"/>
    <circle cx="9.5" cy="24" r="3.2" fill="#EA4335" filter="url(#ac26GlowFilter)"/>

    <!-- Right Antenna with Google Green & Yellow Tip -->
    <rect x="52" y="27" width="5" height="11" rx="2.5" fill="#34A853"/>
    <circle cx="54.5" cy="24" r="3.2" fill="#FBBC05" filter="url(#ac26GlowFilter)"/>

    <!-- Top Signal Transmitter with Cyan Pulse -->
    <path d="M32 6v7" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/>
    <circle cx="32" cy="5" r="3.5" fill="#38bdf8" filter="url(#ac26GlowFilter)"/>

    <!-- Robot Head Frame -->
    <path d="M15 22C15 17 18.5 13 23.5 13H40.5C45.5 13 49 17 49 22V38C49 43.5 44.5 48 39 48H25C19.5 48 15 43.5 15 38V22Z" fill="url(#ac26BotHead)" stroke="#cbd5e1" stroke-width="1.2"/>

    <!-- Cyber Glass Visor -->
    <rect x="19" y="21" width="26" height="17" rx="8" fill="url(#ac26BotVisor)" stroke="rgba(56, 189, 248, 0.5)" stroke-width="1.2"/>
    
    <!-- Glowing Visor Eyes (Cyan with highlight) -->
    <ellipse cx="26" cy="29.5" rx="3.8" ry="4.5" fill="url(#ac26EyeGlowGrad)" filter="url(#ac26GlowFilter)"/>
    <circle cx="27" cy="28" r="1.5" fill="#ffffff"/>
    <ellipse cx="38" cy="29.5" rx="3.8" ry="4.5" fill="url(#ac26EyeGlowGrad)" filter="url(#ac26GlowFilter)"/>
    <circle cx="39" cy="28" r="1.5" fill="#ffffff"/>

    <!-- Smiling Digital Mouth Arc -->
    <path d="M28.5 34.5C30 36.2 34 36.2 35.5 34.5" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round"/>

    <!-- ArenaCore Diamond Chest Core -->
    <path d="M28 52L32 48L36 52L32 56L28 52Z" fill="#4285F4"/>
    <circle cx="32" cy="52" r="1.5" fill="#ffffff"/>
  </svg>`;

  const ICONS = {
    chat: ARENA_ROBOT_ICON_SVG,
    close: `<svg viewBox="0 0 24 24" class="ac26faq-bubble-icon ac26faq-icon-close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
    minimize: `<svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>`,
    trash: `<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,
    send: `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`,
    thumbUp: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>`,
    thumbDown: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" width="14" height="14"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>`,
    external: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
  };

  // Embedded CSS inside Shadow DOM to guarantee zero runtime layout breakages
  const WIDGET_CSS = `
:host {
  /* EDIT HERE TO RETHEME */
  --ac26-bg: var(--bg-body, #0a0d14);
  --ac26-surface: var(--bg-surface, #111726);
  --ac26-surface-2: var(--bg-subtle, #172133);
  --ac26-surface-3: var(--bg-subtle-2, #1e2b42);
  --ac26-border: var(--border-light, rgba(255, 255, 255, 0.12));
  --ac26-border-subtle: var(--border-subtle, rgba(255, 255, 255, 0.07));
  --ac26-border-glow: rgba(66, 133, 244, 0.4);

  --ac26-text: var(--text-primary, #f8fafc);
  --ac26-text-secondary: var(--text-secondary, #cbd5e1);
  --ac26-text-muted: var(--text-muted, #94a3b8);
  --ac26-text-inverse: #0a0d14;

  --ac26-blue: var(--g-blue, #4285F4);
  --ac26-blue-hover: var(--g-blue-hover, #1a73e8);
  --ac26-blue-soft: rgba(66, 133, 244, 0.18);
  --ac26-red: var(--g-red, #EA4335);
  --ac26-yellow: var(--g-yellow, #FBBC05);
  --ac26-green: var(--g-green, #34A853);
  --ac26-green-soft: rgba(52, 168, 83, 0.18);
  --ac26-cyan: #38bdf8;

  --ac26-primary: var(--primary, var(--ac26-blue));
  --ac26-primary-hover: var(--primary-hover, var(--ac26-blue-hover));
  --ac26-gradient-primary: linear-gradient(135deg, #4285F4 0%, #2563EB 50%, #1D4ED8 100%);
  --ac26-gradient-user: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
  --ac26-gradient-header: linear-gradient(135deg, #111726 0%, #172133 100%);
  --ac26-gradient-bubble: linear-gradient(135deg, #4285F4 0%, #1a73e8 100%);

  --ac26-font-display: var(--font-display, 'Unbounded', 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  --ac26-font-heading: var(--font-heading, 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  --ac26-font-body: var(--font-body, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  --ac26-font-mono: var(--font-mono, 'Space Grotesk', monospace);

  --ac26-radius-sm: var(--radius-sm, 8px);
  --ac26-radius-md: var(--radius-md, 14px);
  --ac26-radius-lg: var(--radius-lg, 20px);
  --ac26-radius-full: var(--radius-full, 9999px);

  --ac26-shadow-sm: var(--shadow-sm, 0 2px 8px -1px rgba(0, 0, 0, 0.45));
  --ac26-shadow-md: var(--shadow-md, 0 8px 24px -4px rgba(0, 0, 0, 0.6));
  --ac26-shadow-lg: var(--shadow-lg, 0 16px 40px -8px rgba(0, 0, 0, 0.7));
  --ac26-shadow-glow: 0 8px 30px rgba(66, 133, 244, 0.35);

  --ac26-transition-fast: var(--transition-fast, 0.18s cubic-bezier(0.4, 0, 0.2, 1));
  --ac26-transition-base: var(--transition-base, 0.28s cubic-bezier(0.4, 0, 0.2, 1));
  --ac26-transition-spring: var(--transition-spring, 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275));

  --ac26-bubble-right: 24px;
  --ac26-bubble-bottom: 24px;
  --ac26-bubble-size: 66px;
  --ac26-window-width: clamp(420px, 50vw, 680px);
  --ac26-window-height: min(80vh, 760px);

  box-sizing: border-box;
  font-family: var(--ac26-font-body);
  color: var(--ac26-text);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.ac26faq-wrapper {
  position: fixed;
  right: var(--ac26-bubble-right);
  bottom: var(--ac26-bubble-bottom);
  z-index: 2147483000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none;
}

.ac26faq-bubble-btn {
  pointer-events: auto;
  width: var(--ac26-bubble-size);
  height: var(--ac26-bubble-size);
  border-radius: var(--ac26-radius-full);
  background: radial-gradient(circle at 35% 35%, #1e293b, #0a0f1d 85%);
  border: 2px solid rgba(66, 133, 244, 0.5);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(66, 133, 244, 0.45);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: relative;
  transition: transform var(--ac26-transition-spring), box-shadow var(--ac26-transition-base);
  outline: none;
  touch-action: manipulation;
  user-select: none;
}

.ac26faq-bubble-btn::before {
  content: "";
  position: absolute;
  inset: -3.5px;
  border-radius: var(--ac26-radius-full);
  background: conic-gradient(from 0deg, #4285F4, #EA4335, #FBBC05, #34A853, #4285F4);
  z-index: -1;
  animation: ac26-spin-halo 4.5s linear infinite;
  opacity: 0.9;
  filter: blur(1.5px);
}

@keyframes ac26-spin-halo {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.ac26faq-bubble-btn:hover {
  transform: scale(1.08) translateY(-3px);
  box-shadow: 0 16px 40px rgba(66, 133, 244, 0.6), 0 0 30px rgba(56, 189, 248, 0.5);
}

.ac26faq-bubble-btn:hover::before {
  opacity: 1;
  filter: blur(2.5px);
}

.ac26faq-bubble-btn:focus-visible {
  outline: 3px solid var(--ac26-cyan);
  outline-offset: 4px;
}

.ac26faq-bubble-btn:active {
  transform: scale(0.95);
}

.ac26faq-fab-badge {
  position: absolute;
  top: -12px;
  right: -6px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #38bdf8;
  font-family: var(--ac26-font-mono, monospace);
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.6px;
  padding: 3px 8px;
  border-radius: 999px;
  border: 1.5px solid #38bdf8;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6), 0 0 12px rgba(56, 189, 248, 0.5);
  pointer-events: none;
  white-space: nowrap;
  animation: ac26-fab-pulse 2.4s ease-in-out infinite;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 10;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.ac26faq-fab-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34A853;
  box-shadow: 0 0 6px #34A853;
  display: inline-block;
}

@keyframes ac26-fab-pulse {
  0%, 100% { transform: translateY(0); box-shadow: 0 4px 14px rgba(0,0,0,0.6), 0 0 12px rgba(56, 189, 248, 0.5); }
  50% { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(0,0,0,0.7), 0 0 18px rgba(56, 189, 248, 0.8); }
}

.ac26faq-wrapper.is-open .ac26faq-fab-badge {
  opacity: 0;
  transform: scale(0.7);
  pointer-events: none;
}

.ac26faq-pulse-ring {
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border-radius: var(--ac26-radius-full);
  border: 2px solid rgba(56, 189, 248, 0.6);
  animation: ac26-pulse 2.4s cubic-bezier(0.24, 0, 0.38, 1) infinite;
  pointer-events: none;
}

.ac26faq-wrapper.has-opened .ac26faq-pulse-ring {
  display: none;
}

@keyframes ac26-pulse {
  0% { transform: scale(0.95); opacity: 0.9; }
  70% { transform: scale(1.35); opacity: 0; }
  100% { transform: scale(1.4); opacity: 0; }
}

.ac26faq-badge-dot {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  background-color: var(--ac26-red);
  border: 2.5px solid var(--ac26-surface);
  border-radius: var(--ac26-radius-full);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.ac26faq-wrapper.has-opened .ac26faq-badge-dot {
  transform: scale(0);
  opacity: 0;
}

.ac26faq-bubble-icon {
  width: 42px;
  height: 42px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
  position: absolute;
}

.ac26faq-icon-close {
  opacity: 0;
  transform: rotate(-90deg) scale(0.7);
}

.ac26faq-wrapper.is-open .ac26faq-icon-chat {
  opacity: 0;
  transform: rotate(90deg) scale(0.7);
}

.ac26faq-wrapper.is-open .ac26faq-icon-close {
  opacity: 1;
  transform: rotate(0) scale(1);
}

.ac26faq-tooltip {
  pointer-events: auto;
  position: absolute;
  bottom: calc(var(--ac26-bubble-size) + 14px);
  right: 0;
  background: var(--ac26-surface);
  border: 1px solid var(--ac26-border-glow);
  padding: 10px 14px;
  border-radius: var(--ac26-radius-md);
  box-shadow: var(--ac26-shadow-md), 0 0 20px rgba(66, 133, 244, 0.25);
  font-family: var(--ac26-font-heading);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--ac26-text);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transform: translateY(10px) scale(0.95);
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
}

.ac26faq-tooltip.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.ac26faq-tooltip::after {
  content: "";
  position: absolute;
  bottom: -6px;
  right: 22px;
  width: 10px;
  height: 10px;
  background: var(--ac26-surface);
  border-right: 1px solid var(--ac26-border-glow);
  border-bottom: 1px solid var(--ac26-border-glow);
  transform: rotate(45deg);
}

.ac26faq-tooltip-close {
  background: none;
  border: none;
  color: var(--ac26-text-muted);
  cursor: pointer;
  padding: 2px 4px;
  font-size: 1rem;
  line-height: 1;
  border-radius: var(--ac26-radius-sm);
}

.ac26faq-tooltip-close:hover {
  color: var(--ac26-text);
}

.ac26faq-window {
  pointer-events: auto;
  position: absolute;
  bottom: calc(var(--ac26-bubble-size) + 16px);
  right: 0;
  width: var(--ac26-window-width);
  height: var(--ac26-window-height);
  background: var(--ac26-surface);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-lg);
  box-shadow: var(--ac26-shadow-lg), 0 0 40px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transform-origin: bottom right;
  opacity: 0;
  transform: scale(0.85) translateY(20px);
  visibility: hidden;
  transition: opacity 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              visibility 0.22s;
}

.ac26faq-wrapper.is-open .ac26faq-window {
  opacity: 1;
  transform: scale(1) translateY(0);
  visibility: visible;
}

.ac26faq-header {
  padding: 14px 18px;
  background: var(--ac26-gradient-header);
  border-bottom: 1px solid var(--ac26-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  user-select: none;
}

.ac26faq-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.ac26faq-avatar {
  width: 38px;
  height: 38px;
  border-radius: var(--ac26-radius-full);
  background: #ffffff;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.ac26faq-avatar svg,
.ac26faq-avatar img {
  width: 100%;
  height: 100%;
  border-radius: var(--ac26-radius-full);
}

.ac26faq-header-meta {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.ac26faq-header-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ac26faq-header-title {
  font-family: var(--ac26-font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ac26-text);
  letter-spacing: -0.3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ac26faq-online-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--ac26-green);
  background: var(--ac26-green-soft);
  padding: 2px 8px;
  border-radius: var(--ac26-radius-full);
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.ac26faq-online-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--ac26-green);
  box-shadow: 0 0 6px var(--ac26-green);
}

.ac26faq-header-subtitle {
  font-size: 0.75rem;
  color: var(--ac26-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ac26faq-header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.ac26faq-head-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--ac26-text-muted);
  width: 32px;
  height: 32px;
  border-radius: var(--ac26-radius-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--ac26-transition-fast);
}

.ac26faq-head-btn:hover {
  background: var(--ac26-surface-3);
  color: var(--ac26-text);
  border-color: var(--ac26-border);
}

.ac26faq-head-btn:focus-visible {
  outline: 2px solid var(--ac26-cyan);
}

.ac26faq-head-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.ac26faq-messages {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-behavior: smooth;
}

.ac26faq-messages::-webkit-scrollbar {
  width: 6px;
}
.ac26faq-messages::-webkit-scrollbar-thumb {
  background: var(--ac26-surface-3);
  border-radius: var(--ac26-radius-full);
}

.ac26faq-msg {
  display: flex;
  gap: 10px;
  max-width: 88%;
  animation: ac26-msg-fade 0.24s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes ac26-msg-fade {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.ac26faq-msg-user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.ac26faq-msg-bot {
  align-self: flex-start;
}

.ac26faq-msg-avatar {
  width: 28px;
  height: 28px;
  border-radius: var(--ac26-radius-full);
  background: #ffffff;
  padding: 2px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
}

.ac26faq-msg-avatar svg,
.ac26faq-msg-avatar img {
  width: 100%;
  height: 100%;
  border-radius: var(--ac26-radius-full);
}

.ac26faq-msg-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.ac26faq-msg-bubble {
  padding: 12px 16px;
  font-size: 0.92rem;
  line-height: 1.55;
  word-break: break-word;
  position: relative;
}

.ac26faq-msg-bot .ac26faq-msg-bubble {
  background: var(--ac26-surface-2);
  color: var(--ac26-text);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-md) var(--ac26-radius-md) var(--ac26-radius-md) 4px;
  box-shadow: var(--ac26-shadow-sm);
}

.ac26faq-msg-user .ac26faq-msg-bubble {
  background: var(--ac26-gradient-user);
  color: #ffffff;
  border-radius: var(--ac26-radius-md) var(--ac26-radius-md) 4px var(--ac26-radius-md);
  box-shadow: 0 4px 14px rgba(29, 78, 216, 0.3);
}

.ac26faq-msg-bubble p {
  margin-bottom: 6px;
}
.ac26faq-msg-bubble p:last-child {
  margin-bottom: 0;
}
.ac26faq-msg-bubble strong {
  color: #ffffff;
  font-weight: 600;
}
.ac26faq-msg-bubble ul {
  margin: 6px 0 6px 18px;
  padding: 0;
}
.ac26faq-msg-bubble li {
  margin-bottom: 4px;
}
.ac26faq-msg-bubble a {
  color: var(--ac26-cyan);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.ac26faq-msg-bubble code {
  font-family: var(--ac26-font-mono);
  font-size: 0.82rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: var(--ac26-radius-sm);
  color: #38bdf8;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.ac26faq-msg-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  color: var(--ac26-text-muted);
  padding: 0 4px;
  opacity: 0.85;
}

.ac26faq-msg-user .ac26faq-msg-meta {
  justify-content: flex-end;
}

.ac26faq-bubble-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 4px;
}

.ac26faq-feedback-btn,
.ac26faq-copy-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--ac26-text-muted);
  font-size: 0.75rem;
  padding: 2px 4px;
  border-radius: var(--ac26-radius-sm);
  display: inline-flex;
  align-items: center;
  gap: 3px;
  transition: all var(--ac26-transition-fast);
}

.ac26faq-feedback-btn:hover,
.ac26faq-copy-btn:hover {
  color: var(--ac26-text);
  background: var(--ac26-surface-3);
}

.ac26faq-feedback-btn.active {
  color: var(--ac26-cyan);
}

.ac26faq-action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.ac26faq-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: var(--ac26-radius-full);
  font-family: var(--ac26-font-heading);
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--ac26-border);
  background: var(--ac26-surface-3);
  color: var(--ac26-text);
  transition: all var(--ac26-transition-fast);
  white-space: nowrap;
}

.ac26faq-action-btn:hover {
  background: var(--ac26-blue);
  color: #ffffff;
  border-color: var(--ac26-blue);
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.35);
  transform: translateY(-1px);
}

.ac26faq-action-btn svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.ac26faq-contact-card {
  margin-top: 10px;
  background: var(--ac26-surface-3);
  border: 1px solid var(--ac26-border-glow);
  border-radius: var(--ac26-radius-md);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ac26faq-contact-card-title {
  font-family: var(--ac26-font-heading);
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--ac26-cyan);
  display: flex;
  align-items: center;
  gap: 6px;
}

.ac26faq-contact-card-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ac26faq-contact-lead-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 6px 10px;
  background: var(--ac26-surface-2);
  border-radius: var(--ac26-radius-sm);
  border: 1px solid var(--ac26-border-subtle);
}

.ac26faq-lead-name {
  font-weight: 600;
  color: var(--ac26-text);
}

.ac26faq-lead-role {
  font-size: 0.72rem;
  color: var(--ac26-text-muted);
}

.ac26faq-lead-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.ac26faq-lead-btn {
  font-size: 0.75rem;
  padding: 3px 8px;
  background: var(--ac26-surface-3);
  color: var(--ac26-text-secondary);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-sm);
  text-decoration: none;
  font-weight: 500;
}

.ac26faq-lead-btn:hover {
  background: var(--ac26-blue);
  color: #ffffff;
  border-color: var(--ac26-blue);
}

.ac26faq-welcome-box {
  background: linear-gradient(180deg, rgba(66, 133, 244, 0.08) 0%, transparent 100%);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-lg);
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ac26faq-welcome-header {
  font-family: var(--ac26-font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ac26-text);
  line-height: 1.4;
}

.ac26faq-welcome-text {
  font-size: 0.88rem;
  color: var(--ac26-text-secondary);
  line-height: 1.5;
}

.ac26faq-category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 4px;
}

.ac26faq-cat-card {
  background: var(--ac26-surface-2);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-md);
  padding: 10px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all var(--ac26-transition-fast);
  text-align: left;
}

.ac26faq-cat-card:hover {
  background: var(--ac26-surface-3);
  border-color: var(--ac26-border-glow);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.ac26faq-cat-emoji {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.ac26faq-cat-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.ac26faq-cat-name {
  font-family: var(--ac26-font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--ac26-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ac26faq-cat-desc {
  font-size: 0.7rem;
  color: var(--ac26-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ac26faq-chips-container {
  padding: 8px 16px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  background: var(--ac26-surface);
  border-top: 1px solid var(--ac26-border-subtle);
  scrollbar-width: none;
}
.ac26faq-chips-container::-webkit-scrollbar {
  display: none;
}

.ac26faq-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--ac26-surface-2);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-full);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--ac26-text-secondary);
  cursor: pointer;
  transition: all var(--ac26-transition-fast);
  flex-shrink: 0;
  user-select: none;
}

.ac26faq-chip:hover {
  background: var(--ac26-surface-3);
  color: #ffffff;
  border-color: var(--ac26-border-glow);
  transform: translateY(-1px);
}

.ac26faq-chip:focus-visible {
  outline: 2px solid var(--ac26-cyan);
}

.ac26faq-suggestions {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 14px;
  right: 14px;
  background: var(--ac26-surface);
  border: 1px solid var(--ac26-border-glow);
  border-radius: var(--ac26-radius-md);
  box-shadow: var(--ac26-shadow-lg);
  overflow: hidden;
  z-index: 10;
  display: none;
  flex-direction: column;
}

.ac26faq-suggestions.show {
  display: flex;
}

.ac26faq-suggestion-item {
  padding: 10px 14px;
  font-size: 0.84rem;
  color: var(--ac26-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--ac26-border-subtle);
  transition: background var(--ac26-transition-fast);
}

.ac26faq-suggestion-item:last-child {
  border-bottom: none;
}

.ac26faq-suggestion-item:hover,
.ac26faq-suggestion-item.highlighted {
  background: var(--ac26-surface-3);
  color: #ffffff;
}

.ac26faq-sugg-arrow {
  color: var(--ac26-cyan);
  font-size: 0.75rem;
}

.ac26faq-input-bar {
  padding: 12px 16px;
  background: var(--ac26-surface);
  border-top: 1px solid var(--ac26-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

.ac26faq-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--ac26-surface-2);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-full);
  padding: 4px 6px 4px 16px;
}

.ac26faq-input-row:focus-within {
  border-color: var(--ac26-blue);
  box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.25);
}

.ac26faq-input-field {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--ac26-font-body);
  font-size: 0.92rem;
  color: var(--ac26-text);
  line-height: 1.4;
  padding: 6px 0;
}

.ac26faq-input-field::placeholder {
  color: var(--ac26-text-muted);
}

.ac26faq-send-btn {
  width: 38px;
  height: 38px;
  border-radius: var(--ac26-radius-full);
  background: var(--ac26-gradient-primary);
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.35);
}

.ac26faq-send-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 14px rgba(66, 133, 244, 0.5);
}

.ac26faq-send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}

.ac26faq-send-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.ac26faq-footer-note {
  font-size: 0.72rem;
  color: var(--ac26-text-muted);
  text-align: center;
  line-height: 1.3;
}

.ac26faq-typing-indicator {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
}

.ac26faq-typing-dot {
  width: 7px;
  height: 7px;
  background-color: var(--ac26-text-muted);
  border-radius: 50%;
  animation: ac26-typing 1.4s infinite ease-in-out both;
}

.ac26faq-typing-dot:nth-child(1) { animation-delay: -0.32s; }
.ac26faq-typing-dot:nth-child(2) { animation-delay: -0.16s; }
.ac26faq-typing-dot:nth-child(3) { animation-delay: 0s; }

@keyframes ac26-typing {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; background-color: var(--ac26-blue); }
}

.ac26faq-toast {
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid var(--ac26-border-glow);
  color: #ffffff;
  padding: 6px 14px;
  border-radius: var(--ac26-radius-full);
  font-size: 0.78rem;
  font-weight: 600;
  box-shadow: var(--ac26-shadow-md);
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease;
  z-index: 20;
}

.ac26faq-toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.ac26faq-confirm-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(10, 13, 20, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 30;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.ac26faq-confirm-overlay.show {
  opacity: 1;
  pointer-events: auto;
}

.ac26faq-confirm-dialog {
  background: var(--ac26-surface);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-lg);
  padding: 20px;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: center;
  box-shadow: var(--ac26-shadow-lg);
}

.ac26faq-confirm-title {
  font-family: var(--ac26-font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ac26-text);
}

.ac26faq-confirm-msg {
  font-size: 0.85rem;
  color: var(--ac26-text-secondary);
}

.ac26faq-confirm-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.ac26faq-confirm-btn {
  padding: 8px 16px;
  border-radius: var(--ac26-radius-full);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
}

.ac26faq-confirm-cancel {
  background: var(--ac26-surface-3);
  color: var(--ac26-text);
  border-color: var(--ac26-border);
}

.ac26faq-confirm-danger {
  background: var(--ac26-red);
  color: #ffffff;
}

@media (max-width: 640px) {
  :host {
    --ac26-bubble-right: 16px;
    --ac26-bubble-bottom: 16px;
  }
  .ac26faq-wrapper {
    right: var(--ac26-bubble-right);
    bottom: var(--ac26-bubble-bottom);
  }
  .ac26faq-window {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    max-width: 100vw;
    height: 88vh;
    height: 88dvh;
    border-radius: 24px 24px 0 0;
    border-bottom: none;
    border-left: none;
    border-right: none;
    transform-origin: bottom center;
    transform: translateY(100%);
  }
  .ac26faq-wrapper.is-open .ac26faq-window {
    transform: translateY(0);
  }
  .ac26faq-wrapper.is-open .ac26faq-bubble-btn {
    display: none;
  }
  .ac26faq-header {
    padding: 16px;
    border-radius: 24px 24px 0 0;
  }
  .ac26faq-category-grid {
    grid-template-columns: 1fr;
  }
  .ac26faq-msg {
    max-width: 92%;
  }
  .ac26faq-input-bar {
    padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .ac26faq-pulse-ring {
    display: none !important;
  }
}
`;

  // =============================================================================
  // 2. KNOWLEDGE BASE LOADING & DATA VERIFICATION
  // =============================================================================
  function getScriptSiblingUrl(filename) {
    let scriptSrc = "";
    if (document.currentScript && document.currentScript.src) {
      scriptSrc = document.currentScript.src;
    } else {
      const scripts = document.getElementsByTagName("script");
      for (let i = scripts.length - 1; i >= 0; i--) {
        const s = scripts[i];
        if (s.src && s.src.includes("arenacore-faqbot.js")) {
          scriptSrc = s.src;
          break;
        }
      }
    }
    if (scriptSrc) {
      const idx = scriptSrc.lastIndexOf("/");
      if (idx !== -1) {
        return scriptSrc.substring(0, idx + 1) + filename;
      }
    }
    return filename;
  }

  function ensureKnowledgeBaseLoaded(callback) {
    if (window.ARENACORE_FAQ && window.ARENACORE_FAQ.entries) {
      callback(window.ARENACORE_FAQ);
      return;
    }

    const script = document.createElement("script");
    script.src = getScriptSiblingUrl("faq-data.js");
    script.defer = true;
    script.onload = () => {
      if (window.ARENACORE_FAQ && window.ARENACORE_FAQ.entries) {
        callback(window.ARENACORE_FAQ);
      } else {
        console.error("[ARENA-Bot] faq-data.js loaded but window.ARENACORE_FAQ is missing.");
      }
    };
    script.onerror = () => {
      console.error("[ARENA-Bot] Failed to load faq-data.js from: " + script.src);
    };
    document.head.appendChild(script);
  }

  // =============================================================================
  // 3. RETRIEVAL & NLP ANSWER ENGINE
  // =============================================================================
  class AnswerEngine {
    constructor(faqData) {
      this.config = faqData.config || {};
      this.categories = faqData.categories || [];
      this.entries = (faqData.entries || []).concat(faqData.formEntries || []);
      this.smallTalk = faqData.smallTalk || {};
      this.lastCategory = null;
      this.lastEntryId = null;

      // Dictionaries & Precomputed Index
      this.abbreviations = {
        "reg": "registration",
        "app": "application",
        "amt": "amount fee payment",
        "fee": "fee payment cost",
        "fees": "fee payment cost",
        "cost": "fee payment cost",
        "price": "fee payment cost",
        "pay": "payment fee",
        "payment": "payment fee",
        "money": "fee payment amount",
        "cash": "prize cash money",
        "stay": "accommodation stay hostel",
        "hostel": "accommodation stay hostel",
        "sleep": "accommodation stay hostel",
        "accomodation": "accommodation stay hostel",
        "accommodation": "accommodation stay hostel",
        "wifi": "wifi internet connection",
        "wi-fi": "wifi internet connection",
        "net": "wifi internet",
        "internet": "wifi internet",
        "lap": "laptop",
        "lappy": "laptop",
        "cert": "certificate",
        "certs": "certificate",
        "certificate": "certificate",
        "sdg": "un sdg sustainable development goals",
        "sdgs": "un sdg sustainable development goals",
        "deadline": "deadline last date closing",
        "last date": "deadline last date closing",
        "due date": "deadline last date closing",
        "pc": "lab computer system",
        "pcs": "lab computer system",
        "system": "lab computer system",
        "computer": "lab computer system",
        "tnx": "thanks",
        "thx": "thanks",
        "ty": "thanks",
        "gde": "google developer experts",
        "gdes": "google developer experts",
        "hod": "head of department vincent antony kumar",
        "psna": "psnacet psna college",
        "psnacet": "psnacet psna college",
        "bonafide": "bonafide letter consent document",
        "bonafied": "bonafide letter consent document",
        "bonafid": "bonafide letter consent document",
        "bonofide": "bonafide letter consent document",
        "bonified": "bonafide letter consent document",
        "consent": "consent bonafide letter permission",
        "noc": "noc permission bonafide od letter",
        "od": "od permission bonafide letter on duty"
      };

      // Romanized Tamil / Tanglish expansion
      this.tanglishMap = {
        "evlo": "how much",
        "evalo": "how much",
        "ethana": "how many team count",
        "ethanai": "how many team count",
        "ruba": "fee money payment cost",
        "rooba": "fee money payment cost",
        "kaasu": "fee money payment cost",
        "panam": "fee money payment cost",
        "eppo": "when date schedule time",
        "eppa": "when date schedule time",
        "enga": "where venue location address",
        "enge": "where venue location address",
        "nadakum": "happen event schedule date",
        "nadakuthu": "happen event schedule date",
        "peru": "people members team size",
        "aal": "people members team size",
        "mudinjidha": "closed deadline over expired",
        "mudiyum": "end close deadline date",
        "thanga": "accommodation stay",
        "thanguvathu": "accommodation stay",
        "sapadu": "food meals lunch dinner",
        "saapadu": "food meals lunch dinner",
        "thevaya": "mandatory required rules",
        "kattanum": "pay payment fee",
        "kattanuma": "pay payment fee",
        "kattalama": "pay payment fee",
        "jeicha": "win prize winner champion",
        "jeikuravanga": "win prize winner champion",
        "yar": "who contact leads organizers",
        "yaaru": "who contact leads organizers",
        "yarai": "who contact leads organizers",
        "pesanum": "call phone contact leads",
        "vanakkam": "hello greeting",
        "venum": "need required",
        "kedaikum": "available get find",
        "vanguradhu": "get obtain receive",
        "eppadi": "how"
      };

      this.index = [];
      this.vocab = new Set();
      this.docFreqs = {};
      this.avgDocLength = 0;
      this.buildIndex();
    }

    // Normalization & Stemming
    normalize(text) {
      if (!text) return "";
      let s = text.toLowerCase();
      s = s.replace(/\bbona\s+fide\b/g, "bonafide");
      s = s.replace(/\bon\s+duty\b/g, "od");

      // Expand Tanglish tokens
      const words = s.replace(/[^a-z0-9\s]/g, " ").split(/\s+/);
      const expanded = [];
      for (const w of words) {
        if (!w) continue;
        if (this.tanglishMap[w]) {
          expanded.push(this.tanglishMap[w]);
        } else if (this.abbreviations[w]) {
          expanded.push(this.abbreviations[w]);
        } else {
          expanded.push(w);
        }
      }
      return expanded.join(" ");
    }

    tokenize(text) {
      const normalized = this.normalize(text);
      const rawTokens = normalized.split(/\s+/).filter(t => t.length > 1);
      return rawTokens.map(t => this.stem(t));
    }

    stem(word) {
      // Light suffix stripping for common plurals and inflections
      if (word.endsWith("ing") && word.length > 5) return word.slice(0, -3);
      if (word.endsWith("tion") && word.length > 6) return word.slice(0, -4);
      if (word.endsWith("ment") && word.length > 6) return word.slice(0, -4);
      if (word.endsWith("ties") && word.length > 5) return word.slice(0, -4) + "ty";
      if (word.endsWith("ies") && word.length > 4) return word.slice(0, -3) + "y";
      if (word.endsWith("es") && word.length > 4) return word.slice(0, -2);
      if (word.endsWith("ed") && word.length > 4) return word.slice(0, -2);
      if (word.endsWith("s") && !word.endsWith("ss") && word.length > 3) return word.slice(0, -1);
      return word;
    }

    // Damerau-Levenshtein typo tolerance
    damerauLevenshtein(a, b) {
      if (a === b) return 0;
      const al = a.length, bl = b.length;
      if (al === 0) return bl;
      if (bl === 0) return al;

      const matrix = [];
      for (let i = 0; i <= al; i++) {
        matrix[i] = [i];
      }
      for (let j = 0; j <= bl; j++) {
        matrix[0][j] = j;
      }

      for (let i = 1; i <= al; i++) {
        for (let j = 1; j <= bl; j++) {
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1,      // deletion
            matrix[i][j - 1] + 1,      // insertion
            matrix[i - 1][j - 1] + cost // substitution
          );
          if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
            matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost); // transposition
          }
        }
      }
      return matrix[al][bl];
    }

    fuzzyMatchToken(token) {
      if (this.vocab.has(token)) return token;
      if (token.length <= 3) return token;

      let bestMatch = token;
      let minDistance = 999;
      const maxAllowed = token.length <= 5 ? 1 : 2;

      for (const vocabWord of this.vocab) {
        if (Math.abs(vocabWord.length - token.length) > maxAllowed) continue;
        const dist = this.damerauLevenshtein(token, vocabWord);
        if (dist <= maxAllowed && dist < minDistance) {
          minDistance = dist;
          bestMatch = vocabWord;
        }
      }
      return bestMatch;
    }

    buildIndex() {
      let totalLength = 0;

      this.entries.forEach(entry => {
        const textToAnalyze = [
          entry.question,
          entry.question, // double-weight question title
          (entry.keywords || []).join(" "),
          (entry.synonyms || []).join(" "),
          entry.answer
        ].join(" ");

        const tokens = this.tokenize(textToAnalyze);
        const termFreqs = {};
        const uniqueTerms = new Set();

        tokens.forEach(t => {
          this.vocab.add(t);
          termFreqs[t] = (termFreqs[t] || 0) + 1;
          uniqueTerms.add(t);
        });

        uniqueTerms.forEach(t => {
          this.docFreqs[t] = (this.docFreqs[t] || 0) + 1;
        });

        totalLength += tokens.length;
        this.index.push({
          entry: entry,
          tokens: tokens,
          termFreqs: termFreqs,
          rawQuestionNorm: this.normalize(entry.question),
          keywordsNorm: (entry.keywords || []).map(k => this.normalize(k)),
          synonymsNorm: (entry.synonyms || []).map(s => this.normalize(s))
        });
      });

      this.avgDocLength = totalLength / (this.entries.length || 1);
    }

    bm25(tf, docLength, docCount, docFreq) {
      const k1 = 1.2;
      const b = 0.75;
      const idf = Math.log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5));
      const numerator = tf * (k1 + 1);
      const denominator = tf + k1 * (1 - b + b * (docLength / (this.avgDocLength || 1)));
      return idf * (numerator / denominator);
    }

    // Dynamic question handling
    checkDynamicQueries(queryLower) {
      const now = new Date();
      const deadline = new Date(this.config.registrationDeadline || "2026-10-21T23:59:59+05:30");
      const eventStart = new Date(this.config.hackathonStartDate || "2026-10-28T08:30:00+05:30");

      const isDaysLeftQuery = /how many days left|days remaining|days left|countdown to register|when does registration close/i.test(queryLower);
      const isRegOpenQuery = /is registration (still )?open|can i (still )?register|is it open/i.test(queryLower);
      const isStartQuery = /when does (the )?hackathon start|start date|starts at|timing of hackathon/i.test(queryLower);
      const isTodayQuery = /what happens today|is the hackathon today|today schedule/i.test(queryLower);

      if (isDaysLeftQuery || isRegOpenQuery) {
        const msDiff = deadline.getTime() - now.getTime();
        const daysLeft = Math.ceil(msDiff / (1000 * 60 * 60 * 24));
        if (daysLeft > 0) {
          return {
            answered: true,
            entry: {
              id: "dynamic-reg-open",
              question: "Is registration open and how many days are left?",
              answer: `Yes! Registration for ARENACORE '26 is currently **OPEN**. There are **${daysLeft} day${daysLeft > 1 ? "s" : ""} left** to register (Deadline: **21 October 2026, 11:59 PM IST**). Be sure to submit before slots fill up!`,
              related: ["reg-how", "team-size", "fee-amount"],
              actions: [
                { label: "Register Your Team", type: "scrollOrUrl", target: "#register", url: this.config.googleFormUrl }
              ]
            }
          };
        } else {
          return {
            answered: true,
            entry: {
              id: "dynamic-reg-closed",
              question: "Is registration still open?",
              answer: `Registrations for ARENACORE '26 closed on **21 October 2026**. If you have an urgent inquiry or waitlist query, please contact our student organizing leads directly.`,
              related: ["contact-leads", "venue-dates"],
              actions: [
                { label: "Contact Organizers", type: "scrollOrUrl", target: "#contact" }
              ]
            }
          };
        }
      }

      if (isStartQuery) {
        return {
          answered: true,
          entry: {
            id: "dynamic-start",
            question: "When does the hackathon start?",
            answer: `ARENACORE '26 kicks off on **Wednesday, 28 October 2026**!\n- **08:30 AM**: Reporting & Check-in at IT Auditorium\n- **10:00 AM**: Inauguration & Keynote Address\n- **11:00 AM**: 🚀 24-Hour Hacking Timer Commences!`,
            related: ["venue-schedule-day1", "venue-location", "venue-what-to-bring"],
            actions: [
              { label: "See Schedule", type: "scrollOrUrl", target: "#schedule" }
            ]
          }
        };
      }

      if (isTodayQuery) {
        const isOct28 = now.getDate() === 28 && now.getMonth() === 9 && now.getFullYear() === 2026;
        const isOct29 = now.getDate() === 29 && now.getMonth() === 9 && now.getFullYear() === 2026;
        if (isOct28) {
          return {
            answered: true,
            entry: {
              id: "dynamic-today-day1",
              question: "What is happening today?",
              answer: `🎉 **Day 1 of ARENACORE '26 is LIVE!** Reporting is at the IT Auditorium. The 24-hour hacking timer commences at 11:00 AM, followed by Mentorship Round 1 at 03:30 PM and the Midnight Jam at 08:00 PM.`,
              related: ["venue-schedule-day1", "venue-wifi-password"]
            }
          };
        } else if (isOct29) {
          return {
            answered: true,
            entry: {
              id: "dynamic-today-day2",
              question: "What is happening today?",
              answer: `🛑 **Day 2 of ARENACORE '26 is in action!** Code freeze and final project submission is at **11:00 AM sharp**, followed by Grand Jury presentations at 11:30 AM and Valedictory at 03:30 PM.`,
              related: ["venue-schedule-day2", "rules-code-freeze"]
            }
          };
        }
      }

      return null;
    }

    // Small talk & guardrails handler
    checkSmallTalk(rawQuery) {
      const q = rawQuery.trim().toLowerCase();
      if (!q) {
        return "Please ask a question regarding ARENACORE '26 hackathon!";
      }

      if (q.length > 300) {
        return "That's quite a long question! To give you the most accurate answer, please keep your question under 300 characters.";
      }

      // Greetings
      for (const t of this.smallTalk.greetings.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.greetings.response;
        }
      }

      // Thanks
      for (const t of this.smallTalk.thanks.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.thanks.response;
        }
      }

      // Bye
      for (const t of this.smallTalk.bye.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.bye.response;
        }
      }

      // Identity
      for (const t of this.smallTalk.identity.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.identity.response;
        }
      }

      // Rude
      for (const t of this.smallTalk.rude.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.rude.response;
        }
      }

      // Offtopic detection (homework, politics, other companies)
      if (/\b(capital of|write code for me|solve math|homework|weather today|politics|election|cricket score)\b/i.test(q)) {
        return this.smallTalk.offtopic.response;
      }

      return null;
    }

    // Multi-question detector
    splitMultiQuestion(query) {
      if (!query.includes(" and ") && !query.includes(" & ") && !query.includes("? ")) {
        return [query];
      }
      const parts = query.split(/\b(?:and|\&)\b|\?\s+/i)
        .map(p => p.trim())
        .filter(p => p.length >= 6);
      return parts.length >= 2 ? parts : [query];
    }

    // Core Query Matcher
    query(rawText) {
      const trimmed = rawText.trim();
      const hasTamilScript = /[\u0B80-\u0BFF]/.test(trimmed);

      // Check small talk first
      const smallTalkResp = this.checkSmallTalk(trimmed);
      if (smallTalkResp) {
        let text = smallTalkResp;
        if (hasTamilScript && this.config.enableTamilHelper) {
          text += "\n\n*(வணக்கம்! ARENACORE '26 ஹேக்கத்தான் குறித்த உங்கள் கேள்விகளுக்கு உதவ நான் தயாராக உள்ளேன்.)*";
        }
        return {
          confidence: "high",
          isSmallTalk: true,
          answer: text,
          related: ["reg-how", "fee-amount", "team-size", "prizes-total-pool"]
        };
      }

      // Check dynamic answers
      const dynamicMatch = this.checkDynamicQueries(trimmed.toLowerCase());
      if (dynamicMatch) {
        this.lastEntryId = dynamicMatch.entry.id;
        return {
          confidence: "high",
          entry: dynamicMatch.entry,
          answer: dynamicMatch.entry.answer,
          related: dynamicMatch.entry.related || [],
          actions: dynamicMatch.entry.actions || []
        };
      }

      // Search whole query first
      const wholeResult = this.searchSingle(trimmed, hasTamilScript);
      if (wholeResult.confidence === "high" && wholeResult.score >= 5.5) {
        return wholeResult;
      }

      // Check multi-question
      const subQueries = this.splitMultiQuestion(trimmed);
      if (subQueries.length > 1) {
        const results = subQueries.map(sq => this.searchSingle(sq));
        const valid = results.filter(r => r.score >= 3.0);
        if (valid.length >= 2 && valid[0].entry.id !== valid[1].entry.id) {
          const combinedAnswer = `Here are the answers to both your questions:\n\n` +
            `1. **${valid[0].entry.question}**\n${valid[0].entry.answer}\n\n` +
            `2. **${valid[1].entry.question}**\n${valid[1].entry.answer}`;
          const combinedActions = (valid[0].entry.actions || []).concat(valid[1].entry.actions || []);
          const combinedRelated = Array.from(new Set((valid[0].entry.related || []).concat(valid[1].entry.related || []))).slice(0, 3);
          return {
            confidence: "high",
            isMulti: true,
            answer: combinedAnswer,
            related: combinedRelated,
            actions: combinedActions
          };
        }
      }

      // Return single query search result
      return wholeResult;
    }

    searchSingle(text, hasTamilScript = false) {
      const normalizedQuery = this.normalize(text);
      const rawTokens = normalizedQuery.split(/\s+/).filter(t => t.length > 1);
      const correctedTokens = rawTokens.map(t => this.fuzzyMatchToken(this.stem(t)));

      if (correctedTokens.length === 0) {
        return {
          confidence: "low",
          answer: "I couldn't quite understand that. Please ask a question about ARENACORE '26 (e.g. registration, fees, themes, rules, schedule, prizes).",
          closest: this.entries.slice(0, 3)
        };
      }

      const totalDocs = this.entries.length;
      const scoredEntries = [];

      this.index.forEach(item => {
        let score = 0;
        const entry = item.entry;

        // 1. BM25 scoring over tokens
        correctedTokens.forEach(token => {
          const tf = item.termFreqs[token] || 0;
          if (tf > 0) {
            const df = this.docFreqs[token] || 1;
            score += this.bm25(tf, item.tokens.length, totalDocs, df);
          }
        });

        // 2. Exact Title match bonus
        if (item.rawQuestionNorm.includes(normalizedQuery) || normalizedQuery.includes(item.rawQuestionNorm)) {
          score += 4.5;
        }

        // 3. Exact Keyword match bonus
        item.keywordsNorm.forEach(kw => {
          if (normalizedQuery.includes(kw) || kw.includes(normalizedQuery)) {
            score += 3.2;
          }
        });

        // 4. Synonym match bonus
        item.synonymsNorm.forEach(syn => {
          if (normalizedQuery.includes(syn) || syn.includes(normalizedQuery)) {
            score += 2.8;
          }
        });

        // 5. Category intent boost
        if (entry.category === this.lastCategory) {
          score += 1.2; // Context continuation bonus
        }

        // 6. Direct phrase / N-gram boost
        if (rawTokens.length >= 2) {
          const bigram = rawTokens.slice(0, 2).join(" ");
          if (item.rawQuestionNorm.includes(bigram) || (entry.keywords || []).some(k => k.toLowerCase().includes(bigram))) {
            score += 2.0;
          }
        }

        scoredEntries.push({ entry, score });
      });

      scoredEntries.sort((a, b) => b.score - a.score);

      const topMatch = scoredEntries[0];
      const secondMatch = scoredEntries[1];
      const thirdMatch = scoredEntries[2];

      const HIGH_THRESHOLD = 5.2;
      const MEDIUM_THRESHOLD = 2.8;

      let result;

      if (topMatch && topMatch.score >= HIGH_THRESHOLD) {
        this.lastCategory = topMatch.entry.category;
        this.lastEntryId = topMatch.entry.id;

        let answer = topMatch.entry.answer;
        if (hasTamilScript && this.config.enableTamilHelper) {
          answer += "\n\n*(உங்களுக்கு மேலும் ஏதேனும் உதவி தேவைப்பட்டால் கேட்கலாம்!)*";
        }

        result = {
          confidence: "high",
          score: topMatch.score,
          entry: topMatch.entry,
          answer: answer,
          related: topMatch.entry.related || [],
          actions: topMatch.entry.actions || []
        };
      } else if (topMatch && topMatch.score >= MEDIUM_THRESHOLD) {
        this.lastCategory = topMatch.entry.category;
        this.lastEntryId = topMatch.entry.id;

        const relatedIds = (topMatch.entry.related || []).slice(0, 2);
        if (secondMatch && secondMatch.entry.id !== topMatch.entry.id) {
          relatedIds.push(secondMatch.entry.id);
        }

        result = {
          confidence: "medium",
          score: topMatch.score,
          entry: topMatch.entry,
          answer: `I found this answer in the official guidelines:\n\n${topMatch.entry.answer}\n\n*Did I understand you right? You can also check the related topics below:*`,
          related: relatedIds,
          actions: topMatch.entry.actions || []
        };
      } else {
        // Low confidence fallback
        const closestEntries = scoredEntries.slice(0, 3).map(s => s.entry);
        result = {
          confidence: "low",
          score: topMatch ? topMatch.score : 0,
          answer: "I couldn't find an exact answer to that in the official ARENACORE '26 guidelines.\n\nHere are the closest questions from our knowledge base, or you can connect directly with our student organizing committee below:",
          closest: closestEntries,
          showContactCard: true
        };
      }

      return result;
    }

    // Autocomplete Suggestions
    getSuggestions(prefix, max = 4) {
      if (!prefix || prefix.trim().length < 2) return [];
      const clean = prefix.trim().toLowerCase();
      const results = [];

      for (const entry of this.entries) {
        const qLower = entry.question.toLowerCase();
        if (qLower.startsWith(clean) || qLower.includes(clean)) {
          results.push(entry);
        } else if ((entry.keywords || []).some(k => k.toLowerCase().includes(clean))) {
          results.push(entry);
        }
        if (results.length >= max) break;
      }
      return results;
    }

    getEntryById(id) {
      return this.entries.find(e => e.id === id) || null;
    }

    getEntriesByCategory(catId) {
      return this.entries.filter(e => e.category === catId);
    }
  }

  // =============================================================================
  // 4. PERSISTENCE & UNANSWERED QUESTION TRACKER
  // =============================================================================
  const STORAGE_KEYS = {
    SESSION: "ac26faq-session-v1",
    UNANSWERED: "ac26faq-unanswered",
    FEEDBACK: "ac26faq-feedback",
    HAS_OPENED: "ac26faq-has-opened",
    TOOLTIP_SHOWN: "ac26faq-tooltip-shown"
  };

  const StorageManager = {
    safeGet(key, isSession = false) {
      try {
        const storage = isSession ? window.sessionStorage : window.localStorage;
        const val = storage.getItem(key);
        return val ? JSON.parse(val) : null;
      } catch (e) {
        return null;
      }
    },
    safeSet(key, value, isSession = false) {
      try {
        const storage = isSession ? window.sessionStorage : window.localStorage;
        storage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    },
    logUnanswered(question) {
      if (!question || typeof question !== "string") return;
      const list = this.safeGet(STORAGE_KEYS.UNANSWERED) || [];
      list.push({
        query: question.trim(),
        timestamp: new Date().toISOString()
      });
      // Cap at 200 items
      if (list.length > 200) list.shift();
      this.safeSet(STORAGE_KEYS.UNANSWERED, list);

      // Dispatch Custom Analytics Event
      window.dispatchEvent(new CustomEvent("ac26faq:unanswered", {
        detail: { query: question.trim() }
      }));
    },
    exportUnansweredJSON() {
      const list = this.safeGet(STORAGE_KEYS.UNANSWERED) || [];
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `arenacore26-unanswered-questions-${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    }
  };

  // Safe Markdown Parser (XSS Sanitized)
  function safeRenderMarkdown(markdownText) {
    if (!markdownText) return "";
    // 1. Escape HTML
    let escaped = markdownText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    // 2. Bold (**text**)
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // 3. Code (`code`)
    escaped = escaped.replace(/`([^`]+)`/g, "<code>$1</code>");

    // 4. Safe Links [text](url)
    escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (match, text, url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    });

    // 5. Lists (- item)
    const lines = escaped.split("\n");
    let inList = false;
    const formattedLines = [];

    for (let line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("- ")) {
        if (!inList) {
          formattedLines.push("<ul>");
          inList = true;
        }
        formattedLines.push(`<li>${trimmed.substring(2)}</li>`);
      } else {
        if (inList) {
          formattedLines.push("</ul>");
          inList = false;
        }
        if (trimmed.length > 0) {
          formattedLines.push(`<p>${line}</p>`);
        }
      }
    }
    if (inList) formattedLines.push("</ul>");

    return formattedLines.join("");
  }

  // =============================================================================
  // 5. SHADOW DOM WIDGET UI COMPONENT
  // =============================================================================
  class ArenacoreFaqWidget {
    constructor(faqData) {
      this.faqData = faqData;
      this.config = faqData.config;
      this.engine = new AnswerEngine(faqData);
      this.messages = [];
      this.isOpen = false;
      this.hasOpenedBefore = Boolean(StorageManager.safeGet(STORAGE_KEYS.HAS_OPENED));
      this.highlightedSuggestionIdx = -1;

      this.initDom();
      this.initEvents();
      this.loadPersistedChat();
      this.initTooltipTimer();
    }

    initDom() {
      // Create root host element
      this.hostEl = document.createElement("div");
      this.hostEl.id = "ac26faq-root";
      this.hostEl.style.cssText = "position:fixed;bottom:0;right:0;z-index:2147483000;pointer-events:none;";
      document.body.appendChild(this.hostEl);

      // Attach open shadow root
      this.shadow = this.hostEl.attachShadow({ mode: "open" });

      // Load fonts inside shadow root
      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=Unbounded:wght@700;800&display=swap";
      this.shadow.appendChild(fontLink);

      // Inject widget styles
      const styleEl = document.createElement("style");
      styleEl.textContent = WIDGET_CSS;
      this.shadow.appendChild(styleEl);

      // Main UI Wrapper
      this.wrapperEl = document.createElement("div");
      this.wrapperEl.className = "ac26faq-wrapper" + (this.hasOpenedBefore ? " has-opened" : "");
      this.wrapperEl.setAttribute("role", "region");
      this.wrapperEl.setAttribute("aria-label", "ARENACORE '26 FAQ Bot");

      // Floating Tooltip
      this.tooltipEl = document.createElement("div");
      this.tooltipEl.className = "ac26faq-tooltip";
      this.tooltipEl.innerHTML = `
        <span>🤖 Questions about ARENACORE '26? Ask ARENA-Bot! 👋</span>
        <button class="ac26faq-tooltip-close" aria-label="Dismiss tooltip">&times;</button>
      `;
      this.wrapperEl.appendChild(this.tooltipEl);

      // Floating Bubble Button
      this.bubbleBtn = document.createElement("button");
      this.bubbleBtn.className = "ac26faq-bubble-btn";
      this.bubbleBtn.setAttribute("aria-label", "Open ARENACORE '26 FAQ assistant");
      this.bubbleBtn.setAttribute("aria-expanded", "false");
      this.bubbleBtn.setAttribute("aria-haspopup", "dialog");
      this.bubbleBtn.innerHTML = `
        <div class="ac26faq-pulse-ring"></div>
        <div class="ac26faq-fab-badge"><span class="ac26faq-fab-dot"></span> ARENA-BOT</div>
        <div class="ac26faq-badge-dot"></div>
        ${ICONS.chat}
        ${ICONS.close}
      `;
      this.wrapperEl.appendChild(this.bubbleBtn);

      // Chat Window
      this.windowEl = document.createElement("div");
      this.windowEl.className = "ac26faq-window";
      this.windowEl.setAttribute("role", "dialog");
      this.windowEl.setAttribute("aria-label", "ARENACORE '26 FAQ Assistant");
      this.windowEl.setAttribute("aria-modal", "false");

      // Chat Window Inner Structure
      this.windowEl.innerHTML = `
        <!-- Toast -->
        <div class="ac26faq-toast" id="ac26Toast">Copied ✓</div>

        <!-- Header -->
        <header class="ac26faq-header">
          <div class="ac26faq-header-left">
            <div class="ac26faq-avatar">
              ${ARENA_ROBOT_ICON_SVG}
            </div>
            <div class="ac26faq-header-meta">
              <div class="ac26faq-header-title-row">
                <span class="ac26faq-header-title">ARENA-Bot</span>
                <span class="ac26faq-online-badge">
                  <span class="ac26faq-online-dot"></span> Online
                </span>
              </div>
              <span class="ac26faq-header-subtitle">ARENACORE '26 Assistant • GDG x ACM PSNA</span>
            </div>
          </div>
          <div class="ac26faq-header-actions">
            <button class="ac26faq-head-btn" id="ac26ClearBtn" title="Clear chat history" aria-label="Clear conversation">
              ${ICONS.trash}
            </button>
            <button class="ac26faq-head-btn" id="ac26MinimizeBtn" title="Minimize chat" aria-label="Minimize FAQ assistant">
              ${ICONS.minimize}
            </button>
            <button class="ac26faq-head-btn" id="ac26CloseBtn" title="Close" aria-label="Close FAQ assistant">
              ${ICONS.close}
            </button>
          </div>
        </header>

        <!-- Message Area -->
        <div class="ac26faq-messages" id="ac26MsgArea" aria-live="polite"></div>

        <!-- Quick Reply Chips -->
        <div class="ac26faq-chips-container" id="ac26ChipsArea"></div>

        <!-- Input Bar with Suggestions -->
        <div class="ac26faq-input-bar">
          <div class="ac26faq-suggestions" id="ac26Suggestions"></div>
          <div class="ac26faq-input-row">
            <input type="text" class="ac26faq-input-field" id="ac26InputField" placeholder="Ask a question about ARENACORE '26..." autocomplete="off" spellcheck="false" />
            <button class="ac26faq-send-btn" id="ac26SendBtn" disabled aria-label="Send query">
              ${ICONS.send}
            </button>
          </div>
          <div class="ac26faq-footer-note">
            Answers are based on official ARENACORE '26 guidelines. For anything else, contact the organizers.
          </div>
        </div>

        <!-- Confirmation Dialog (Clear Chat) -->
        <div class="ac26faq-confirm-overlay" id="ac26ConfirmModal">
          <div class="ac26faq-confirm-dialog">
            <div class="ac26faq-confirm-title">Clear conversation?</div>
            <div class="ac26faq-confirm-msg">This will remove your current chat messages and reset to the welcome state.</div>
            <div class="ac26faq-confirm-actions">
              <button class="ac26faq-confirm-btn ac26faq-confirm-cancel" id="ac26CancelClear">Cancel</button>
              <button class="ac26faq-confirm-btn ac26faq-confirm-danger" id="ac26ConfirmClear">Clear Chat</button>
            </div>
          </div>
        </div>
      `;

      this.wrapperEl.appendChild(this.windowEl);
      this.shadow.appendChild(this.wrapperEl);

      // Cache DOM references
      this.msgArea = this.shadow.getElementById("ac26MsgArea");
      this.chipsArea = this.shadow.getElementById("ac26ChipsArea");
      this.inputField = this.shadow.getElementById("ac26InputField");
      this.sendBtn = this.shadow.getElementById("ac26SendBtn");
      this.suggestionsBox = this.shadow.getElementById("ac26Suggestions");
      this.toastEl = this.shadow.getElementById("ac26Toast");
      this.confirmModal = this.shadow.getElementById("ac26ConfirmModal");
    }

    initEvents() {
      // Toggle chat via Bubble Button
      this.bubbleBtn.addEventListener("click", () => this.toggle());

      // Header buttons
      this.shadow.getElementById("ac26CloseBtn").addEventListener("click", () => this.close());
      this.shadow.getElementById("ac26MinimizeBtn").addEventListener("click", () => this.close());
      this.shadow.getElementById("ac26ClearBtn").addEventListener("click", () => this.showClearConfirm());

      // Confirm Modal buttons
      this.shadow.getElementById("ac26CancelClear").addEventListener("click", () => this.hideClearConfirm());
      this.shadow.getElementById("ac26ConfirmClear").addEventListener("click", () => {
        this.resetChat();
        this.hideClearConfirm();
      });

      // Tooltip close
      this.tooltipEl.querySelector(".ac26faq-tooltip-close").addEventListener("click", (e) => {
        e.stopPropagation();
        this.dismissTooltip();
      });

      // Input field typing & Send button state
      this.inputField.addEventListener("input", () => {
        const val = this.inputField.value.trim();
        this.sendBtn.disabled = val.length === 0;
        this.handleAutocomplete(val);
      });

      // Keyboard navigation (Enter to send, Arrows for autocomplete, Esc to close)
      this.inputField.addEventListener("keydown", (e) => {
        if (this.suggestionsBox.classList.contains("show")) {
          const items = this.suggestionsBox.querySelectorAll(".ac26faq-suggestion-item");
          if (e.key === "ArrowDown") {
            e.preventDefault();
            this.highlightedSuggestionIdx = (this.highlightedSuggestionIdx + 1) % items.length;
            this.updateSuggestionHighlight(items);
            return;
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            this.highlightedSuggestionIdx = (this.highlightedSuggestionIdx - 1 + items.length) % items.length;
            this.updateSuggestionHighlight(items);
            return;
          } else if (e.key === "Enter" && this.highlightedSuggestionIdx >= 0) {
            e.preventDefault();
            items[this.highlightedSuggestionIdx].click();
            return;
          }
        }

        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          this.handleSend();
        }
      });

      this.sendBtn.addEventListener("click", () => this.handleSend());

      // Global Keydown (Esc closes, Focus trap)
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen) {
          this.close();
        }
      });

      // VisualViewport adaptation on Mobile Virtual Keyboard
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", () => {
          if (this.isOpen && window.innerWidth <= 640) {
            this.windowEl.style.height = `${window.visualViewport.height}px`;
            this.scrollToBottom();
          }
        });
      }
    }

    initTooltipTimer() {
      if (this.hasOpenedBefore || StorageManager.safeGet(STORAGE_KEYS.TOOLTIP_SHOWN, true)) {
        return;
      }
      setTimeout(() => {
        if (!this.isOpen && !this.hasOpenedBefore) {
          this.tooltipEl.classList.add("show");
          StorageManager.safeSet(STORAGE_KEYS.TOOLTIP_SHOWN, true, true);
        }
      }, 6000);
    }

    dismissTooltip() {
      this.tooltipEl.classList.remove("show");
    }

    showToast(message) {
      this.toastEl.textContent = message;
      this.toastEl.classList.add("show");
      setTimeout(() => {
        this.toastEl.classList.remove("show");
      }, 2000);
    }

    showClearConfirm() {
      this.confirmModal.classList.add("show");
    }

    hideClearConfirm() {
      this.confirmModal.classList.remove("show");
    }

    open() {
      if (this.isOpen) return;
      this.isOpen = true;
      this.wrapperEl.classList.add("is-open");
      this.bubbleBtn.setAttribute("aria-expanded", "true");
      this.dismissTooltip();

      if (!this.hasOpenedBefore) {
        this.hasOpenedBefore = true;
        this.wrapperEl.classList.add("has-opened");
        StorageManager.safeSet(STORAGE_KEYS.HAS_OPENED, true);
      }

      setTimeout(() => {
        this.inputField.focus();
        this.scrollToBottom();
      }, 100);

      window.dispatchEvent(new CustomEvent("ac26faq:open"));
    }

    close() {
      if (!this.isOpen) return;
      this.isOpen = false;
      this.wrapperEl.classList.remove("is-open");
      this.bubbleBtn.setAttribute("aria-expanded", "false");
      this.bubbleBtn.focus();
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    scrollToBottom() {
      this.msgArea.scrollTop = this.msgArea.scrollHeight;
    }

    // Autocomplete Handler
    handleAutocomplete(text) {
      if (!text || text.length < 2) {
        this.suggestionsBox.classList.remove("show");
        this.suggestionsBox.innerHTML = "";
        this.highlightedSuggestionIdx = -1;
        return;
      }

      const matches = this.engine.getSuggestions(text, 4);
      if (matches.length === 0) {
        this.suggestionsBox.classList.remove("show");
        this.suggestionsBox.innerHTML = "";
        this.highlightedSuggestionIdx = -1;
        return;
      }

      this.highlightedSuggestionIdx = -1;
      this.suggestionsBox.innerHTML = matches.map((m, idx) => `
        <div class="ac26faq-suggestion-item" data-id="${m.id}" data-index="${idx}">
          <span>${m.question}</span>
          <span class="ac26faq-sugg-arrow">${ICONS.arrowRight}</span>
        </div>
      `).join("");

      this.suggestionsBox.querySelectorAll(".ac26faq-suggestion-item").forEach(item => {
        item.addEventListener("click", () => {
          const entryId = item.getAttribute("data-id");
          const entry = this.engine.getEntryById(entryId);
          if (entry) {
            this.inputField.value = "";
            this.sendBtn.disabled = true;
            this.suggestionsBox.classList.remove("show");
            this.ask(entry.question);
          }
        });
      });

      this.suggestionsBox.classList.add("show");
    }

    updateSuggestionHighlight(items) {
      items.forEach((item, idx) => {
        if (idx === this.highlightedSuggestionIdx) {
          item.classList.add("highlighted");
          item.scrollIntoView({ block: "nearest" });
        } else {
          item.classList.remove("highlighted");
        }
      });
    }

    // Chat History & Persistence
    loadPersistedChat() {
      const saved = StorageManager.safeGet(STORAGE_KEYS.SESSION, true);
      if (saved && Array.isArray(saved) && saved.length > 0) {
        this.messages = saved;
        this.renderAllMessages();
      } else {
        this.renderWelcomeState();
      }
    }

    saveChatSession() {
      StorageManager.safeSet(STORAGE_KEYS.SESSION, this.messages, true);
    }

    resetChat() {
      this.messages = [];
      StorageManager.safeSet(STORAGE_KEYS.SESSION, [], true);
      this.msgArea.innerHTML = "";
      this.renderWelcomeState();
      this.showToast("Conversation cleared");
    }

    // Welcome State Rendering
    renderWelcomeState() {
      this.msgArea.innerHTML = "";

      const welcomeEl = document.createElement("div");
      welcomeEl.className = "ac26faq-welcome-box";
      welcomeEl.innerHTML = `
        <div class="ac26faq-welcome-header">Hey hacker! 👋 I'm ARENA-Bot.</div>
        <div class="ac26faq-welcome-text">
          I can answer anything about registration, fees, team rules, schedule, themes, UN SDGs, judging, and prizes for <strong>ARENACORE '26</strong>.
        </div>
        <div class="ac26faq-category-grid">
          ${this.faqData.categories.map(c => `
            <div class="ac26faq-cat-card" data-cat="${c.id}">
              <div class="ac26faq-cat-emoji">${c.emoji}</div>
              <div class="ac26faq-cat-info">
                <span class="ac26faq-cat-name">${c.name}</span>
                <span class="ac26faq-cat-desc">${c.description}</span>
              </div>
            </div>
          `).join("")}
        </div>
      `;

      welcomeEl.querySelectorAll(".ac26faq-cat-card").forEach(card => {
        card.addEventListener("click", () => {
          const catId = card.getAttribute("data-cat");
          this.handleCategoryClick(catId);
        });
      });

      this.msgArea.appendChild(welcomeEl);
      this.renderPersistentChips();
      this.scrollToBottom();
    }

    renderPersistentChips() {
      const defaultChips = [
        "How do I register?",
        "What is the fee?",
        "Registration deadline?",
        "Required team size?",
        "Cash prizes?",
        "Bonafide letter 📄",
        "Who to contact?"
      ];
      this.setChips(defaultChips);
    }

    setChips(chipTexts) {
      this.chipsArea.innerHTML = "";
      chipTexts.forEach(text => {
        const chip = document.createElement("button");
        chip.className = "ac26faq-chip";
        chip.textContent = text;
        chip.addEventListener("click", () => {
          this.ask(text);
        });
        this.chipsArea.appendChild(chip);
      });
    }

    handleCategoryClick(catId) {
      const entries = this.engine.getEntriesByCategory(catId).slice(0, 5);
      const cat = this.faqData.categories.find(c => c.id === catId);
      const catTitle = cat ? `${cat.emoji} ${cat.name}` : catId;

      this.appendBotMessage({
        text: `Here are popular questions under **${catTitle}**:`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      });

      this.setChips(entries.map(e => e.question));
    }

    // Message Rendering Pipeline
    renderAllMessages() {
      this.msgArea.innerHTML = "";
      this.messages.forEach(msg => {
        if (msg.sender === "user") {
          this.appendUserMessageDom(msg);
        } else {
          this.appendBotMessageDom(msg);
        }
      });
      this.renderPersistentChips();
      this.scrollToBottom();
    }

    appendUserMessage(text) {
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const msg = { sender: "user", text, time };
      this.messages.push(msg);
      this.saveChatSession();
      this.appendUserMessageDom(msg);
      this.scrollToBottom();
    }

    appendUserMessageDom(msg) {
      const el = document.createElement("div");
      el.className = "ac26faq-msg ac26faq-msg-user";
      el.innerHTML = `
        <div class="ac26faq-msg-body">
          <div class="ac26faq-msg-bubble">
            <p>${msg.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          <div class="ac26faq-msg-meta">
            <span>${msg.time}</span>
          </div>
        </div>
      `;
      this.msgArea.appendChild(el);
    }

    appendBotMessage(msgData) {
      this.messages.push({ sender: "bot", ...msgData });
      this.saveChatSession();
      this.appendBotMessageDom(msgData);
      this.scrollToBottom();
    }

    appendBotMessageDom(msg) {
      const el = document.createElement("div");
      el.className = "ac26faq-msg ac26faq-msg-bot";

      let actionsHtml = "";
      if (msg.actions && Array.isArray(msg.actions) && msg.actions.length > 0) {
        actionsHtml = `
          <div class="ac26faq-action-row">
            ${msg.actions.map(act => {
              let icon = ICONS.external;
              if (act.type === "tel") icon = ICONS.phone;
              if (act.type === "email") icon = ICONS.email;
              if (act.type === "copy") icon = ICONS.copy;
              if (act.type === "contact") icon = ICONS.phone;
              return `<button class="ac26faq-action-btn" data-act-type="${act.type}" data-act-target="${act.target || ""}" data-act-url="${act.url || ""}">${icon} ${act.label}</button>`;
            }).join("")}
          </div>
        `;
      }

      let contactCardHtml = "";
      if (msg.showContactCard) {
        contactCardHtml = `
          <div class="ac26faq-contact-card">
            <div class="ac26faq-contact-card-title">📞 Connect with Student Organizers</div>
            <div class="ac26faq-contact-card-list">
              ${this.config.studentLeads.map(lead => `
                <div class="ac26faq-contact-lead-item">
                  <div>
                    <div class="ac26faq-lead-name">${lead.name}</div>
                    <div class="ac26faq-lead-role">${lead.role}</div>
                  </div>
                  <div class="ac26faq-lead-actions">
                    <a href="tel:${lead.phone}" class="ac26faq-lead-btn">Call</a>
                    <a href="${lead.whatsapp}" target="_blank" rel="noopener noreferrer" class="ac26faq-lead-btn">WhatsApp</a>
                  </div>
                </div>
              `).join("")}
              <div class="ac26faq-contact-lead-item">
                <div>
                  <div class="ac26faq-lead-name">Official GDG Email</div>
                  <div class="ac26faq-lead-role">${this.config.officialEmail}</div>
                </div>
                <div class="ac26faq-lead-actions">
                  <a href="mailto:${this.config.officialEmail}" class="ac26faq-lead-btn">Email</a>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      el.innerHTML = `
        <div class="ac26faq-msg-avatar">
          ${GDG_LOGO_SVG}
        </div>
        <div class="ac26faq-msg-body">
          <div class="ac26faq-msg-bubble">
            ${safeRenderMarkdown(msg.text)}
            ${actionsHtml}
            ${contactCardHtml}
          </div>
          <div class="ac26faq-msg-meta">
            <span>${msg.time || ""}</span>
            <div class="ac26faq-bubble-actions">
              <button class="ac26faq-copy-btn" title="Copy answer" aria-label="Copy answer">${ICONS.copy} Copy</button>
              <button class="ac26faq-feedback-btn ac26faq-up" title="Helpful" aria-label="Mark helpful">${ICONS.thumbUp}</button>
              <button class="ac26faq-feedback-btn ac26faq-down" title="Not helpful" aria-label="Mark unhelpful">${ICONS.thumbDown}</button>
            </div>
          </div>
        </div>
      `;

      // Copy Answer event
      const copyBtn = el.querySelector(".ac26faq-copy-btn");
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(msg.text).then(() => {
          this.showToast("Copied ✓");
        });
      });

      // Feedback events
      const upBtn = el.querySelector(".ac26faq-up");
      const downBtn = el.querySelector(".ac26faq-down");
      upBtn.addEventListener("click", () => {
        upBtn.classList.add("active");
        downBtn.classList.remove("active");
        this.recordFeedback(msg.id || "general", true);
        this.showToast("Thanks for your feedback! 👍");
      });
      downBtn.addEventListener("click", () => {
        downBtn.classList.add("active");
        upBtn.classList.remove("active");
        this.recordFeedback(msg.id || "general", false);
        this.setChips(["Contact organizers", "How do I register?", "What is the fee?"]);
        this.showToast("Feedback received. Contact organizers if needed! 👎");
      });

      // Action button dispatchers
      el.querySelectorAll(".ac26faq-action-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const type = btn.getAttribute("data-act-type");
          const target = btn.getAttribute("data-act-target");
          const url = btn.getAttribute("data-act-url");
          this.handleActionButton(type, target, url);
        });
      });

      this.msgArea.appendChild(el);
    }

    recordFeedback(entryId, isPositive) {
      const feedback = StorageManager.safeGet(STORAGE_KEYS.FEEDBACK) || {};
      feedback[entryId] = {
        rating: isPositive ? "up" : "down",
        timestamp: new Date().toISOString()
      };
      StorageManager.safeSet(STORAGE_KEYS.FEEDBACK, feedback);
    }

    handleActionButton(type, target, url) {
      if (type === "scrollOrUrl") {
        if (target && target.startsWith("#")) {
          const elem = document.querySelector(target);
          if (elem) {
            this.close();
            elem.scrollIntoView({ behavior: "smooth" });
            return;
          }
        }
        if (url) {
          window.open(url, "_blank", "noopener,noreferrer");
          return;
        }
      } else if (type === "url") {
        const linkUrl = url || target;
        if (linkUrl) {
          window.open(linkUrl, "_blank", "noopener,noreferrer");
          const bUrl = this.config.links && this.config.links.bonafideUrl;
          const bDlUrl = this.config.links && this.config.links.bonafideDownloadUrl;
          if (linkUrl === bUrl || linkUrl === bDlUrl) {
            window.dispatchEvent(new CustomEvent("ac26faq:bonafide-link-click", { detail: { url: linkUrl } }));
          }
        }
      } else if (type === "copy") {
        const textToCopy = url || target;
        if (textToCopy && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            this.showToast("Copied ✓");
          }).catch(() => {
            this.showToast("Copied ✓");
          });
        } else if (textToCopy) {
          const tempInput = document.createElement("input");
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          try { document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(tempInput);
          this.showToast("Copied ✓");
        }
      } else if (type === "contact") {
        this.handleCommand("/contact");
      } else if (type === "tel") {
        window.location.href = target;
      } else if (type === "email") {
        window.location.href = target;
      }
    }

    // Typing Indicator Display
    showTypingIndicator() {
      const typingEl = document.createElement("div");
      typingEl.className = "ac26faq-msg ac26faq-msg-bot ac26faq-typing-row";
      typingEl.innerHTML = `
        <div class="ac26faq-msg-avatar">
          ${GDG_LOGO_SVG}
        </div>
        <div class="ac26faq-msg-body">
          <div class="ac26faq-msg-bubble">
            <div class="ac26faq-typing-indicator">
              <span class="ac26faq-typing-dot"></span>
              <span class="ac26faq-typing-dot"></span>
              <span class="ac26faq-typing-dot"></span>
            </div>
          </div>
        </div>
      `;
      this.msgArea.appendChild(typingEl);
      this.scrollToBottom();
      return typingEl;
    }

    // Command handling (/export, /help, /reset, /contact, /bonafide)
    handleCommand(cmd) {
      const lower = cmd.toLowerCase().trim();
      if (lower === "/export") {
        StorageManager.exportUnansweredJSON();
        this.appendBotMessage({
          text: "📂 **Unanswered questions exported!** Download has started. Organizers can review this JSON to improve the knowledge base.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        });
        return true;
      } else if (lower === "/bonafide") {
        const entry = (this.faqData.entries || []).find(e => e.id === "bonafide-letter");
        if (entry) {
          this.appendBotMessage({
            id: entry.id,
            text: entry.answer,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            actions: entry.actions,
            related: entry.related
          });
        }
        return true;
      } else if (lower === "/help") {
        this.appendBotMessage({
          text: "🛠️ **Available Commands**:\n- `/bonafide`: Get official Bonafide / Consent Letter link\n- `/export`: Download logged unanswered questions (JSON)\n- `/contact`: Show student organizer contact details\n- `/reset`: Clear chat and restore welcome screen\n- `/help`: Display this command reference",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        });
        return true;
      } else if (lower === "/reset") {
        this.resetChat();
        return true;
      } else if (lower === "/contact") {
        this.appendBotMessage({
          text: "Here is the direct contact directory for our student coordinators and Department of IT steering committee:",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          showContactCard: true
        });
        return true;
      }
      return false;
    }

    // Main Query Execution Flow
    ask(text) {
      if (!text || typeof text !== "string") return;
      const clean = text.trim();
      if (!clean) return;

      this.open();
      this.suggestionsBox.classList.remove("show");

      // Check for Slash Commands
      if (clean.startsWith("/")) {
        this.appendUserMessage(clean);
        if (this.handleCommand(clean)) {
          return;
        }
      }

      this.appendUserMessage(clean);

      // Dispatch analytics event
      window.dispatchEvent(new CustomEvent("ac26faq:question", { detail: { query: clean } }));

      // Show typing indicator
      const typingEl = this.showTypingIndicator();

      // Natural response delay (400 - 650 ms)
      const delay = Math.floor(Math.random() * 250) + 400;

      setTimeout(() => {
        typingEl.remove();

        const result = this.engine.query(clean);

        if (result.confidence === "low") {
          // Log unanswered question
          StorageManager.logUnanswered(clean);

          this.appendBotMessage({
            id: "unanswered",
            text: result.answer,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            showContactCard: result.showContactCard
          });

          // Present closest matching chips
          if (result.closest && result.closest.length > 0) {
            this.setChips(result.closest.map(c => c.question));
          } else {
            this.renderPersistentChips();
          }
        } else {
          this.appendBotMessage({
            id: result.entry ? result.entry.id : "resp",
            text: result.answer,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            actions: result.actions || [],
            showContactCard: result.showContactCard
          });

          // Populate Related Questions Chips
          if (result.related && result.related.length > 0) {
            const relatedQuestions = result.related
              .map(id => this.engine.getEntryById(id))
              .filter(Boolean)
              .map(e => e.question);
            if (relatedQuestions.length > 0) {
              this.setChips(relatedQuestions);
            } else {
              this.renderPersistentChips();
            }
          } else {
            this.renderPersistentChips();
          }
        }
      }, delay);
    }

    handleSend() {
      const text = this.inputField.value;
      this.inputField.value = "";
      this.sendBtn.disabled = true;
      this.ask(text);
    }
  }

  // =============================================================================
  // 6. INITIALIZATION & GLOBAL API EXPOSURE
  // =============================================================================
  let widgetInstance = null;

  function initBot() {
    ensureKnowledgeBaseLoaded((faqData) => {
      widgetInstance = new ArenacoreFaqWidget(faqData);

      // Expose clean public API on window
      window.ARENACORE_FAQBOT = {
        open: () => widgetInstance && widgetInstance.open(),
        close: () => widgetInstance && widgetInstance.close(),
        toggle: () => widgetInstance && widgetInstance.toggle(),
        ask: (text) => widgetInstance && widgetInstance.ask(text),
        reset: () => widgetInstance && widgetInstance.resetChat(),
        exportUnanswered: () => StorageManager.exportUnansweredJSON(),
        getEngine: () => widgetInstance && widgetInstance.engine
      };
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBot);
  } else {
    initBot();
  }

})();
