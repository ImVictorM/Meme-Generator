const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

const memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('input', () => {
  const imagePath = URL.createObjectURL(memeInsert.files[0]);
  const imageElement = document.getElementById('meme-image');
  imageElement.src = imagePath;
});
