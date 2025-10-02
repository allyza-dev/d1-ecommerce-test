$(document).foundation();

// Announcement Banner
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".announcement-banner-section__track");
  const list = document.querySelector(".announcement-banner-section__list");

  // Clone the list for seamless scroll
  const clone = list.cloneNode(true);
  track.appendChild(clone);
});
