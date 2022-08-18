firstImage = document.getElementById("img1");
secondImage = document.getElementById("img2");

//Function to enlarge image
function viewImage(){
    firstImage.style.transform = "scale(1.5)";
    firstImage.style.transition ="transform 0.25s ease";
}

//Function to reset image size
      function resetImg() {
        // Set image size to original
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
      }