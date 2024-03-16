function verificarLogin() {
  let input_nome = document.getElementById("nome");
  let input_senha = document.getElementById("senha");

  let nome = (input_nome.value).toLowerCase();
  let senha = (input_senha.value);

  if (nome == "marcelle" && senha == "10") {
    location.href = "cartinha.html";
  } else {
    alert("Errou, mas está incluso!");
    document.getElementById("nome").value = "marcelle";
    document.getElementById("senha");
  }
}