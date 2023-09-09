function firstNonRepeatedChar(str) {
    if (!str || str.length === 0) {
        return null; // null for empty string or no input
    }

    const charCount = new Array(26).fill(0);

    // Count the frequency of each character in the string
    for (const char of str) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        charCount[index]++;
    }

    // Find the first non-repeated character in the original order
    for (const char of str) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (charCount[index] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // Return null if no non-repeated character found
}

const input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input)); 

//Tc- O(n) Sc-O(1)
