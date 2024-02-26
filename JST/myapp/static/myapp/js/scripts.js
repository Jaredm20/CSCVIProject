let loggedIn = false;
let savedQuotes = [];

const quotes = [
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Dr. Amelia Wright",
        keywords: ["limit", "realization", "doubts", "tomorrow", "today"]
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Elijah Harper",
        keywords: ["success", "happiness", "love", "doing"]
    },
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Aisha Rodriguez",
        keywords: ["life", "happens", "react"]
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Alexander Bennett",
        keywords: ["glory", "living", "falling", "rising"]
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Sophie Chen",
        keywords: ["time", "limited", "waste", "living", "someone else's life"]
    }
];

function generateQuote() {
    const keywordInput = document.getElementById('keywordInput');
    const generatedQuote = document.getElementById('generatedQuote');
    const biographyBox = document.getElementById('biographyBox');

    const keyword = keywordInput.value.toLowerCase();
    const matchingQuotes = quotes.filter(quote => quote.keywords.includes(keyword));

    if (matchingQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingQuotes.length);
        const selectedQuote = matchingQuotes[randomIndex];

        generatedQuote.textContent = `"${selectedQuote.text}" - ${selectedQuote.author}`;

        const biographyText = `${selectedQuote.author}: ${getBiography(selectedQuote.author)}`;
        biographyBox.textContent = biographyText;
    } else {
        generatedQuote.textContent = "No matching quotes found.";
        biographyBox.textContent = ""; 
    }
}

function getBiography(author) {
    switch (author) {
        case "Dr. Amelia Wright":
            return "A physicist known for her work in quantum mechanics. Born in 1975, Dr. Wright overcame societal expectations to become a leading figure in the exploration of theoretical physics. Her innovative ideas continue to inspire young scientists worldwide.";
        case "Elijah Harper":
            return "A renowned entrepreneur and motivational speaker born in 1980. Growing up in challenging circumstances, Harper built a successful business empire from scratch. His passion for inspiring others has made him a sought-after speaker at conferences and universities.";
        case "Aisha Rodriguez":
            return "A resilience coach and author born in 1988. Aisha's journey from adversity to triumph has shaped her philosophy on life. After facing personal challenges, she dedicated her life to helping others build resilience and overcome obstacles.";
        case "Alexander Bennett":
            return "An accomplished mountaineer and adventurer born in 1963. Bennett has conquered some of the world's highest peaks and faced numerous challenges in extreme conditions. His experiences have taught him invaluable lessons about resilience and determination.";
        case "Sophie Chen":
            return "A tech innovator and entrepreneur born in 1990. Sophie co-founded a successful tech startup that revolutionized the way people connect. Her authenticity and pursuing one's passions has made her a role model for aspiring entrepreneurs.";
        default:
            return ""; 
    }
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
}

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


