const API_KEY = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();  //onclick logo
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`); //url for data in string form
    const data = await res.json();  //data in string form to JSON from
    bindData(data.articles);    //for using JSON data in our Front end
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");     //main container
    const newsCardTemplate = document.getElementById("template-news-card"); // boxes in main container

    cardsContainer.innerHTML = ""; // to clear every box after evry reload otherwise there will be unnecessary duplication 

    articles.forEach((article) => {  //to access each and every element of JSON data
        if (!article.urlToImage) return;  //if no image then there will be no output for that artical in our webpage 
            //else create div and paste information available in json
        const cardClone = newsCardTemplate.content.cloneNode(true); 
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    //variable of id where related json data will be saved and displayed
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;

    //inserting data in variables;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    
    //for specially inserting artical date in variable
    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    // provides url which will direct to the main news artical on clicking to that perticullar element
    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}