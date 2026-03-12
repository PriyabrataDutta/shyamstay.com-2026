/**
 * Shyam Stay – Contact Form → Google Sheets Submission
 * Replace YOUR_SCRIPT_URL with the deployed Apps Script Web App URL
 */

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxGiQlfemupJVuB0oF7NpFXLLWn3PQ3zTmFOECdoEhW_s5jSCovPj7A2nTnQLp3-vQRRg/exec";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var btn = form.querySelector('[type="submit"]');
    var response = form.querySelector(".ajax-response");

    // Visual feedback
    btn.textContent = "Sending...";
    btn.disabled = true;
    if (response) { response.textContent = ""; response.style.color = ""; }

    var payload = {
      first_name: form.querySelector('[name="name"]')?.value.trim() || "",
      last_name: form.querySelector('[name="l_name"]')?.value.trim() || "",
      email: form.querySelector('[name="email"]')?.value.trim() || "",
      phone: form.querySelector('[name="phone"]')?.value.trim() || "",
      location: form.querySelector('[name="preferred_location"]')?.value || "",
      message: form.querySelector('[name="message"]')?.value.trim() || ""
    };

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",          // Apps Script requires no-cors
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function () {
        if (response) {
          response.textContent = "✅ Thank you! We'll get back to you shortly.";
          response.style.color = "#2e7d32";
        }
        form.reset();
        btn.textContent = "Send Message";
        btn.disabled = false;
      })
      .catch(function () {
        if (response) {
          response.textContent = "❌ Something went wrong. Please try again or call us directly.";
          response.style.color = "#b7124d";
        }
        btn.textContent = "Send Message";
        btn.disabled = false;
      });
  });
});
