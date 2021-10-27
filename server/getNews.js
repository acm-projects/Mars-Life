const fetch = require("cross-fetch");

let NEWS_API = "https://api.spaceflightnewsapi.net/v3/articles";

function getNews(){
    let data1 = []
    fetch(NEWS_API)
      .then(res => res.json())
      .then(data => {
          for(var i=0; i < data.length; i++){
              data[i] = {
                  title: data[i].title,
                  summary: data[i].summary,
                  date: data[i].publishedAt,
                  url: data[i].url,
                  img_url: data[i].imageUrl,
              }
          }
          data1.push(data);
      })
    return data1;
}

module.exports.getNews = getNews;
