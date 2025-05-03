document.addEventListener("DOMContentLoaded", function () {
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-bottom-right",
    timeOut: "3000",
  };
  const sendButton = document.getElementById("sendButton"); // your "Send" button
  sendButton.addEventListener("click", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("number").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!firstName || !email || !phone || !message) {
      toastr.error("Please fill in all required fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      toastr.error("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      toastr.error("Please enter a valid phone number (10-15 digits).");
      return;
    }

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    fetch("https://admin.cloudpixel.dev/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          toastr.success("Message sent successfully!");
          // Optionally clear the form
          document.getElementById("firstName").value = "";
          document.getElementById("lastName").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("message").value = "";
        } else {
          return response.json().then((data) => {
            const error = data.detail || "Something went wrong. Try again.";
            toastr.error(error);
          });
        }
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });
});
