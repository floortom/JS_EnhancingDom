document.addEventListener("DOMContentLoaded", () => {
  const calcBtn = document.getElementById("calculateButton");
  const calcResult = document.getElementById("calculationResult");

  calcBtn.addEventListener("click", () => {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    // JS treats input as text, so we need to parse it into numbers ad then make sure that the result is a nuymber too.
    let result = parseInt(num1) + parseInt(num2);
    calcResult.textContent = `Result: ${
      isNaN(result) ? "Invalid input" : result
    }.`;
  });
});
