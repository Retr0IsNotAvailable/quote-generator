const api_url = 'https://api.quotable.io/random';

const quoteElement = document.querySelector('.js-quote');
const authorElement = document.querySelector('.js-author');
const postButton = document.querySelector('.js-post-button');


async function getQuote(url) {
  const res = await fetch(url);
  var data = await res.json();

  quoteElement.innerHTML = data.content;
  authorElement.innerHTML = data.author;
}

getQuote(api_url);

function post() {
  window.open('https://twitter.com/intent/tweet?text="' + quoteElement.innerHTML +
    '"  --' + authorElement.innerHTML,
    'Post Window', 'width=600px, height=300px');
}

postButton.addEventListener('click', () => post());

document.querySelector('.js-new-quote')
  .addEventListener('click', () => getQuote(api_url));