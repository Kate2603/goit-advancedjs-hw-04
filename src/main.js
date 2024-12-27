import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
  showEndMessage,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';

let currentPage = 1;
let currentQuery = '';

const form = document.querySelector('.search-form');
const loadMoreButton = document.querySelector('.load-more');

form.addEventListener('submit', async event => {
  event.preventDefault();
  currentQuery = event.target.elements.query.value.trim();
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();

  if (currentQuery) {
    try {
      const data = await fetchImages(currentQuery, currentPage);
      renderImages(data.hits);
      if (data.totalHits > 15) {
        showLoadMoreButton();
      }
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    } catch (error) {
      console.error('Error:', error);
    }
  }
});

loadMoreButton.addEventListener('click', async () => {
  currentPage += 1;

  try {
    const data = await fetchImages(currentQuery, currentPage);
    renderImages(data.hits);

    // Page scrolling
    const cardHeight = document
      .querySelector('.photo-card')
      .getBoundingClientRect().height; // We get the height of the card
    window.scrollBy({
      top: cardHeight * 2, // Scroll to two card heights
      behavior: 'smooth', // Smooth scrolling
    });

    if (data.hits.length < 15 || currentPage * 15 >= data.totalHits) {
      hideLoadMoreButton();
      showEndMessage();
    }

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
  } catch (error) {
    console.error('Error:', error);
  }
});
