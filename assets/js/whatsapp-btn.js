/* WhatsApp Floating Button - Auto-injected on all pages */
(function () {
  // Inject CSS
  var style = document.createElement('style');
  style.textContent = `
    .wa-float-btn {
      position: fixed;
      bottom: 30px;
      left: 30px;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .wa-float-btn:hover {
      transform: scale(1.08);
    }
    .wa-float-icon {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #25D366;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
      animation: wa-pulse 2s infinite;
    }
    .wa-float-btn:hover .wa-float-icon {
      box-shadow: 0 6px 24px rgba(37, 211, 102, 0.55);
    }
    .wa-float-icon svg {
      width: 30px;
      height: 30px;
      fill: #fff;
    }
    .wa-float-label {
      background: #fff;
      color: #333;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      opacity: 0;
      transform: translateX(-10px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      white-space: nowrap;
      pointer-events: none;
    }
    .wa-float-btn:hover .wa-float-label {
      opacity: 1;
      transform: translateX(0);
    }
    @keyframes wa-pulse {
      0% { box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); }
      50% { box-shadow: 0 4px 24px rgba(37, 211, 102, 0.6), 0 0 0 10px rgba(37, 211, 102, 0.1); }
      100% { box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); }
    }
    @media (max-width: 575px) {
      .wa-float-btn { bottom: 20px; left: 20px; }
      .wa-float-icon { width: 48px; height: 48px; }
      .wa-float-icon svg { width: 26px; height: 26px; }
      .wa-float-label { display: none; }
    }
  `;
  document.head.appendChild(style);

  // Inject HTML
  var btn = document.createElement('a');
  btn.href = 'https://api.whatsapp.com/send?phone=919036112244&text=Hi%20Im%20Looking%20for%20a%20PG%20Accomodation.%20%23PG2025';
  btn.target = '_blank';
  btn.className = 'wa-float-btn';
  btn.setAttribute('aria-label', 'Chat on WhatsApp');
  btn.innerHTML = `
    <span class="wa-float-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M16.004 0C7.17 0 .002 7.168.002 16c0 2.823.737 5.573 2.137 7.998L.012 32l8.242-2.063A15.94 15.94 0 0 0 16.004 32C24.838 32 32 24.832 32 16S24.838 0 16.004 0zm0 29.333a13.27 13.27 0 0 1-6.78-1.856l-.486-.289-5.037 1.32 1.344-4.91-.317-.504A13.23 13.23 0 0 1 2.67 16c0-7.364 5.99-13.333 13.334-13.333S29.337 8.636 29.337 16s-5.99 13.333-13.333 13.333zm7.31-9.98c-.4-.2-2.367-1.168-2.734-1.302-.367-.133-.634-.2-.9.2-.267.4-1.034 1.302-1.268 1.569-.233.267-.467.3-.867.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.062-1.993-2.374-2.227-2.774-.233-.4-.025-.616.175-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.234-2.967-.325-.78-.655-.674-.9-.687l-.767-.013c-.267 0-.7.1-1.067.5-.367.4-1.4 1.368-1.4 3.335 0 1.967 1.434 3.868 1.634 4.135.2.267 2.822 4.31 6.838 6.043.955.412 1.7.658 2.282.843.958.305 1.832.262 2.522.159.77-.115 2.367-.968 2.7-1.902.333-.935.333-1.735.233-1.902-.1-.167-.367-.267-.767-.467z"/>
      </svg>
    </span>
    <span class="wa-float-label">Chat with us!</span>
  `;
  document.body.appendChild(btn);
})();
