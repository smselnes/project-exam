const url = "https://staalemarius.one/wp-json/wp/v2/posts?_embed&per_page=4&page="; 
const nextPosts = document.querySelector(".next-post");
const previousPosts = document.querySelector(".previous-post");
const loader = document.querySelector(".loader");
const errorContainer = document.querySelector(".error-container");

let carousel = document.querySelector(".carousel");
let pageCounter = 1;

async function getUrl() {
   try {
const response = await fetch(url + pageCounter);
const json = await response.json();

json.forEach(function(destinations) {    


  loader.style.display = "none";

   let date = destinations.date;
   let trimmedDate = date.slice(0,date.length-9);

carousel.innerHTML += 
`<div class="slider">
      <a href="destination.html?id=${destinations.id}">
         <img src=${destinations._embedded["wp:featuredmedia"][0].source_url}>
          <h3>${destinations.title.rendered}</h3>
         <p class="blog-date">Blog written: </p>
         <p class="blog-date">${trimmedDate}</p>
      </a>
   </div>`; 
}) ;

   } catch(error) {
      console.log(error);
      errorContainer.innerHTML = errorNotification("Error", error);
      errorContainer.style.display = "grid";
      loader.style.display = "none";
   }
}
getUrl();

/* JavaScript for the arrows on main page */
const noMorePosts = document.querySelector(".no-previous-posts");

previousPosts.addEventListener("click", () => {
   if (pageCounter === 1) {
      previousPosts.disabled = true
      noMorePosts.innerHTML = "<p>No previous posts to show</p>";
   } else {
      carousel.innerHTML ="";
      pageCounter--;
       getUrl(); 
      previousPosts.disabled = false;
      nextPosts.disabled = false;
   }
})

nextPosts.addEventListener("click", () => {
  pageCounter++; 
  carousel.innerHTML= "";

   if(pageCounter === 2) {
      previousPosts.disabled = false;
      noMorePosts.innerHTML = "";
      nextPosts.disabled = false;
         }  else if(pageCounter === 3) {
            nextPosts.disabled = true;
         } else {
            nextPosts.disabled = false;
         }
   getUrl(); 
})