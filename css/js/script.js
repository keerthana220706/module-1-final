const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;
        }

        alert("Registration successful!");

        window.location.href = "login.html";
    });
}


const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Login successful!");

        window.location.href = "dashboard.html";
    });
}


const blogForm =
    document.getElementById("blogForm");

if (blogForm) {

    blogForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const title =
            document.getElementById("blogTitle").value;

        alert("Your blog '" + title +
              "' has been published!");

        window.location.href = "dashboard.html";
    });
}


const deleteButtons =
    document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card =
            button.closest(".blog-card");

        if (confirm("Delete this blog?")) {

            card.remove();

        }

    });

});
