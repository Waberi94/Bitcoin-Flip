function flipCoin() {
    const resultElement = document.getElementById('result');
    const coinElement = document.getElementById('coin');
    const starsContainer = document.getElementById('stars');

    // Remove existing stars
    while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
    }

    // Randomly generate 0 or 1 for heads or tails
    const randomNumber = Math.floor(Math.random() * 2);
    const result = (randomNumber === 0) ? 'Heads' : 'Tails';

    // Update the result text
    resultElement.textContent = `Result: ${result}`;

    // Rotate the coin based on the result
    if (result === 'Heads') {
        coinElement.style.transform = 'rotateY(0deg)';
    } else {
        coinElement.style.transform = 'rotateY(180deg)';
    }

}

