export default function toggleBookmark(bookmark) {
  bookmark.addEventListener("click", () => {
    bookmark.style.opacity < 1
      ? (bookmark.style.opacity = 1)
      : (bookmark.style.opacity = 0.3);
  });
}
