// Usuário e senha fixos para teste
const usuarioCorreto = "admin";
const senhaCorreta = "12345";

function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    mensagem.style.color = "green";
    mensagem.innerText = "✅ Login realizado com sucesso!";
    // Aqui você poderia redirecionar, por exemplo:
    // window.location.href = "home.html";
  } else {
    mensagem.style.color = "red";
    mensagem.innerText = "❌ Usuário ou senha incorretos!";
  }
}
