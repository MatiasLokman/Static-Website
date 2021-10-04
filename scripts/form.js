const form = document.querySelector("#form");
const sendBtn = document.querySelector("#sendBtn");

const handleSendBtn = () => {
  const nuevosDatos = {
    nombre: form.nombre.value,
    email: form.email.value,
    asunto: form.asunto.value,
    mensaje: form.mensaje.value,
  };

  form.reset();

  console.log(nuevosDatos);
};

sendBtn.addEventListener("click", handleSendBtn);
