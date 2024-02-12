var activeButton = null;

function switchLanguage(event, lang) {
  var elements = document.querySelectorAll("[lang]");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute("lang") == lang) {
      elements[i].style.display = "block";
    } else {
      elements[i].style.display = "none";
    }
  }

  if (activeButton) {
    activeButton.style.background = "#404242";
    activeButton.style.border = "0px solid #00FFFF";
  }

  event.target.style.background = "#28292a";
  event.target.style.border = "1px solid #FFFFFF";

  activeButton = event.target;
}

document.addEventListener("DOMContentLoaded", function () {
  var initialButton = document.querySelector("button");
  switchLanguage({ target: initialButton }, "en");
});
