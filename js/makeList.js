// Make a list with art
export function makeList(data) {
    console.log(data.artObjects);
    const artList = data.artObjects;
    var i = 0;
    const ul = document.querySelector("ul")
    ul.innerHTML = '';
    for (var key in artList) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        ul.appendChild(li);
        const amounth = -100 * i;
        // console.log(amounth);
        li.style.bottom = amounth+'vh';
        if(data.artObjects[key].webImage){
        img.src = data.artObjects[key].webImage.url.slice(0, -3)+"=s3000";
        }
        li.appendChild(img);
        const title = document.createElement("h1");
        li.appendChild(title);
        title.innerHTML = data.artObjects[key].title;
        i++;
    }
}