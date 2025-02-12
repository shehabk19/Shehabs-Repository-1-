// Function to calculate sum and check even/odd
function calculate() {
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);

    // Perform addition
    let sum = number1 + number2;

    // Check if the sum is even or odd
    let resultMessage = `The sum is ${sum}. `;
    if (sum % 2 === 0 && sum !== 0) {
        resultMessage += "It is an even number.";
    } else {
        resultMessage += "It is an odd number.";
    }

    // Output the result
    console.log(resultMessage); // Output in Console
    document.getElementById("result").innerText = resultMessage; // Output in Browser
}
