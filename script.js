function textAnalyzer() {
    const input = document.getElementById("text-input");
    let text = input.value;
    
    let plainText = text.toLowerCase().split("");
    plainText = plainText.filter((letter) => {
        return /[a-z0-9]/.test(letter);
    })

    if (plainText.length > 0) {
        PalindromeChecker(plainText, text);
    }
    else {
        alert("Please input a value");
    }
}

function PalindromeChecker(formattedText, originalText) {
    const result = document.getElementById("result");
    const palindromeExp = document.querySelector('.palindrome-exp');
    let correctOrder = formattedText.join("");
    let reverseOrder = formattedText.reverse().join("");

    if (correctOrder === reverseOrder) {
        result.innerHTML = `
        <p><span class="strong">${originalText}</span> is a palindrome.</p> 
        `
    }
    else {
        result.innerHTML = `
        <p><span class="strong">${originalText}</span> is not a palindrome.</p> 
        `
    }

    result.style.display = 'flex';
    palindromeExp.style.fontSize = '1rem';
}

const checkButton = document.getElementById("check-btn");
checkButton.addEventListener("click", textAnalyzer);