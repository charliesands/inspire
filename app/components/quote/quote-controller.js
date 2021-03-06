import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(data) {

	document.getElementById('quote').innerHTML = `
<blockquote class="blockquote text-center">
  <p id="quote-hover" class="mb-0">${data.quote}</p>
  <footer id="author" class="blockquote-footer"><cite title="Source Title">${data.author}</cite></footer>
</blockquote>
`
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(drawQuote)
	}
}

