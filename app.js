
document.addEventListener("DOMContentLoaded", function () {

  
  if (document.querySelectorAll('.button') !== null) {
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.addEventListener('click', processForm))
  }

 
  document.getElementById('name').addEventListener('change', function (e) {
    let nameElement = document.getElementById('nameTag');
    nameElement.innerText = e.target.value;
  });

  document.getElementById('type').addEventListener('change', function (e) {
    let infoElement = document.getElementById('info');
    infoElement.innerText = e.target.value;
  });


  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    console.log(e.target);

    var formData = new FormData(e.target);
    formData = Object.fromEntries(formData);

    let nameElement = document.getElementById('nameTag');
    let textElement = document.getElementById('info');

    nameElement.innerText = formData.name;
    textElement.innerText = formData.type;

  });
  
  console.log("Ready");
});

function processForm(form) {

}

function changeCert(value) {
  let certificate = document.getElementById('certificate');
  certificate.classList = "";
  switch (value) {
    case 'A':
      certificate.classList.add('number1');
      break;
    case 'B':
      certificate.classList.add('number2');
      break;
    case 'C':
      certificate.classList.add('number3');
      break;
    case 'D':
      certificate.classList.add('number4');
      break;
  }
}

let theDate = new Date().toLocaleDateString
  ('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
let dateBox = document.getElementById('theDate');