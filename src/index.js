import './css/style.css';
import 'mini.css/dist/mini-default.min.css';

import { selectQuoteTags } from './js/select-quote-tags';
import { selectColor } from './js/select-color';
import { mostLikedImage } from './js/most-liked-image';

let tag;
let color;
let text;

const selectTags = selectQuoteTags(document.body, (value) => {
  tag = value;

  const selectCol = selectColor(document.body, (selectedColor) => {
    color = selectedColor;

    fetch(`https://api.quotable.io/quotes/random?tags=${tag}&limit=1`)
      .then((response) => response.json())
      .then((quoteJSON) => {
        const quote = quoteJSON[0].content;
        text = quote;

        return fetch(`https://api.unsplash.com/search/photos/?query=${quote}&client_id=OphEZ-1zQSA2REeTRj6diooRQ-loTuLqRQZC_yarL7I&color=${color}`);
      })
      .then((response) => response.json())
      .then((images) => {
        const image = mostLikedImage(images.results);

        document.body.style.backgroundColor = image.color;

        document.body.style.backgroundImage = `url('${image.urls.raw}')`;

        const quoteElem = document.createElement('span');
        quoteElem.textContent = text;
        quoteElem.classList.add('page__quote');

        document.body.appendChild(quoteElem);

        selectCol.remove();
        selectTags.remove();
      });
  });
});
