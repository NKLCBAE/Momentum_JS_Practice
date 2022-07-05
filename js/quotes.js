const quotes = [
  {
    quote: "My heart and sword always for Demacia",
    author: "Garen",
  },
  {
    quote: "If you're buying, I'm in!",
    author: "Gragas",
  },
  {
    quote: "My blade is yours",
    author: "Master Yi",
  },
  {
    quote: "Mundo!",
    author: "Dr. Mundo",
  },
  {
    quote: "Fortune doesn't favor fools!",
    author: "Miss Fortune",
  },
  {
    quote: "Everybody dies. Some just need a little help",
    author: "Lucian",
  },
  {
    quote: "The unseen blade is the deadliest",
    author: "Zed",
  },
  {
    quote: "Punch first. Ask questions while punching",
    author: "Vi",
  },
  {
    quote: "Fired up, and ready to serve",
    author: "Blitzcrank",
  },
  {
    quote: "Captain teemo, on duty!",
    author: "Teemo",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
