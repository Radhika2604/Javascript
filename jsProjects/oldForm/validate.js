function validation() {
  let Username = document.getElementById("username").value;
  let Email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;
  let ConfirmPassword = document.getElementById("confirmpass").value;

  if (Username === "") {
    setErrorFor(Username, "Username can not be blank");
  } else {
    setSuccessFor("username");
  }
}

function setErrorFor(input, message) {
  let formcontrol = input.parentElement;
  let small = formcontrol.queryselector("small");
}
function setSuccessFor(input) {}
