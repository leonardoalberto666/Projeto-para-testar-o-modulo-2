document.getElementById("formulario").addEventListener("submit", function (event){
        event.preventDefault();

        const formData = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            numero: document.getElementById("numero").value,
            pedido: document.getElementById("textarea").value,
            tipo: document.querySelector('input[name="tipo"]:checked').value,
        };

        console.log("Dados:", formData);

        fetch("http://localhost:3333/pedidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            alert("Pedido enviado com sucesso!");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Ocorreu um erro ao enviar o pedido.");
        });

}); 