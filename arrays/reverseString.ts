var testString = "Hello my name is Pete";

// function reverseString(str: string): string {
//     return str.split('').reverse().join('')
// }

function reverseString(str: string): string {
	if (!str || str.length < 2 || typeof str !== "string") {
		return "Input must be a valid string";
	}

	const backwardsString: String[] = [];

	for (let i = str.length - 1; i >= 0; i--) {
		backwardsString.push(str[i]);
	}

	return backwardsString.join("");
}

console.log(reverseString(testString));
