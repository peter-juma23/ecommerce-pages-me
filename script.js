 const bar = document.getElementById("bar");
 const close = document.getElementById("close");
 const nav = document.getElementById("navbar");
  if (bar) {
    bar.addEventListener("click",() =>{
      nav.classList.add("active");
    })
  }
    if (close) {
    close.addEventListener("click",() =>{
      nav.classList.remove("active");
    })
  }

  var Mainimage =  document.getElementById('main-image');
  var smallimg = document.getElementsByClassName('small-img');

  smallimg[0].onclick = function() {
    Mainimage.src = smallimg[0].src;
  }
    smallimg[1].onclick =function() {
    Mainimage.src = smallimg[1].src;
    }
    smallimg[2].onclick = function(){
    Mainimage.src = smallimg[2].src;
  }
    smallimg[3].onclick =function () {
    Mainimage.src = smallimg[3].src;
  }

  function toggleReadMore(id, btn) {
  const content = document.getElementById(id);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    btn.textContent = "Show less";
  } else {
    content.style.display = "none";
    btn.textContent = "Read more";
  }
}
