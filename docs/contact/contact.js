const FORM_ID = "mgvzkjbw";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;

    const formData = new FormData(form);
    const payload = {};
    formData.forEach((value, key) => (payload[key] = value));

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Message sent! Thank you.");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      btn.disabled = false;
    }
  });
});