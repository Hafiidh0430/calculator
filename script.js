const displayValues = document.querySelector(".display_values");
const inputValues = document.querySelector(".input_values");
const inputs = document.querySelectorAll(".inputs");
let mask = document.querySelector(".mask");
const operators = ["+", "-", "/", "*", "%"];


inputs.forEach((input) => {
  input.addEventListener("click", (event) => {
    const regex = /^[0-9+\-*/.() ]+$/;
    const value = event.target.value;

    if (event.target.id == "equal") {
      displayValues.style.fontSize = "2rem";
      inputValues.style.fontSize = "1.4rem";
    }


    if (event.target.id == "number") {
      inputValues.style.fontSize = "2rem";
      displayValues.style.fontSize = "1.4rem";
    }

    if (value === "deleteAll") {
      inputValues.value = "";
      displayValues.textContent = "= ";
    } else if (value === "delete") {
      const deleteValue = inputValues.value.substring(
        0,
        inputValues.value.length - 1
      );
      inputValues.value = deleteValue;
      displayValues.textContent = `= ${deleteValue}`;

      inputValues.style.fontSize = "2rem";
      displayValues.style.fontSize = "1.4rem";
    } else {
      //checking if the operator more than 1 before adding new number
      if (!value && !regex.test(value) && value == undefined) return;
      if (
        operators.includes(inputValues.value[inputValues.value.length - 1]) &&
        operators.includes(value)
      )
        return (inputValues.value =
          inputValues.value.substring(0, inputValues.value.length - 1) + value);

      inputValues.value += value;
      if (operators.includes(inputValues.value[0])) {
        return displayValues.textContent = "= Input number first before operator!";
      }

      try {
        const result = eval(inputValues?.value);
        displayValues.textContent = `= ${result}`;
      } catch (error) {}
    }
  });
});

window.addEventListener("load", () => {
  inputValues.focus();
});
