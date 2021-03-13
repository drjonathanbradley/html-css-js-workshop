function removeBob() {
  console.log("clicked!");
  let bobCard = document.getElementById("bob");
  let bobButton = document.getElementById("bobButton");

  if (bobCard.style.display === "none") {
    bobCard.style.display = "flex";
    bobButton.innerText = "Remove Bob";
  } else {
    bobCard.style.display = "none";
    bobButton.innerText = "Add Bob";
  }
}
