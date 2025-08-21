"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// images
const mainImage = document.querySelector(".main-image");
const thumbnails = document.querySelectorAll(".thumbnail img");
// quantity controls
const quantityIncrease = document.getElementById("increase");
const quantityDecrease = document.getElementById("decrease");
const quantityValue = document.getElementById("quantity");
// ===============================
// Thumbnail click functionality
// ===============================
thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        if (mainImage) {
            // Extract file name from thumbnail src
            const fileName = thumb.src.split("/").pop() || "";
            // Build full image path inside /public/images
            const fullImagePath = `./public/images/${fileName.replace("-thumbnail", "")}`;
            mainImage.src = fullImagePath;
            mainImage.alt = thumb.alt;
        }
        // Highlight selected thumbnail
        thumbnails.forEach((t) => t.parentElement?.classList.remove("border-(--primary)"));
        thumb.parentElement?.classList.add("border-(--primary)");
    });
});
// thumbnails.forEach((thumb) => {
//   thumb.addEventListener("click", () => {
//     if (mainImage) {
//       mainImage.src = thumb.src;
//       mainImage.alt = thumb.alt;
//     }
//     // Highlight active thumbnail
//     thumbnails.forEach((t) =>
//       t.parentElement?.classList.remove("border-(--primary)")
//     );
//     thumb.parentElement?.classList.add("border-(--primary)");
//   });
// });
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
    }
    else {
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
//# sourceMappingURL=script.js.map