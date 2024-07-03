const moreContent = document.getElementById("moreContent");
const content = document.getElementById("content")

moreContent.addEventListener('click', function() {
   if ( content.style.display === "none") {
        content.style.display = "block";
        moreContent.textContent = "Hide prodjects";
    } else { 
        content.style.display = "none";
        }
} )


