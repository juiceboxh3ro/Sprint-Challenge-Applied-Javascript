// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(obj) {
  // create elements
  const card = document.createElement('div'), // card
  headline = document.createElement('div'), // headline
  author = document.createElement('div'), // author
    imgCont = document.createElement('div'), // img-container
      image = document.createElement('img'),
    credit = document.createElement('span');

  // add classes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgCont.classList.add('img-container');

  // create structure
  card.append(headline);
  card.append(author);
  author.append(imgCont);
  author.append(credit);
  imgCont.append(image);

  // apply text
  headline.textContent = obj.headline;
  image.src = obj.authorPhoto;
  credit.textContent = obj.authorName;
  
  // return the main element
  return card;
}

const cardDeck = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
  // inside articles obj is array of objects
  const puppers = res.data.articles;
  console.log(puppers); // array with objects

  for(const prop in puppers) {
    const article = puppers[prop];

    article.forEach(item => {
      cardDeck.append(cardCreator(item));
    })
  }

  // puppers.javascript.forEach(item => {
  //   cardDeck.append(cardCreator(item));
  // })
})
.catch(err => {
  console.log(err);
})