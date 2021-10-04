const quotes = [
    {
        quote:"This is your life. Do what you love, and do it often.",
        author:"holstee",
    },
    {
        quote:"If you don't like something, change it.",
        author:"holstee",
    },
    {
        quote:"If you don't like your job, quie.",
        author:"holstee",
    },
    {
        quote:"If you don't have enough time, stop watching TV.",
        author:"holstee",
    },
    {
        quote:"If you are looking for the love of your life, stop. They will be wwaiting for you when you start doing things you love.",
        author:"holstee",
    },
    {
        quote:"Stop over analyzing, life is simple.",
        author:"holstee",
    },
    {
        quote:"All emotions are beautiful.",
        author:"holstee",
    },
    {
        quote:"Open your mind, arms and heart to new things.",
        author:"holstee",
    },
    {
        quote:"Travel often, getting lost will help you find yourself.",
        author:"holstee",
    },
    {
        quote:"Some opportunities only come once, Seize them.",
        author:"holstee",
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;