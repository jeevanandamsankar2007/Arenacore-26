# ARENACORE '26 FAQ Chatbot Widget (ARENA-Bot)

A production-quality, self-contained, offline-ready FAQ chatbot widget built specifically for **ARENACORE '26** (24-Hour Hackathon by **GDG On Campus PSNACET x ACM PSNACET**, Department of Information Technology).

Designed for zero-dependency, single-script drop-in integration into any host codebase without modifying host files, styles, or global variables.

---

## ⚡ 1. 30-Second Drop-in Integration Guide

### Step 1: Copy the `faq-bot` Folder
Place the `faq-bot/` folder in the root directory of the website (alongside `index.html`):
```text
your-website/
  ├── index.html
  ├── styles.css
  ├── app.js
  └── faq-bot/
      ├── arenacore-faqbot.js
      ├── arenacore-faqbot.css
      └── faq-data.js
```

### Step 2: Add ONE Script Tag
Paste this single line right before the closing `</body>` tag of `index.html`:
```html
<script src="faq-bot/arenacore-faqbot.js" defer></script>
```
*That's it!* `arenacore-faqbot.js` automatically resolves and loads its sibling knowledge base `faq-data.js` dynamically and mounts the widget inside an isolated Shadow DOM.

### Alternative: Bundled Single-File Setup
If your hosting setup requires serving only one combined JS file without secondary requests:
1. Concatenate `faq-data.js` and `arenacore-faqbot.js` in order into a single file `arenacore-faqbot.bundle.js`:
   - On Windows (PowerShell):
     ```powershell
     Get-Content faq-bot\faq-data.js, faq-bot\arenacore-faqbot.js | Set-Content faq-bot\arenacore-faqbot.bundle.js
     ```
   - On Linux / macOS:
     ```bash
     cat faq-bot/faq-data.js faq-bot/arenacore-faqbot.js > faq-bot/arenacore-faqbot.bundle.js
     ```
2. Reference the bundled file in `index.html`:
   ```html
   <script src="faq-bot/arenacore-faqbot.bundle.js" defer></script>
   ```

### 🛑 Rollback Instruction
To completely remove the widget, simply delete that single `<script>` line from `index.html`. No other files or global state are modified.

---

## 🎨 2. Theme Matching & Design Tokens

The widget inherits the live website's developer/hacker Google Developer Groups visual identity: dark midnight canvas (`#0a0d14`), elevated surfaces (`#111726`), glowing cyan & Google-colored accents (`#4285F4`, `#34A853`, `#FBBC05`, `#EA4335`), and glassmorphism.

### Extracted Design Tokens

| Token | Computed Value | Description |
| :--- | :--- | :--- |
| **Canvas Background** | `#0a0d14` | Deep midnight canvas |
| **Surface (Window)** | `#111726` | Elevated dark card surface |
| **Surface-2 (Bubbles/Cards)**| `#172133` | Sub-surface for bot bubbles & chips |
| **Surface-3 (Hover/Cards)** | `#1e2b42` | Interactive hover state surface |
| **Border Light** | `rgba(255, 255, 255, 0.12)` | Subtle glass card borders |
| **Border Glow** | `rgba(66, 133, 244, 0.4)` | Focus & active blue glow |
| **Text Primary** | `#f8fafc` | High contrast white text |
| **Text Secondary** | `#cbd5e1` | Slate body text |
| **Text Muted** | `#94a3b8` | Timestamps & footer metadata |
| **Primary Accent** | `#4285F4` (Google Blue) | Interactive buttons & branding |
| **Secondary Accents** | `#34A853`, `#38bdf8` | Online indicator & CLI cyan |
| **Warning / Danger** | `#FBBC05`, `#EA4335` | Badges, alerts & deadlines |
| **Font Heading** | `'Outfit', sans-serif` | Clean, modern geometric titles |
| **Font Body** | `'Inter', sans-serif` | High-legibility UI body font |
| **Font Monospace** | `'Space Grotesk', monospace` | Terminal & code tags |
| **Border Radii** | `8px`, `14px`, `20px`, `9999px` | Smooth rounded pill buttons & cards |
| **Box Shadows** | `0 16px 40px -8px rgba(0,0,0,0.7)` | Deep elevation drop shadow |
| **Backdrop Filter** | `blur(16px)` | Frosted glass effect |

### How to Retheme via CSS Variables
Open `faq-bot/arenacore-faqbot.js` (or `faq-bot/arenacore-faqbot.css`) and edit the variables declared in the `:host` block:
```css
:host {
  /* EDIT HERE TO RETHEME */
  --ac26-bg: #0a0d14;            /* Main window background */
  --ac26-surface: #111726;       /* Card surface */
  --ac26-primary: #4285F4;       /* Primary accent color */
  --ac26-accent-cyan: #38bdf8;   /* Cyan highlights */
  --ac26-radius-lg: 20px;        /* Corner radius of popup */
}
```
*Note: The widget automatically reads CSS variables defined on the host site (`--primary`, `--accent`, `--bg-body`) as fallback defaults.*

---

## 📐 3. Customizing Bubble Position & Window Dimensions

You can easily adjust the position and dimensions of the floating launcher bubble and chat popup via CSS custom properties:

```css
:host {
  /* Horizontal and vertical distance from the corner */
  --ac26-bubble-right: 24px;       /* 16px on mobile */
  --ac26-bubble-bottom: 24px;      /* Set to 84px if avoiding bottom-right FABs */
  --ac26-bubble-size: 60px;        /* Diameter of circular launcher */

  /* Chat window size on Desktop & Tablet */
  --ac26-window-width: clamp(420px, 50vw, 680px);
  --ac26-window-height: min(80vh, 760px);
}
```

---

## 📝 4. How to Edit or Add FAQs in `faq-data.js`

All questions, answers, keywords, synonyms, and action buttons live in `faq-bot/faq-data.js`. You can edit this file at any time without touching any widget logic.

### Copy-Paste FAQ Entry Template
Add your new entry inside the `ENTRIES` array:
```javascript
{
  id: "venue-parking",
  category: "venue",                      // One of: reg, fee, teams, themes, venue, rules, prizes, contact
  question: "Is two-wheeler and four-wheeler parking available on campus?",
  answer: "Yes! **Designated campus parking** is available near the Main Entrance and IT Block for all registered participants. Show your attendee pass at the gate for campus entry.",
  keywords: ["parking", "vehicle parking", "bike", "car", "entry gate"],
  synonyms: ["parking space", "vandi nirutha edam", "can i park vehicle"],
  related: ["venue-location", "venue-reporting-time"],
  actions: [
    { label: "Open in Maps", type: "url", url: "https://maps.google.com/?q=PSNACET" }
  ]
},
```

### Tips for Best Search Accuracy:
1. **Keywords**: Provide 4–8 relevant English words and short phrases.
2. **Synonyms**: Include common student slang, abbreviations (`amt`, `lap`, `cert`), and Tanglish terms (`evlo`, `enga`, `nadakum`, `sapadu`).
3. **Actions**: Add relevant interactive buttons:
   - `{ label: "Open Form", type: "scrollOrUrl", target: "#register", url: "https://..." }` (smooth-scrolls to `#register` on host page, or opens URL if element is missing).
   - `{ label: "Call Lead", type: "tel", target: "tel:+918682067304" }`
   - `{ label: "Email", type: "email", target: "mailto:gdscpsna@psnacet.edu.in" }`

### 📄 Bonafide / Consent Letter Link Configuration

The official **Bonafide / Consent Letter** link is stored in a single source of truth inside `faq-bot/faq-data.js` under `ARENACORE_CONFIG.links`:

```javascript
// faq-bot/faq-data.js
links: {
  bonafideUrl: "https://drive.google.com/file/d/1aPHbLGdd5gji1ifJm4x3a19slEX0BwLa/view",
  bonafideDownloadUrl: "https://drive.google.com/uc?export=download&id=1aPHbLGdd5gji1ifJm4x3a19slEX0BwLa"
}
```

#### How Organizers Can Replace or Update the Link:
1. Open `faq-bot/faq-data.js`.
2. Locate `ARENACORE_CONFIG.links.bonafideUrl` near line 48.
3. Replace the URL string with your updated Google Drive link. All FAQ entries, action buttons, and copy actions will automatically use the new link without touching any widget logic (`arenacore-faqbot.js`).
4. **Google Drive Sharing Permissions**: Ensure the Google Drive file permission is set to **"Anyone with the link can view"** so attendees can view and download the PDF without signing in.

#### How to Test Locally:
1. Open the demo page `demo/index.html` in your browser.
2. Click the persistent chip **"Bonafide letter 📄"**, or type `bonafide` (or `/bonafide`, `consent letter`, `bonafied`, `OD letter`).
3. Click **"Open Bonafide / Consent Letter"** to open the Google Drive preview.
4. Click **"Download PDF"** to verify direct download.
5. Click **"Copy link"** to copy the URL to your clipboard (a `"Copied ✓"` toast will appear).

#### Analytics / Custom Event Tracking:
Host site developers can listen for the custom event `ac26faq:bonafide-link-click` to track link opens and downloads in Google Analytics or their telemetry system:
```javascript
window.addEventListener("ac26faq:bonafide-link-click", (event) => {
  console.log("Attendee clicked Bonafide link:", event.detail.url);
  // Example: gtag('event', 'bonafide_download', { url: event.detail.url });
});
```

---

## 📊 5. Reading Unanswered Questions & Admin Commands

To help organizers continuously improve the FAQ coverage:
1. Any low-confidence query is automatically saved to the browser's `localStorage` under `ac26faq-unanswered`.
2. **Export Log**: Type `/export` in the chatbot input bar (or run `window.ARENACORE_FAQBOT.exportUnanswered()` in DevTools) to download a clean JSON file containing all logged unanswered questions with timestamps.
3. **Other Built-in Commands**:
   - `/help`: Displays available commands.
   - `/contact`: Directly pops up the student coordinators contact card.
   - `/reset`: Clears chat session and returns to the initial welcome screen.

---

## ☁️ 6. Netlify Deployment Notes

Deploying to Netlify is instant:
1. Commit or drag-and-drop the `faq-bot/` folder alongside your website files into Netlify.
2. No `npm install`, build script, or backend is required.
3. Assets will be served directly with optimal caching headers.

---

## 🤖 7. Optional AI Fallback Architecture (Future Enhancement)

By default, the chatbot runs **100% offline** with zero external network calls or API keys. If the organizing committee later chooses to back up the local engine with a Large Language Model (e.g. Google Gemini 1.5 Pro / Flash):

1. **Security Rule**: **NEVER embed API keys in client-side code.**
2. **Serverless Proxy Pattern**: Deploy a lightweight Netlify Function / Cloud Run endpoint:
   ```text
   Browser Widget (arenacore-faqbot.js)
            │
            ▼ (POST /api/chat-proxy - No keys exposed)
   Netlify Function / Cloud Run Proxy
            │ (Holds GEMINI_API_KEY in server environment variables)
            ▼
   Google Cloud Vertex AI / Gemini API
   ```
3. Enable in `faq-bot/faq-data.js`:
   ```javascript
   aiFallback: {
     enabled: true,
     endpoint: "https://arenacore26.netlify.app/.netlify/functions/gemini-proxy"
   }
   ```
   When `enabled: true`, questions with low local confidence will seamlessly query your serverless proxy.

---

## 💻 8. Public JavaScript API Reference

The widget exposes a clean global API on `window.ARENACORE_FAQBOT`:

```javascript
// Open the chat window
window.ARENACORE_FAQBOT.open();

// Close the chat window
window.ARENACORE_FAQBOT.close();

// Toggle chat open/closed
window.ARENACORE_FAQBOT.toggle();

// Programmatically ask a question
window.ARENACORE_FAQBOT.ask("What is the registration fee?");

// Reset chat history to welcome screen
window.ARENACORE_FAQBOT.reset();

// Export unanswered questions to JSON file
window.ARENACORE_FAQBOT.exportUnanswered();
```

---

## 🧪 9. Testing the Widget Locally

1. Open a terminal in the project directory.
2. Start a local static server:
   - Using Python:
     ```bash
     python -m http.server 8080
     ```
   - Or using Node/npx:
     ```bash
     npx serve -l 8080
     ```
3. Open `http://localhost:8080/demo/index.html` in Chrome, Firefox, or Edge.
4. Test responsiveness across mobile (360px), tablet (768px), and desktop (1280px+).
