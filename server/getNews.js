const fetch = require("cross-fetch");

let NEWS_API = "https://api.spaceflightnewsapi.net/v3/articles";

function getNews(){
    return fetch(NEWS_API)
      .then(res => res.json())
      .then(data => {
          let articlesList = {};
          for(var i=0; i < data.length; i++){
              const article = {
                  title: data[i].title,
                  summary: data[i].summary,
                  date: data[i].publishedAt,
                  url: data[i].url,
                  img_url: data[i].imageUrl,
              }
              articlesList[i]= article;
          }
          return articlesList;
      })
}

module.exports.getNews = getNews;
