var items = document.getElementsByClassName("faq-item");

for (var i = 0; i < items.length; i++) {
  items[i].onclick = function () {

    if (this.classList.contains("active")) {
      this.classList.remove("active");
      this.querySelector(".icon").innerHTML = "+";
    } else {
      this.classList.add("active");
      this.querySelector(".icon").innerHTML = "-";
    }

  };
}
