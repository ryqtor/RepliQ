# RepliQ 🤖💬

**RepliQ** is a smart, elegant Chrome Extension that automatically replies to incoming WhatsApp Web messages based on keyword rules you define. Whether you're working, relaxing, or just avoiding a certain someone — RepliQ has your back.

---

## 🚀 Features

- ✅ Auto-detects new incoming messages on WhatsApp Web
- ✅ Automatically replies based on custom keyword → response rules
- ✅ Clean, intuitive UI in the Chrome Extension popup
- ✅ All rules are stored using Chrome’s `storage.local` API
- ✅ Lightweight and secure — runs only on WhatsApp Web
- ✅ Always-on background script for instant response handling

---

## 🧠 How It Works

- The extension injects a `content.js` script into WhatsApp Web
- It monitors chat messages using the DOM
- If a message matches one of your keywords, it triggers a reply using the associated response
- Replies are typed and sent through the actual input field (simulating human behavior)

---

## 🛠️ Tech Stack

| Layer          | Technology              |
|----------------|--------------------------|
| Extension API  | Chrome Manifest v3       |
| Storage        | Chrome `storage.local`   |
| UI             | HTML, CSS, JS            |
| Messaging      | `content.js` DOM scanner |
| Icons          | Custom `.png` icon set   |

---

## 📁 Folder Structure

repliq/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── styles.css
├── icon.png
└── README.md
