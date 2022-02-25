// import Timer from "./temporizador.js"
// import startTimer from "./temporizador.js"
export default function Login() {

  var usuario = document.querySelector('#user')
  var senha = document.querySelector('#senha')
  var loginPage = document.querySelector(".login-page") 
  var homePage = document.querySelector(".segunda-pagina")  
  var button  = document.querySelector(".botao-login button")
  var erro = document.querySelector(".login-erro span")

  document.title = "Login Compass"

  button.addEventListener("click", () => {
    if (usuario.value == "admin" && senha.value == "admin") { 
      homePage.style.display = "block" 
      loginPage.style.display = "none"
      document.title = "Home Compass"
      // Timer()
      // startTimer()
    }else{
      document.title = "Login Compass"
      erro.style.display = "block"
      usuario.style.border = "1px solid #E9B425"
      senha.style.border = "1px solid #E9B425"
    }
  }) 
}
