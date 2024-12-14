const comentarioForm = document.getElementById("comentarioForm");

comentarioForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");

  modal.style.display = "block";
  modalOverlay.style.display = "block";

  setTimeout(function() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  }, 3000);
});
