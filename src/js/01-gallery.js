// Add imports above this line
import { galleryItems } from './gallery-items';
import { closeModal } from '../helpers/closeModal';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

let instance;
//console.log(galleryItems);
const container = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => 
`<li class = "gallery__item">
  <a class = "gallery__link" href = "${original}">
    <img
      class = "gallery__image"
      src = "${preview}"
      data-source = "${original}"
      alt = "${description}"
    />
  </a>
</li >`);
container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick)

function onClick(evt) {
     evt.preventDefault();
if (evt.target.nodeName !== "IMG") {
    return;  
}
 //console.log(evt.target)
    const imgSource = evt.target.dataset.source ?? evt.target.closest('img').dataset.source;
  console.log(imgSource);

  instance = basicLightbox.create(`
    <img
      src = "${imgSource}" "width="1280" height="auto"
    />
`, {
      handler: null,
      onShow(instance) {
          this.handler = closeModal.bind(instance)
        document.addEventListener('keydown', this.handler);
      
    },
	
    onClose() {
    document.removeEventListener('keydown', this.handler);
    }
  }
  );
    instance.show();

}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});