/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* Body Layout */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f4f9;
  padding: 20px;
}

/* Container */
.container {
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Title */
.container h1 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

/* Input + Button */
input, button {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
}

button {
  background: #4CAF50;
  color: white;
  cursor: pointer;
  border: none;
  transition: 0.3s;
}

button:hover {
  background: #45a049;
}

/* QR Code Box */
#qrcode {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

#qrcode img {
  max-width: 100%;
  height: auto;
}

/* 📱 Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 15px;
    max-width: 90%;
  }

  .container h1 {
    font-size: 1.5rem;
  }

  input, button {
    font-size: 0.95rem;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .container h1 {
    font-size: 1.2rem;
  }

  input, button {
    font-size: 0.9rem;
    padding: 8px;
  }
}
