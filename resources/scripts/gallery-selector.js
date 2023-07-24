const tagContainer = document.getElementById('tagContainer');
const gallery = document.getElementById('gallery');

const tags = [
  { name: 'Safe', backgroundColor: '#2ac955' },
  { name: 'Suggestive', backgroundColor: '#f5a92f' },
  { name: 'Erotica', backgroundColor: '#f75a2a' },
  { name: 'Pornographic', backgroundColor: '#f72a2a' },
  { name: 'Degen', backgroundColor: '#b62af7' },
  { name: 'Fullbody', backgroundColor: '#f57dad' },
  { name: 'Portrait', backgroundColor: '#2a83f7' },
  { name: 'Bust', backgroundColor: '#2af791' },
];

function addTagToContainer(tag) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', 'tag-' + tag.name.toLowerCase());
  tagElement.innerText = tag.name;
  tagElement.style.backgroundColor = tag.backgroundColor;

  tagElement.addEventListener('click', function () {
    const isExclusiveTag = ['Safe', 'Suggestive', 'Erotica', 'Pornographic', 'Degen', 'Fullbody', 'Portrait', 'Bust'].includes(tag.name);
    
    // If the clicked tag is an exclusive tag, deselect all other tags in the same category.
    if (isExclusiveTag) {
      const exclusiveTags = ['Safe', 'Suggestive', 'Erotica', 'Pornographic', 'Degen', 'Fullbody', 'Portrait', 'Bust'];
      for (const exclusiveTag of exclusiveTags) {
        const exclusiveTagElement = document.querySelector('.tag-' + exclusiveTag.toLowerCase());
        if (exclusiveTag !== tag.name) {
          exclusiveTagElement.classList.remove('tag-selected');
        }
      }
    }

    // Toggle the clicked tag's selection status.
    tagElement.classList.toggle('tag-selected');
    
    // Update the gallery based on the selected tags.
    updateGallery();
  });

  tagContainer.appendChild(tagElement);
}


function updateGallery() {
  const selectedTags = Array.from(tagContainer.getElementsByClassName('tag-selected')).map(tag => tag.innerText.toLowerCase());
  const imageCards = document.querySelectorAll('.image-card');

  if (selectedTags.length === 0) {
    // If no tags are selected, hide the gallery
    gallery.style.display = 'none';
  } else {
    gallery.style.display = 'flex';
    for (const card of imageCards) {
      const tagsInCard = card.dataset.tags.toLowerCase();
      const displayCard = selectedTags.every(tag => tagsInCard.includes(tag));
      card.style.display = displayCard ? 'block' : 'none';
    }
  }
}

function createTagElement(tag, imageCard, selected = false) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', selected ? 'tag-selected' : '');
  tagElement.innerText = tag;

  imageCard.appendChild(tagElement);
}

function generateTagsHTML(tags, isDescriptionTag = false) {
  return tags
    .split(' ')
    .map(tag => `<div class="tag ${isDescriptionTag ? 'description-tag' : 'tag-selected'}">${tag}</div>`)
    .join('');
}

function addTagsToCard(imageCard, tags) {
  const imageInfo = imageCard.querySelector('.image-info');
  const tagsParagraph = document.createElement('p');
  tagsParagraph.classList.add('image-tags');

  tagsParagraph.innerHTML = generateTagsHTML(tags, true);

  imageInfo.appendChild(tagsParagraph);
}

function addImageToGallery(mediaSrc, tags, descriptionHTML) {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');
    imageCard.dataset.tags = tags;
  
    const mediaElement = mediaSrc.includes('.mp4')
      ? createVideoElement(mediaSrc)
      : createImageElement(mediaSrc);
  
    const imageInfo = document.createElement('div');
    imageInfo.classList.add('image-info');
  
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.innerHTML = descriptionHTML;
  
    imageInfo.appendChild(descriptionParagraph);
    imageCard.appendChild(mediaElement);
    imageCard.appendChild(imageInfo);
    gallery.appendChild(imageCard);
  
    addTagsToCard(imageCard, tags);
}

function createImageElement(imageSrc) {
  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.alt = 'Image Description';
  return imgElement;
}

function createVideoElement(videoSrc) {
  const videoElement = document.createElement('video');
  videoElement.src = videoSrc;
  videoElement.controls = true;
  return videoElement;
}

tags.forEach(tag => addTagToContainer(tag));

addImageToGallery('gallery/chaosringen-fullrender-bust.png', 'Suggestive Bust', 'Full render bust commission by <a href="https://linktr.ee/chaosringen" target="_blank">@chaosringen</a>');
addImageToGallery('gallery/juurikun-fullbody-sketch.png', 'Safe Fullbody', 'Sketchy fullbody artwork commission by <a href="https://www.instagram.com/juurikun/" target="_blank">@juurikun</a><br>🙏 ');
addImageToGallery('gallery/chaosringen-sketch.jpg', 'Safe Suggestive Bust', 'Sketch for a full render bust commission by <a href="https://linktr.ee/chaosringen" target="_blank">@chaosringen</a>');
addImageToGallery('gallery/hamo19574270-fullbody.png', 'Degen', 'Skeb commission from <a href="https://skeb.jp/@hamo19574270" target="_blank">鱧</a>');
addImageToGallery('gallery/ozzays041-sketch.bmp', 'Degen', 'Sketch for a fullbody commission by <a href="https://patreon.com/Ozzay041" target="_blank">Ozzay</a>');
