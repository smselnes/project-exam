const blogsUrl = "https://staalemarius.one/wp-json/wp/v2/posts?_embed&page=";
const blogsContainer = document.querySelector(".main-blogs");
const loadMore = document.querySelector(".more-posts");
const loader = document.querySelector(".loader");
const errorContainer = document.querySelector(".error-container");

let pageCounter = 1;

async function getPosts() {
    try {
        const response = await fetch(blogsUrl + pageCounter);
    const results = await response.json();

    results.forEach(function(blogs) {
        
        loader.style.display = "none";
        
        let media = blogs._embedded["wp:featuredmedia"][0].source_url;
        let date = blogs.date;
        let trimmedDate = date.slice(0,date.length-9);

        blogsContainer.innerHTML += 
        `<div class = "blogs">
            <a href="destination.html?id=${blogs.id}">
                <img src=${media}>
                <h3>${blogs.title.rendered}</h3>
                <p class="blog-date">Blog written: </p>
                <p class="blog-date">${trimmedDate}</p>
            </a>
        </div>`

        loadMore.style.display = "grid";

    });
    } catch(error) {
        console.log(error)
        errorContainer.innerHTML = errorNotification("Error", error);
        errorContainer.style.display = "grid";
      loader.style.display = "none";
    }
    
    }
getPosts();


loadMore.onclick = function() {
    pageCounter++
    loadMore.style.marginTop = "100px";

    const informer = document.querySelector(".informer");

    if(pageCounter >= 2) {
    loadMore.disabled = "true";
    informer.innerHTML = "No more pages to load";
} else { 
    loadMore.disabled = "false";
}
    getPosts();
} 

