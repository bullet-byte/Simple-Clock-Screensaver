{
  const script = document.createElement("script");
  script.src = "https://assets.gumroad.com/packs/js/overlay-68700ef263b3b37c5bbe.js";
  script.charset = "utf-8";
  document.head.appendChild(script);
    document.head.innerHTML += '<link rel="stylesheet" href="https://assets.gumroad.com/packs/css/overlay-25b06f34.css" />';

    const loaderScript = document.querySelector("script[src*='/js/gumroad.js']");
    loaderScript.dataset.stylesUrl = "https://assets.gumroad.com/packs/css/design-51eede59.css";
}
