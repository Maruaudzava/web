import { closeModalhandler } from "./modal";

const form = document.getElementById("modalForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_cknjun9", "template_4w4291a", this).then(
    () => {
      alert("Sent!");
      form.reset();
      closeModalhandler();
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});
