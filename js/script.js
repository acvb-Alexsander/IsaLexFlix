function fazerLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const loginScreen = document.getElementById("loginScreen");
  const site = document.getElementById("site");
  const erroLogin = document.getElementById("erroLogin");
  const musicaLogin = document.getElementById("musicaLogin");

  if (usuario === "isa" && senha === "alex") {
    loginScreen.style.display = "none";
    site.classList.remove("hidden");
    musicaLogin.volume = 0.4;
    musicaLogin.play();
  } else {
    erroLogin.textContent = "Usuário ou senha incorretos";
  }
}
