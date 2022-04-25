const calculateButton = document.getElementById("calculate-btn");
const billAmountInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const totalAmountDisplay = document.getElementById("total-amount");

calculateButton.addEventListener("click", () => {
	const billAmount = parseFloat(billAmountInput.value);
	const tipPercentage = parseFloat(tipPercentageInput.value);

	if (isNaN(billAmount) || isNaN(tipPercentage)) {
		alert("Please enter valid numbers for bill amount and tip percentage.");
		return;
	}

	const tipAmount = (billAmount * tipPercentage) / 100;
	const totalAmount = billAmount + tipAmount;

	totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
});
