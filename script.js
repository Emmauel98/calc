const light_mode = document.querySelector("#toggle-on");
const dark_mode = document.querySelector("#toggle-off");
const error_message = document.querySelector(".error_message");
const tip_amount_container = document.querySelector(".tip_amount span");

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

// this function handles the tip amount calculations
calculateButton.addEventListener("click", async () => {
  // fetch all values of each form input
  let amountValue = amountSelector.value;
  let guestValue = guestSelector.value;
  let qualityValue = qualitySelector.value;

  // converting the values to a number
  amountValue = parseInt(amountValue);
  guestValue = parseInt(guestValue);
  qualityValue = parseFloat(qualityValue);

  // validate the value of each input field and show the error message
  error_message.style.display = "block";
  const validators = [
    handleValidation(amountValue, amountSelector),
    handleValidation(guestValue, guestSelector),
    handleValidation(qualityValue, qualitySelector),
  ];

  // loop through the validators and ensure they all pass the validation test
  const validationComplete = validators.every((validator) => validator);

  //breaks the code if validation fails, this ensure the calc function does not run
  if (!validationComplete) return;

  // this block of code calls calculate function
  const calc = handleTipCalculation(amountValue, qualityValue, guestValue);

  // set the return value after calculation to the tip_amount container
  tip_amount_container.innerText = calc;

  //clear the value in the input field
  amountSelector.value = "";
  guestSelector.value = "";
  qualitySelector.value = "";
});

// This functionality validate the value of each input field
const handleValidation = (inputValue, inputSelector) => {
  // checks if it's NAN or the field is an empty
  if (isNaN(inputValue)) {
    // if the above statement is true, throw this error message and stop the code
    // return statement is use to stop or break out of a code
    handleErrorMessage(inputSelector, "cannot not be an empty field");
    return;
  }
  // checks if the value is zero
  if (inputValue === 0) {
    handleErrorMessage(inputSelector, "must be greater than zero (0)");
    return;
  }
  return true;
};

// this functionality takes in the input field and the custom error message
const handleErrorMessage = (selector, errorMessage) => {
  const inputContainer = selector.parentElement;
  const formGroup = inputContainer.parentElement;
  const label = formGroup.querySelector("label");
  error_message.style.display = "block";
  error_message.innerText = `${label.innerText} ${errorMessage}`;
};

// a function that calculate the tip amount and returns the calculated value
const handleTipCalculation = (a, b, c) => {
  // hide the display message
  error_message.style.display = "none";
  const calculate = (a * b) / c;
  return calculate.toFixed(2);
};
