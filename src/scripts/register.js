const form = document.querySelector("#register_form");

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const formData = new FormData(form);

    const formDataObj = Object.fromEntries(formData.entries());

    try{
        const response = await fetch("http://localhost:8080/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObj)
        });

        if(!response.ok){
            throw new Error("erro na requisição");
        }

        const data = await response.json();
        console.log("Registro com sucesso: ", data);

        window.location.href = "email-signup.html";
    }catch(error){
        console.error("erro:", error);
    }
});