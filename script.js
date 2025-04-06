function navigateTo(page) {
    const app = document.getElementById("app");
    if (page === "home") {
      app.innerHTML = `
        <section class="hero">
          <h1>Sign Language Translator</h1>
          <p>Empowering communication through AI and machine learning. Break the barriers of silence and make the world more inclusive.</p>
          <button onclick="navigateTo('translator')">Start Translating</button>
          <div style="margin-top: 2rem; font-style: italic;">Built with ❤️ by Team <strong>Hack_Horizon</strong></div>
        </section>
      `;
    } else if (page === "translator") {
      app.innerHTML = `
        <section class="section">
          <div class="card">
            <h2>Live Camera Feed</h2>
            <div class="camera-feed" id="camera-container">
              <video id="webcam" autoplay playsinline style="display: none;"></video>
              <p id="placeholder" class="placeholder-text">Camera is off</p>
            </div>
            <div class="button-group">
              <button class="camera-button" onclick="startWebcam()">Start Camera</button>
              <button class="camera-button close" onclick="stopWebcam()">Close Camera</button>
            </div>
          </div>
    
          <div class="card">
            <h2>Translated Text</h2>
            <textarea class="textarea" readonly placeholder="Translation output will appear here..."></textarea>
          </div>
    
          <div class="card">
            <div class="mic">🎤 Future enhancement: Speech Output for translated text.</div>
          </div>
        </section>
      `;
    }
    
    
   else if (page === "about") {
      app.innerHTML = `
        <section class="section">
          <div class="card">
            <h2>About the Project</h2>
            <p>Our AI-based Sign Language Translator enables real-time gesture translation into text and speech using computer vision and machine learning. It aims to bridge communication gaps for the deaf and mute community.</p>
            <p style="margin-top: 1rem;"><strong>GitHub Repo:</strong> <a href="#" style="color: #2563eb;">Link here</a></p>
          </div>
        </section>
      `;
    }
  }

  // Load home on first load
  navigateTo("home");
  
  let webcamStream = null;

  function startWebcam() {
    const video = document.getElementById("webcam");
    const placeholder = document.getElementById("placeholder");
  
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          webcamStream = stream;
          video.srcObject = stream;
          video.style.display = "block";
          placeholder.style.display = "none";
        })
        .catch((err) => {
          console.error("Error accessing webcam:", err);
          placeholder.textContent = "Webcam access denied or not available.";
          placeholder.style.color = "red";
        });
    } else {
      placeholder.textContent = "getUserMedia not supported in this browser.";
      placeholder.style.color = "red";
    }
  }
  
  function stopWebcam() {
    const video = document.getElementById("webcam");
    const placeholder = document.getElementById("placeholder");
  
    if (webcamStream) {
      webcamStream.getTracks().forEach(track => track.stop());
      webcamStream = null;
    }
  
    video.style.display = "none";
    video.srcObject = null;
    placeholder.style.display = "block";
    placeholder.textContent = "Camera is off";
    placeholder.style.color = "#2563eb";
  }
  