document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");

  navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
  }
});

function handleSubmit() {
  const firstName = document.formContact.firstName.value;
  const lastName = document.formContact.lastName.value;
  const email = document.formContact.email.value;
  const message = document.formContact.message.value;

  alert(`Thank you ${firstName} ${lastName}, your message: "${message}" has been sent. We will contact ${email} for furthermore discussion.`);
}
