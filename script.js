let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let question = document.getElementById("questionOne");

  if (name.value == "" || question.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
        `This form has a username of ${name.value} and password of ${question.value}`
    );

    name.value = "";
    question.value = "";
  }
});
