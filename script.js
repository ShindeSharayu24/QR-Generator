document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('qrData');
  const btn = document.getElementById('generateBtn');
  const qrContainer = document.getElementById('qrcode');
  const previewContainer = document.getElementById('preview');
  const downloadBtn = document.getElementById('downloadBtn');

  function isImageUrl(url) {
    return /\.(jpeg|jpg|png|gif|webp)(\?.*)?$/i.test(url);
  }

  function clearOutputs() {
    qrContainer.innerHTML = '';
    previewContainer.innerHTML = '';
    downloadBtn.style.display = 'none'; // hide download until new QR is created
  }

  function generateQR(data) {
    clearOutputs();

    if (!data || data.trim() === '') {
      alert('Please enter text, URL, or image/GIF link!');
      return;
    }

    // If it's an image link, show preview
    if (isImageUrl(data)) {
      const img = document.createElement('img');
      img.src = data;
      img.alt = 'Preview';
      img.onerror = () => {
        previewContainer.textContent = 'Preview failed to load (broken link)';
      };
      previewContainer.appendChild(img);
    }

    // Generate QR code
    try {
      const qr = new QRCode(qrContainer, {
        text: data,
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H
      });

      // Show download button
      downloadBtn.style.display = 'block';

      // Attach download event
      setTimeout(() => {
        const qrCanvas = qrContainer.querySelector('canvas'); 
        const qrImg = qrContainer.querySelector('img'); 

        downloadBtn.onclick = () => {
          let url;
          if (qrCanvas) {
            url = qrCanvas.toDataURL("image/png");
          } else if (qrImg) {
            url = qrImg.src;
          }

          const link = document.createElement('a');
          link.href = url;
          link.download = 'qr-code.png';
          link.click();
        };
      }, 300); // wait for QR rendering
    } catch (err) {
      console.error('QR generation error:', err);
      alert('Could not generate QR code. Check console for details.');
    }
  }

  btn.addEventListener('click', () => generateQR(input.value.trim()));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') generateQR(input.value.trim());
  });
});
