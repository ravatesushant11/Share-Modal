const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("activeModal");
  overlay.classList.add("overlayActive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("activeModal");
  overlay.classList.remove("overlayActive");
};
