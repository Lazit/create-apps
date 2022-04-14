const quotes = [
    {
        quote: "The unexamined life is not worth living",
        author: "Socrates",
    },
    {
        quote: "Whereof one cannot speak, thereof one must be silent",
        author: "Ludwig Wittgenstein",
    },
    {
        quote: "Entities should not be multiplied unnecessarily",
        author: "William of Ockham",
    },
    {
        quote: "I think therefore I am",
        author: "René Descartes",
    },
    {
        quote: "He who thinks great thoughts, often makes great errors",
        author: "Martin Heidegger",
    },
    {
        quote: "We live in the best of all possible worlds",
        author: "Gottfried Wilhelm Leibniz",
    },
    {
        quote: "What is rational is actual and what is actual is rational",
        author: "G. W. F. Hegel",
    },
    {
        quote: "You shall not pass!",
        author: "gandalf - The Lord of the Ring(2002)",
    },
    {
        quote: "I'll be back",
        author: "The Terminator(1984)",
    },
    {
        quote: "Bazinga",
        author: "Sheldon Cooper - The Big Bang Theory(2007)",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");



const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 