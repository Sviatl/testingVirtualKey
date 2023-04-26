const keyboardLayout = [
	["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
	["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
	["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
	["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
];

const keyboard = document.getElementById("keyboard");
const textarea = document.getElementById("text");

keyboardLayout.forEach(row => {
	const rowElem = document.createElement("div");
	rowElem.className = "row";

	row.forEach(key => {
		const keyElem = document.createElement("div");
		keyElem.className = "key";
		keyElem.textContent = key;
		keyElem.addEventListener("click", () => {
			textarea.value += key;
		});
		rowElem.appendChild(keyElem);
	});

	keyboard.appendChild(rowElem);
});
