// images
const mainImage = document.querySelector<HTMLImageElement>(".main-image");
const thumbnails =
  document.querySelectorAll<HTMLImageElement>(".thumbnail img");
const spinner = document.getElementById("spinner");

// quantity controls
const quantityIncrease = document.getElementById(
  "increase"
) as HTMLButtonElement;
const quantityDecrease = document.getElementById(
  "decrease"
) as HTMLButtonElement;
const quantityValue = document.getElementById("quantity") as HTMLElement;

// ===============================
// Thumbnail click functionality
// ===============================

// thumbnails.forEach((thumb) => {
//   thumb.addEventListener("click", () => {
//     if (mainImage && spinner) {
//       // Show spinner
//       spinner.classList.remove("hidden");
//       spinner.classList.add("flex");

//       // Extract file name from thumbnail src
//       const fileName = thumb.src.split("/").pop() || "";

//       // Build full image path inside /public/images
//       const fullImagePath = `./public/images/${fileName.replace(
//         "-thumbnail",
//         ""
//       )}`;

//       // Preload new image
//       const tempImg = new Image();
//       tempImg.src = fullImagePath;

//       tempImg.onload = () => {
//         // Swap main image src once loaded
//         mainImage.src = fullImagePath;
//         mainImage.alt = thumb.alt;

//         // Hide spinner
//         spinner.classList.add("hidden");
//       };
//       //   mainImage.src = fullImagePath;
//       mainImage.alt = thumb.alt;
//     }

//     // Highlight selected thumbnail
//     thumbnails.forEach((t) =>
//       t.parentElement?.classList.remove("border-(--primary)")
//     );
//     thumb.parentElement?.classList.add("border-(--primary)");
//   });
// });

thumbnails.forEach((thumb) => {
  const img = thumb.querySelector<HTMLImageElement>("img");

  thumb.addEventListener("click", () => {
    if (mainImage && img) {
      const newSrc = img.getAttribute("data-main");
      if (!newSrc) return;

      // Show spinner
      spinner?.classList.remove("hidden");

      // Preload image before replacing
      const tempImg = new Image();
      tempImg.src = newSrc;

      tempImg.onload = () => {
        mainImage.src = newSrc;
        // Hide spinner
        spinner?.classList.add("hidden");
      };
    }

    // Remove active highlight
    thumbnails.forEach((t) =>
      t.classList.remove("border-(--primary)", "opacity-70")
    );

    // Add active highlight
    thumb.classList.add("border-(--primary)", "opacity-70");
  });
});

// ===============================
// Quantity button functionality
// ===============================

// set default quantity to 1
let quantity = 1;

// update UI
function updateQuantity() {
  quantityValue.textContent = quantity.toString();

  // disable the minus button if quantity is 1
  if (quantity <= 1) {
    quantityDecrease.disabled = true;
    quantityDecrease.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    quantityDecrease.disabled = false;
    quantityDecrease.classList.remove("opacity-50", "cursor-not-allowed");
  }
}

// Increase button
quantityIncrease?.addEventListener("click", () => {
  quantity++;
  updateQuantity();
});

// Decrease button
quantityDecrease?.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
});

// initialize
updateQuantity();
