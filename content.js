function getLastMessage() {
  const messages = document.querySelectorAll('[data-testid="msg-text"]');
  return messages.length ? messages[messages.length - 1].innerText : "";
}

function sendMessage(text) {
  const inputBox = document.querySelector('[contenteditable="true"]');
  if (!inputBox) return;

  const event = new InputEvent("input", { bubbles: true });
  inputBox.textContent = text;
  inputBox.dispatchEvent(event);
  document.querySelector('[data-testid="send"]').click();
}

let lastMsg = "";

setInterval(() => {
  const newMsg = getLastMessage();
  if (newMsg && newMsg !== lastMsg) {
    chrome.storage.local.get("rules", (data) => {
      (data.rules || []).forEach(({ key, res }) => {
        if (newMsg.toLowerCase().includes(key.toLowerCase())) {
          setTimeout(() => sendMessage(res), 1000);
        }
      });
    });
    lastMsg = newMsg;
  }
}, 3000);
