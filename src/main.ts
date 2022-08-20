document.addEventListener("DOMContentLoaded", function () {
  const sky = document.querySelector("a-sky");
  const src = new URLSearchParams(window.location.search).get("src");
  if (sky && src) {
    sky.setAttribute("src", src);
  }
});

export {};
