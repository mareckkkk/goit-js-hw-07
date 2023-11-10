import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let instance;

const markup = galleryItems
	.map(
		(image) =>
			`<li>
    <div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>
</li>`
	)
    .join("");
    
gallery.insertAdjacentHTML("beforeend", markup);

function handleClick(event) {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}
	const selectedImage = event.target.dataset.source;
	instance = basicLightbox.create(
		`<img width="1400" height="900" src="${selectedImage}">`
	);
	instance.show();

	document.addEventListener("keydown", closePreview);
}

function closePreview(event) {
	if (event.key == "Escape") {
		console.log("escape key was pressed");
		document.removeEventListener("keydown", closePreview);
		instance.close();
	}
}

gallery.addEventListener("click", handleClick);
