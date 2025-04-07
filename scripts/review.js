const spanReviewCount = document.querySelector("#reviewCount");

const reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;

spanReviewCount.textContent = reviewCount;