let requestURL = 'https://parkerroseburck.github.io/JS-Lab8/products.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    let products = request.response;
    console.log(products);
    topDeals(products);
};

let section = document.querySelector('section');

function topDeals(jsonObj){
    let topDeals = jsonObj['topDeals'];
    for(let i = 0; i < topDeals.length; i++){
        let article = document.createElement('article');
        let nameH1 = document.createElement('h1');
        let priceH3 = document.createElement('h3');
        let descriptionPara = document.createElement('p');
        let featuresList = document.createElement('ul');
        let img = document.createElement('img');

        img.setAttribute('src', 'images/' + topDeals[i].image);
        nameH1.textContent = topDeals[i].name;
        priceH3.textContent = "$" + topDeals[i].price;
        descriptionPara.textContent = topDeals[i].description;

        for(let r = 0; r < topDeals[i].features.length; r++){
            let featureListItem = document.createElement('li');
            featureListItem.textContent = topDeals[i].features[r];
            featuresList.appendChild(featureListItem);
        }
        article.appendChild(nameH1);
        article.appendChild(priceH3);
        article.appendChild(descriptionPara);
        article.appendChild(featuresList);
        article.appendChild(img);
        section.appendChild(article);
    }
}