export const renderImages = images => {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
        <div class="photo-card">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${image.likes}</p>
                <p class="info-item"><b>Views</b> ${image.views}</p>
                <p class="info-item"><b>Comments</b> ${image.comments}</p>
                <p class="info-item"><b>Downloads</b> ${image.downloads}</p>
            </div>
        </div>
    `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
};

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
};

export const showLoadMoreButton = () => {
  const loadMoreButton = document.querySelector('.load-more');
  loadMoreButton.style.display = 'block';
};

export const hideLoadMoreButton = () => {
  const loadMoreButton = document.querySelector('.load-more');
  loadMoreButton.style.display = 'none';
};

export const showEndMessage = () => {
  const message = document.createElement('p');
  message.textContent =
    "We're sorry, but you've reached the end of search results.";
  message.classList.add('end-message');
  document.querySelector('.gallery').insertAdjacentElement('afterend', message);
};
