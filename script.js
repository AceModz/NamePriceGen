let entryCount = 0;
const maxEntries = 6;

document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generatePrice();
    }
});

function generatePrice() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        const price = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        const resultList = document.getElementById('resultList');
        const newEntry = document.createElement('div');
        newEntry.classList.add('result-entry');
        newEntry.innerText = `${name}:  $${price}`;
        resultList.prepend(newEntry);

        entryCount++;
        if (entryCount > maxEntries) {
            const entries = resultList.querySelectorAll('.result-entry');
            const lastEntry = entries[entries.length - 1];
            lastEntry.classList.add('hidden');
            setTimeout(() => {
                resultList.removeChild(lastEntry);
                entryCount--;
            }, 500);  // Allow some time for the visual effect
        }

        document.getElementById('nameInput').value = '';  // Clear the input field
    } else {
        alert('Please enter a name.');
    }
}
