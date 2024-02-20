const botaoEnviar = document.getElementById("enviar");
const caixaMensagem = document.getElementById("texto");
const socket = io();
const chat = document.getElementById("mensagens");

botaoEnviar.addEventListener("click", () => {
  if (caixaMensagem.value !== "") {
    socket.emit("nova mensagem", caixaMensagem.value);
    caixaMensagem.value = "";
  }
});

socket.addEventListener("nova mensagem", (msg) => {
  const elementoMensagem = document.createElement("li"); //<li></li>
  elementoMensagem.textContent = msg; //<li>Nicolas gostosao<li/>
  elementoMensagem.classList.add("mensagem"); // <li class = mensagem >Nicolas gostosao<li/>
  chat.appendChild(elementoMensagem); // <div id='mensagen'> <li class = mensagem >Nicolas gostosao<li/> <div/>
});
