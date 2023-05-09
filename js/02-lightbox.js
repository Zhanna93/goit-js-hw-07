import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery')

// console.log(createGalleryItem(galleryItems));

function createGalleryItem(galleryItems) {
return galleryItems.map(({ original, preview, description }) => {
 return `<li class="gallery__item">
   <a class="gallery__link" 
     href="${original}">
     <img class="gallery__image"
      src="${preview}"
      alt="${description}"
     />
   </a>
  </li>
 `;
}).join('')
};

galleryList.insertAdjacentHTML("afterbegin", createGalleryItem(galleryItems))

galleryList.addEventListener('click', onImageClick)

function onImageClick(evt) {
 if (!evt.target.classList.contains('gallery__image')) {
  return;
 }
 // console.log(evt.target)
}

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});
gallery.on('show.simplelightbox', function () {
 console.log(gallery)
});
