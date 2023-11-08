
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

function fetchQuote() {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * 10);
            const quotes = data[randomIndex].text;
            const author = data[randomIndex].author;
            displayQuote(quotes,author);
            console.log(data[randomIndex].author);
        })
        .catch(error => console.error(error));
}
function displayQuote(quotes,author) {
    quoteText.textContent = quotes;
    if (author !== '') {
        quoteAuthor.innerHTML = '&mdash;' + " " + author;
}
}

newQuoteButton.addEventListener('click', fetchQuote);
