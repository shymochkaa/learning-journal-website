const viewMoreBtn = document.querySelector("#view-more-btn");
const hiddenPosts = document.querySelectorAll(".hidden");

viewMoreBtn.addEventListener("click", () => {
  hiddenPosts.forEach((post, index) => {
    if (index < 3) {
      post.classList.toggle("hidden");
    }
  });

  const remainingHiddenPosts = document.querySelectorAll(".hidden");

  if (remainingHiddenPosts.length > 0) {
    viewMoreBtn.textContent = "View more";
  } else {
    viewMoreBtn.textContent = "View less";
  }
});

const heroContainer = document.querySelector("#hero-container");

heroContainer.addEventListener("click", () => {
  window.location.href = "post-0.html";
});
