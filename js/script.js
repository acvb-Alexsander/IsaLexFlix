function fazerLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const loginScreen = document.getElementById("loginScreen");
    const site = document.getElementById("site");
    const erroLogin = document.getElementById("erroLogin");

    if (usuario === "isa" && senha === "alex") {
        loginScreen.style.display = "none";
        site.classList.remove("hidden");
    } else {
        erroLogin.textContent = "Usuário ou senha incorretos";
    }
}