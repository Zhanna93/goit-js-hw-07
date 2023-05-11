import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery')

// console.log(createGalleryItem(galleryItems));

function createGalleryItem(galleryItems) {
return galleryItems.map(({ original, preview, description }) => {
 return `<li class="gallery__item">
   <a class="gallery__link" 
     href="${original}">
     <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     />
   </a>
  </li>
 `;
}).join('')
};

gallery.insertAdjacentHTML("afterbegin", createGalleryItem(galleryItems))

gallery.addEventListener('click', onImageClick)

function onImageClick(evt) {
 evt.preventDefault()
 if (!evt.target.classList.contains('gallery__image')) {
  return;
 }
 const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`,{
		onShow: (instance) => {document.addEventListener('keydown', onEspPress)},
	onClose: (instance) => {document.removeEventListener('keydown', onEspPress)}
});
 instance.show();

 function onEspPress(evt) {
  if (evt.code === 'Escape') {
   instance.close();
  }
 }
}