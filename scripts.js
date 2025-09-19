document.getElementById("copyButton").addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById("ip-text").innerHTML).then(() => {
  }).catch(err => {
    console.error("Fuckkkk: ", err);
  });
});