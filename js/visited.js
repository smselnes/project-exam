const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");
const loader = document.querySelector(".loader");
const url = "https://staalemarius.one/wp-json/wp/v2/posts/" + id +"?_embed";
const container = document.querySelector(".container");
const errorContainer = document.querySelector(".error-container");


async function getUrl() {
    try {
        const response = await fetch(url);
        const json = await response.json();
 
        loader.style.display = "none";
        container.innerHTML = `<h1>${json.title.rendered}</h1>
                                    <div>${json.content.rendered}</div>`;

        const newTitle = `${json.title.rendered}`;
        document.title = "Selnes Travel Blog | " + newTitle;

} catch(error) {
        console.log(error);
        errorContainer.innerHTML = errorNotification("Error", error);
        errorContainer.style.display = "grid";
        loader.style.display = "none";
    }
//Image modal codes
    let modalImg = document.querySelectorAll("figure img");
    const modalContainer = document.querySelector(".modal-container");
  
        modalImg.forEach (function(images, i)  {
            let image = modalImg[i];

            image.addEventListener("click", function() {
                image.classList.add("modal");
                modalContainer.style.display = "block";
  
  })
  //Closing the modal
modalContainer.addEventListener("click", closeModal);
    function closeModal() {
      modalContainer.style.display = "none";
      image.classList.remove("modal");
  }
  
  })
  }
  getUrl();  









