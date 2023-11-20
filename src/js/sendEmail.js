import { closeModalhandler } from "./modal";

// const form = document.getElementById("modalForm");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   emailjs.sendForm("service_cknjun9", "template_4w4291a", this).then(
//     () => {
//       alert("Sent!");
//       form.reset();
//       closeModalhandler();
//     },
//     (err) => {
//       alert(JSON.stringify(err));
//     }
//   );
// });

const formBtn = document.querySelector("#form__btn");
const form = document.querySelector("#modalForm");

console.dir(form);

const sendEmail = () => {
  const templateParams = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_cknjun9", "template_4w4291a", templateParams).then(
    function (response) {
      console.log("SUCCESS!" + response.status + response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
  console.log(templateParams);
};

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendEmail();
  form.reset();
  closeModalhandler();
});
