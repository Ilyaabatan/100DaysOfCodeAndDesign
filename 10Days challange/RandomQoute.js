const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
    "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  

  document.getElementById("quote").textContent = quotes[randomIndex];
}