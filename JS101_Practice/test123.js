// Query Selectors
const q = (selecror) => document.querySelector(selecror);
const qAll = (selecror) => document.querySelectorAll(selecror);

// Functions 
const showWarning = (input) => {
  input.parentNode.parentNode.classList.add("warning");
  input.parentNode.nextElementSibling.style.display = "block"; // .nextSibling doesn't work
}

const hideWarning = (input) => {
  input.parentNode.parentNode.classList.remove("warning");
  input.parentNode.nextElementSibling.style.display = "none";
}

// Form submit
q("form").addEventListener('submit', e => {

  const reqText = qAll(".required.text");
  const reqRadio = qAll(".required.radio");

  // Check redio
  if (reqRadio[0].checked + reqRadio[1].checked === 0) {
    e.preventDefault();
    showWarning(reqRadio[1]);

  } else {
    hideWarning(reqRadio[1]);
  }
  const typeValue = reqRadio[0] ? reqRadio[0].value : reqRadio[1].value;

  // Check text
  for (i = 0; i < reqText.length; i++) {
    if (reqText[i].value === "") {
      e.preventDefault();
      showWarning(reqText[i]);
      reqText[i].classList.add("border-bottom-red");

    } else {
      hideWarning(reqText[i]);
      reqText[i].classList.remove("border-bottom-red");
    }
  }

  // Form good to go
  if (reqRadio[0].checked + reqRadio[1].checked !== 0 && reqText[0].value !== "" && reqText[1].value !== "" && reqText[2].value !== "" && reqText[3].value !== "") {
  
    e.preventDefault(); // Just for here
    q("body").scrollTop = 0;
    q(".form--header--content").style.display = "none";
    q(".form--body").style.display = "none";
    q(".submitted").style.display = "block";

    const response = {};
    response.email = q('input[name="email"]').value;
    response.name = q('input[name="name"]').value;
    response.applyFor = typeValue;
    response.currentJob = q('input[name="job"]').value;
    response.background = q('input[name="background"]').value;
    response.others = q('input[name="others"]').value;

    console.log("Your respnose:");
    console.log(response);
  }
})

/*

// This adds a warning text each time the form being submitted
const makeWarningText = () => {
  const node = document.createElement("div");
  node.textContent = "This is a required question";
  node.setAttribute("class", "warning-text");
  return node;
}
if (reqText[i].value === "") {
  e.preventDefault();
  const warningText = makeWarningText();
  reqText[i].parentNode.parentNode.appendChild(warningText);
  reqText[i].parentNode.parentNode.classList.add("warning");
}

*/