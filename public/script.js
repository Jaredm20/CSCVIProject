let loggedIn = false;
let savedQuotes = [];

const quotes = [
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        keywords: ["limit", "realization", "doubts", "tomorrow", "today"]
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
        keywords: ["success", "happiness", "love", "doing"]
    },
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll",
        keywords: ["life", "happens", "react"]
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        keywords: ["glory", "living", "falling", "rising"]
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs",
        keywords: ["time", "limited", "waste", "living", "someone else's life"]
    }
];

function generateQuote() {
    const keywordInput = document.getElementById('keywordInput');
    const generatedQuote = document.getElementById('generatedQuote');
    const biographyBox = document.getElementById('biographyBox');
    const imageContainer = document.getElementById('imageContainer');

    const keyword = keywordInput.value.toLowerCase();
    const matchingQuotes = quotes.filter(quote => quote.keywords.includes(keyword));

    if (matchingQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingQuotes.length);
        const selectedQuote = matchingQuotes[randomIndex];

        generatedQuote.textContent = `"${selectedQuote.text}" - ${selectedQuote.author}`;

        const biographyText = `${selectedQuote.author}: ${getBiography(selectedQuote.author)}`;
        biographyBox.textContent = biographyText;

        // Create and append image element
        const authorImage = new Image();
        authorImage.src = `./images/${selectedQuote.author.toLowerCase().replace(/\s/g, '')}.jpg`;
        authorImage.alt = `${selectedQuote.author}'s Image`;
        authorImage.classList.add('author-image');
        imageContainer.innerHTML = ''; // Clear previous image
        imageContainer.appendChild(authorImage); // Append the new image
    } else {
        generatedQuote.textContent = "No matching quotes found.";
        biographyBox.textContent = "";
        imageContainer.innerHTML = "";
    }
}

function getBiography(author) {
    switch (author) {
        case "Franklin D. Roosevelt":
            return "The 32nd President of the United States, led the nation through the Great Depression and World War II, implementing the New Deal and inspiring hope with his resilient leadership.";
        case "Albert Schweitzer":
            return "A humanitarian and philosopher, dedicated his life to medicine and humanitarian work in Africa, winning the Nobel Peace Prize for his philosophy of 'Reverence for Life.";
        case "Charles R. Swindoll":
            return "A pastor and author, influenced millions through his teachings, emphasizing the importance of faith, integrity, and grace in everyday life.";
        case "Nelson Mandela":
            return "A well renowned revolutionary and the first black President of South Africa, fought for equality and reconciliation, becoming a global symbol of freedom and justice.";
        case "Steve Jobs":
            return "The co-founder of the company Apple, revolutionized technology and design, shaping modern communication and entertainment with his products like the iPhone and iPad.";
        default:
            return ""; 
    }
}

function deleteQuote(index) {
    savedQuotes.splice(index, 1);
    updateSavedQuotesDisplay();
}

function updateSavedQuotesDisplay() {
    const savedQuotesContainer = document.getElementById('savedQuotes');

savedQuotesContainer.innerHTML = savedQuotes.map((quote, index) => {
    return `<p>${quote} <button onclick="deleteQuote(${index})">Delete</button></p>`;
}).join('');
}

function toggleLogin() {
    const userSection = document.getElementById('userSection');
    const loginBtn = document.getElementById('loginBtn');

    loggedIn = !loggedIn;

    if (loggedIn) {
        userSection.classList.remove('hidden');
        loginBtn.textContent = 'Log Out';
    } else {
        userSection.classList.add('hidden');
        loginBtn.textContent = 'Log In';
    }
}

function saveQuote() {
    const savedQuoteInput = document.getElementById('savedQuoteInput');
    const savedQuotesContainer = document.getElementById('savedQuotes');

    const quote = savedQuoteInput.value;
    savedQuotes.push(quote);

    savedQuotesContainer.innerHTML = savedQuotes.map(q => `<p>${q}</p>`).join('');
    
    updateSavedQuotesDisplay();

}

updateSavedQuotesDisplay();


function shareQuote() {
    const generatedQuote = document.getElementById('generatedQuote');
    const range = document.createRange();
    range.selectNode(generatedQuote);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Quote copied to clipboard!');
}


