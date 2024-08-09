// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var personalLoan = document.getElementById("personalLoan");

var homeLoan = document.getElementById("homeLoan");

var loanAgainstProperty = document.getElementById("loanAgainstProperty");

var businessLoan = document.getElementById("businessLoan");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
personalLoan.onclick = function () {
  modal.style.display = "block";
};

homeLoan.onclick = function () {
  modal.style.display = "block";
};

loanAgainstProperty.onclick = function () {
  modal.style.display = "block";
};

businessLoan.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
