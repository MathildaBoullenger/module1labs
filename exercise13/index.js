/*var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result);*/

const Sentiment = require('sentiment');
const sentiment = new Sentiment();

function analyseSentiment(sentence) {
    const result = sentiment.analyze(sentence);
    console.dir(result);
}

analyseSentiment("The weather today is not good: it's raining a lot");