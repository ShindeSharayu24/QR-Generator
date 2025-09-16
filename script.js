document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('qrData');
  const btn = document.getElementById('generateBtn');
  const qrContainer = document.getElementById('qrcode');
  const previewContainer = document.getElementById('preview');

  function isImageUrl(url) {
    return /\.(jpeg|jpg|png|gif|webp)(\?.*)?$/i.test(url);
  }

  function clearOutputs() {
    qrContainer.innerHTML = '';
    previewContainer.innerHTML = '';
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
      img.onload = () => {
        // loaded successfully
      };
      img.onerror = () => {
        previewContainer.textContent = 'Preview failed to load (broken link)';
      };
      previewContainer.appendChild(img);
    }

    // Generate QR code (wrapped in try/catch)
    try {
      new QRCode(qrContainer, {
        text: data,
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H
      });
    } catch (err) {
      console.error('QR generation error:', err);
      alert('Could not generate QR code. Check console for details.');
    }
  }

  // events
  btn.addEventListener('click', () => generateQR(input.value.trim()));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') generateQR(input.value.trim());
  });

  // enable paste (right-click or ctrl+v)
  input.addEventListener('paste', (e) => {
    const text = (e.clipboardData || window.clipboardData).getData('text');
    if (text) {
      // put pasted text in input (browser usually does this automatically),
      // we update value and optionally generate automatically:
      input.value = text;
    }
  });
});
