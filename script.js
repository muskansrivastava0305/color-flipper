const flipButton = document.getElementById('flip-button');
const colorContainer = document.getElementById('color-container');
const colorInput = document.getElementById('color-input');
const addColorButton = document.getElementById('add-color-button');
const colorPalette = document.getElementById('color-palette');

let colors = [
  '#FF69B4', // pink
  '#33CC33', // green
  '#6666CC', // blue
  '#CC3333', // red
  '#CCCC33', // yellow
];

let currentColorIndex = 0;

flipButton.addEventListener('click', () => {
       currentColorIndex = (currentColorIndex + 1) % colors.length;
       colorContainer.style.backgroundColor = colors[currentColorIndex];
    });

// Generate a random color palette
function generateColorPalette() {
  const palette = [];
  for (let i = 0; i < 10; i++) {
    palette.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  return palette;
}

// Create color palette items
function createColorPaletteItems(palette) {
    colorPalette.innerHTML = '';
    palette.forEach((color, index) => { // Add the index parameter
      const paletteItem = document.createElement('div');
      paletteItem.className = 'color-palette-item';
      paletteItem.style.backgroundColor = color;
      paletteItem.addEventListener('click', () => {
        currentColorIndex = index; // Use the index parameter
        flipColor();
      });
      colorPalette.appendChild(paletteItem);
    });
  }

// Flip color with gradient transition
function flipColor() {
  const currentColor = colors[currentColorIndex];
  const nextColor = colors[(currentColorIndex + 1) % colors.length];
  colorContainer.style.backgroundImage = `linear-gradient(to bottom, ${currentColor}, ${nextColor})`;
//   setTimeout(() => {
//     colorContainer.style.backgroundImage = `none`;
//     colorContainer.style.backgroundColor = nextColor;
//   }, 500);
}

// Add custom color to palette
addColorButton.addEventListener('click', () => {
  const customColor = colorInput.value;
  colors.push(customColor); // Add new color to the colors array
  createColorPaletteItems(generateColorPalette()); // Update the color palette items
  currentColorIndex = colors.length - 1; // Set the current color index to the new color
  flipColor(); // Flip the color to the new color
});

// Initialize color palette
createColorPaletteItems(generateColorPalette());

// Flip color on button click
flipButton.addEventListener('click', flipColor);

// Flip color on page load
flipColor();



// const flipButton = document.getElementById('flip-button');
// const colorContainer = document.getElementById('color-container');
// const colorInput = document.getElementById('color-input');
// const addColorButton = document.getElementById('add-color-button');
// const colorPalette = document.getElementById('color-palette');

// let colors = [
//   '#FF69B4', // pink
//   '#33CC33', // green
//   '#6666CC', // blue
//   '#CC3333', // red
//   '#CCCC33', // yellow
// ];

// let currentColorIndex = 0;

// flipButton.addEventListener('click', () => {
//   currentColorIndex = (currentColorIndex + 1) % colors.length;
//   colorContainer.style.backgroundColor = colors[currentColorIndex];
// });



// // Generate a random color palette
// function generateColorPalette() {
//   const palette = [];
//   for (let i = 0; i < 10; i++) {
//     palette.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
//   }
//   return palette;
// }

// // Create color palette items
// function createColorPaletteItems(palette) {
//   colorPalette.innerHTML = '';
//   palette.forEach((color) => {
//     const paletteItem = document.createElement('div');
//     paletteItem.className = 'color-palette-item';
//     paletteItem.style.backgroundColor = color;
//     paletteItem.addEventListener('click', () => {
//       currentColorIndex = colors.indexOf(color);
//      flipColor();
//     });
//     colorPalette.appendChild(paletteItem);
//   });
// }

// // Flip color with gradient transition
// function flipColor() {
//   const currentColor = colors[currentColorIndex];
//   const nextColor = colors[(currentColorIndex + 1) % colors.length];
//   colorContainer.style.backgroundImage = `linear-gradient(to bottom, ${currentColor}, ${nextColor})`;
// //   setTimeout(() => {
// //     colorContainer.style.backgroundImage = `none`;
// //     colorContainer.style.backgroundColor = nextColor;
// //   }, 5000);
// }

// // Add custom color to palette
// addColorButton.addEventListener('click', () => {
//   const customColor = colorInput.value;
//   colors.push(customColor);
//   createColorPaletteItems(generateColorPalette());
// });

// // Initialize color palette
// createColorPaletteItems(generateColorPalette());

// // Flip color on button click
// flipButton.addEventListener('click', flipColor);

// // // Flip color on page load
// flipColor();