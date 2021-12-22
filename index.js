const express = require('express')
const app = express()
const port = 8000

const lib = require('./src/lib.js')
const quotes = require('./src/quotes.json')

/* GET ENDPOINTS */
app.get('/', (req, res) => {
    res.send(`GET request at /`);
})

app.get('/quote', (req, res) => {
    res.send(lib.displaySampleQuote(quotes));
})

app.get('/quote/random', (req,res) => {
    res.send(lib.randomQuote(quotes));
})

app.get('/quote/index/:index', (req, res) => {
    const { index } = req.params;
    res.send(lib.selectQuoteByIndex(quotes, index));
})

app.get('/quotes/year/:year', (req, res) => {
    const { year } = req.params;
    res.send(lib.selectQuotesByYear(quotes, year));
})

app.get('/quotes/all', (req, res) => {
    res.send(lib.allQuotes(quotes));
})

app.get('/quotes/total', (req, res) => {
    res.send(`The kimi.rest database currently contains ${lib.numberOfQuotes(quotes)} quotes!`);
})

/* FORMAT */
app.set('json spaces', 4);

/* PORT */
app.listen(
    port,
    () => console.log(`Live at http://localhost:${port}`)
)
