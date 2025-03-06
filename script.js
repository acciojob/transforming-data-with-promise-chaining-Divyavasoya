//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    let inputValue = parseFloat(document.getElementById("ip").value);
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    if (isNaN(inputValue)) {
        outputDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    // Function to create a promise with a delay
    function delayedPromise(value, delay, transform) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let newValue = transform(value);
                outputDiv.innerHTML += `<p>Result: ${newValue}</p>`;
                resolve(newValue);
            }, delay);
        });
    }

    // Start promise chain
    delayedPromise(inputValue, 2000, (num) => num) // Initial value
        .then((num) => delayedPromise(num, 2000, (num) => num * 2)) // Multiply by 2
        .then((num) => delayedPromise(num, 1000, (num) => num - 3)) // Subtract 3
        .then((num) => delayedPromise(num, 1000, (num) => num / 2)) // Divide by 2
        .then((num) => delayedPromise(num, 1000, (num) => num + 10)) // Add 10
        .then((finalResult) => {
            outputDiv.innerHTML += `<p><strong>Final Result: ${finalResult}</strong></p>`;
        });
});
