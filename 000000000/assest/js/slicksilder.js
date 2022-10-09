let menuicon = document.querySelector('.toggle');
menuicon.onclick = function () {
  menuicon.classList.toggle('active');
  let navmobile = document.querySelector('.nav-mobile');
  navmobile.classList.toggle('active');
}




// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += 1);
// }

// function showDivs(n) {
//     var slides = document.getElementsByClassName("img2");
//     console.log(slides.length, n);
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (var i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }
// setInterval(plusDivs, 400)




var slider = tns({
  container: '.my-slider',
  items: 1,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2
    },
    700: {
      gutter: 30
    },
    900: {
      items: 5
    }
  }
});

