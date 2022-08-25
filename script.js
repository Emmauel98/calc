const light_mode = document.querySelector("#toggle-on");
const dark_mode = document.querySelector("#toggle-off");
const error_message = document.querySelector(".error_message");

light_mode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  light_mode.style.display = "none";
  dark_mode.style.display = "block";
});

dark_mode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  dark_mode.style.display = "none";
  light_mode.style.display = "block";
});

// fetch all the form input field
const amountSelector = document.querySelector(".bill_amount");
const guestSelector = document.querySelector(".no_guest");
const qualitySelector = document.querySelector(".quality");

// fetch the calculate button and the tip amount div
const calculateButton = document.querySelector(".calc");
const Tip_amount = document.querySelector(".tip_amount");

// this function handles the tip amount
calculateButton.addEventListener("click", function () {
  // fetch all values of each form input
  let amountValue = amountSelector.value;
  let guestValue = guestSelector.value;
  let qualityValue = qualitySelector.value;

  // converting the values to a number
  amountValue = parseInt(amountValue);
  guestValue = parseInt(guestValue);
  qualityValue = parseFloat(qualityValue);

  console.log(typeof amountValue);
  console.log(typeof guestValue);
  handleValidation({ amountValue, guestValue, qualityValue });
  // checks if it is not a number or if the input field is empty
  //typeof checks the data type of a value
  return;
  if (typeof amountValue !== "number" || !amountValue) {
    // if the above statement is true, throw this error message and stop the code
    // return statement is use to stop or break out of a code
    HandleErrorMessage(amountSelector, "is required and must be a number");
    return;
  }

  //   const calc = ((Amount.value * Quality.value) / Guest.value).toFixed(2);
  //   console.log(calc);
  //   console.log(Tip_amount);
  //   Amount.value = "";
  //   Quality.value = "";
  //   Guest.value = "";

  //   if (calc === "NaN") {
  //     Tip_amount.style.display = "none";
  //     alert("This is working");
  //     return;
  //   } else {
  //     Tip_amount.style.display = "block";
  //     Tip_amount.innerHTML = calc;
  //     Tip_amount.style.padding = "15px";
  //     Tip_amount.style.color = "black";
  //   }
});

const handleValidation = ({ amountValue, guestValue, qualityValue }) => {
  console.log(amountValue, guestValue, qualityValue);
};

// this functionality takes in the input field and the custom error message
const HandleErrorMessage = (selector, errorMessage) => {
  const inputContainer = selector.parentElement;
  const formGroup = inputContainer.parentElement;
  const label = formGroup.querySelector("label");
  error_message.style.display = "block";
  error_message.innerText = `${label.innerText} ${errorMessage}`;
  //
};
