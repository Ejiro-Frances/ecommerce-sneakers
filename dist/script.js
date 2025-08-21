// images
var mainImage = document.querySelector(".main-image");
var thumbnails = document.querySelectorAll(".thumbnail img");
console.log(mainImage);
console.log(thumbnails);
// quantity controls
var quantityIncrease = document.getElementById("increase");
var quantityDecrease = document.getElementById("decrease");
var quantityValue = document.getElementById("quantity");
// ===============================
// Thumbnail click functionality
// ===============================
thumbnails.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
        var _a;
        if (mainImage) {
            // Extract file name from thumbnail src
            var fileName = thumb.src.split("/").pop() || "";
            // Build full image path inside /public/images
            var fullImagePath = "./public/images/".concat(fileName.replace("-thumbnail", ""));
            mainImage.src = fullImagePath;
            mainImage.alt = thumb.alt;
        }
        // Highlight selected thumbnail
        thumbnails.forEach(function (t) { var _a; return (_a = t.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("border-(--primary)"); });
        (_a = thumb.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("border-(--primary)");
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
var quantity = 1;
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
quantityIncrease === null || quantityIncrease === void 0 ? void 0 : quantityIncrease.addEventListener("click", function () {
    quantity++;
    updateQuantity();
});
// Decrease button
quantityDecrease === null || quantityDecrease === void 0 ? void 0 : quantityDecrease.addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
});
// initialize
updateQuantity();
