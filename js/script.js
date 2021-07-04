/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
let quotes = [
	{
		quote:
			'Nothing great in the world has ever been accomplished without passion.',
		source: 'Georg Wilhelm Friedrich Hegel',
	},
	{
		quote: 'Programming is not easy like Sunday morning, it is silent poetry.',
		source: ' Waseem Latif',
		citation: 'twitter',
	},
	{
		quote:
			'Cowards die many times before their deaths; The valiant never taste of death but once.',
		source: 'Julius Caesar',
	},
	{
		quote: 'Last words are for fools who have not said enough',
		source: 'Karl Marx',
		year: '1888',
	},
	{
		quote: 'Innovation distinguishes between a leader and a follower.',
		source: 'Steve Jobs',
		tag: 'inspirational, Youtube ',
	},
];

function getRandomQuote() {
	random = Math.floor(Math.random() * quotes.length) + 0;
	randomValue = quotes[random];
	return randomValue;
}

function printQuote() {
	RandomQuote = getRandomQuote();
	myQuote = `<p class='quote'>${RandomQuote.quote} </p> 
	<p class='source'>${RandomQuote.source}`;

	if (RandomQuote.citation) {
		myQuote += `<span class='citation'> ${RandomQuote.citation} </span>`;
	}
	if (RandomQuote.year) {
		myQuote += `<span class='year'> ${RandomQuote.year} </span>`;
	}
	if (RandomQuote.tag) {
		myQuote += `<span class='citation'> ${RandomQuote.tag} </span>`;
	}
	`</p>`;
	document.getElementById('quote-box').innerHTML = myQuote;
}

function autoTimer() {
	printQuote();
}

function autocolor() {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);
	let color = 'rgb(' + x + ',' + y + ',' + z + ')';

	document.body.style.background = color;
	// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
}

setInterval(autoTimer, 2000); // setInterval(function, milliseconds)   ,,, https://www.w3schools.com/js/js_timing.asp
setInterval(autocolor, 2000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);
