const form = document.querySelector("#login_form");
const errorMessage = document.querySelector("#error-message");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObject)
        });

        const data = await response.json();

        if (!response.ok) {
            errorMessage.classList.remove("hidden");
            errorMessage.textContent = data.errorMessage;
            return; 
        }

        window.localStorage.setItem("authorizationToken", data.token);
        window.location.href = "home.html";
    } catch (error) {
        console.error("error: ", error);
    }
});
