// Function to generate a random password
function generatePassword(length, options) {
    const { includeUppercase, includeLowercase, includeNumbers, includeSpecialChars } = options;
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()';

    let validChars = '';
    let password = '';

    if (includeUppercase) {
        validChars += upperChars;
        password += upperChars[Math.floor(Math.random() * upperChars.length)]; // Ensure at least one uppercase
    }
    if (includeLowercase) {
        validChars += lowerChars;
        password += lowerChars[Math.floor(Math.random() * lowerChars.length)]; // Ensure at least one lowercase
    }
    if (includeNumbers) {
        validChars += numberChars;
        password += numberChars[Math.floor(Math.random() * numberChars.length)]; // Ensure at least one number
    }
    if (includeSpecialChars) {
        validChars += specialChars;
        password += specialChars[Math.floor(Math.random() * specialChars.length)]; // Ensure at least one special character
    }

    // If no character types are selected
    if (validChars.length === 0) {
        throw new Error("At least one character type must be selected.");
    }

    // Fill the rest of the password length with random characters
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

// Export the function for testing
module.exports = { generatePassword };
