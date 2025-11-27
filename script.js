//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs[0].focus();

inputs.forEach((input, index) => {

	input.addEventListener("input", () => {
		if (input.value.length === 1 && index < inputs.length - 1) {
			inputs[index + 1].focus();
		}
	});

	input.addEventListener("keydown", (event) => {
		if (event.key === "Backspace") {

			// If field has value → clear it
			if (input.value !== "") {
				input.value = "";
				return;
			}

			// Move focus backward
			if (index > 0) {
				inputs[index - 1].value = "";
				inputs[index - 1].focus();
			}
		}
	});
});



