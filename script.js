
const lessonBtn = document.getElementById("lessonBtn");
const successAlert = document.getElementById("successAlert");
const warningAlert = document.getElementById("warningAlert");

if (lessonBtn) {
  lessonBtn.addEventListener("click", () => {
    successAlert.classList.remove("d-none");

    setTimeout(() => {
      warningAlert.classList.remove("d-none");
    }, 3000);
  });
}

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el);
});

const lessonToast = document.getElementById('lessonToast');
if (lessonToast) {
  const toast = new bootstrap.Toast(lessonToast);
  toast.show(); 
}

const offcanvasEl = document.getElementById('menuCanvas');
if (offcanvasEl) {
  const offcanvas = new bootstrap.Offcanvas(offcanvasEl);
}

(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
