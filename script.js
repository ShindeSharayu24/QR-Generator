document.getElementById("generateBtn").addEventListener("click", () => {
  let data = document.getElementById("qrData").value.trim();
  generateQR(data);
});

function generateQR(data) {
  let qrContainer = document.getElementById("qrcode");
  let previewContainer = document.getElementById("preview");

  qrContainer.innerHTML = ""; // clear old QR
  previewContainer.innerHTML = ""; // clear old preview

  if (!data) {
    alert("Please enter text, URL, or image/GIF link!");
    return;
  }

  // If it's an image/GIF link, show preview
  if (data.match(/\.(jpeg|jpg|png|gif|webp)$/i)) {
    let img = document.createElement("img");
    img.src = data;
    previewContainer.appendChild(img);
  }

  // Generate QR code
  new QRCode(qrContainer, {
    text: data,
    width: 200,
    height: 200,
  });
}
