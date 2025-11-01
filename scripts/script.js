const api_url = 'https://api.quotable.io/random';

const quoteElement = document.querySelector('.js-quote');
const authorElement = document.querySelector('.js-author');


async function getQuote(url) {
  const res = await fetch(url);
  var data = await res.json();

  quoteElement.innerHTML = data.content;
  authorElement.innerHTML = data.author;
}

getQuote(api_url);

document.querySelector('.js-new-quote')
  .addEventListener('click', () => getQuote(api_url));