//template_lhwmh29
//service_u5fxijb
//ypzgOSunxrv_S4tiD

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_u5fxijb",
      "template_lhwmh29",
      event.target,
      "ypzgOSunxrv_S4tiD"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--success";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email@email.com"
      );
    });
}

let isModalOpen = false

function toggleModal() {

  if (isModalOpen) {
    return document.body.classList.remove("modal--open")
  }

  isModalOpen = !isModalOpen
  document.body.classList += " modal--open"
}