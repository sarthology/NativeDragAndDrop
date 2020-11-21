const magicBox = document.getElementById("magicBox");

// Change color of the box if something being dragged 🖍
const dragging = (e) => {
  e.preventDefault();
  magicBox.style = "border-color: rgba(164, 37, 228)";
};

// Back to initial stage when dragging ends 🏃🏾‍♂️
const dragLeft = () => {
  magicBox.style = "border-color: #c6c6c6";
};

// Handle File drop on Drop Zone 📥
const onDrop = (e) => {
  e.preventDefault();
  magicBox.style = "border-color: #c6c6c6";
  const { files } = e.dataTransfer;
  previewImage(files[0]);
};

// Appending Image to the Drop area 👩‍👦
const previewImage = (file) => {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  magicBox.appendChild(img);
};

// Create payload and upload to server 🚀
const upload = (files) => {
  const payload = { image: files };
  // Upload to your API 📤
};