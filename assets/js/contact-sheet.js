/**
 * Shyam Stay — Contact Form → Google Sheets Submission
 * Columns match Leads_website.xlsx: Full Name | Email | Phone Number | Preferred Location | Message
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

    // Combine first + last name to match Excel column: "Full Name"
    var firstName = form.querySelector('[name="name"]')?.value.trim() || "";
    var lastName  = form.querySelector('[name="l_name"]')?.value.trim() || "";

    var payload = {
      full_name:  (firstName + " " + lastName).trim(),
      email:      form.querySelector('[name="email"]')?.value.trim() || "",
      phone:      form.querySelector('[name="phone"]')?.value.trim() || "",
      location:   form.querySelector('[name="preferred_location"]')?.value || "",
      message:    form.querySelector('[name="message"]')?.value.trim() || ""
    };

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",          // Apps Script requires no-cors (response is always opaque)
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function () {
        // Redirect to thank-you page — fetch with no-cors always resolves
        window.location.href = "thank-you.html";
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
