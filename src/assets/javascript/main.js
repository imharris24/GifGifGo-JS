document.querySelector("button").addEventListener('click', () => {

    let input = document.querySelector("input").value;

    let url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=X21mpSOykjswkRD7fetIw8Mj00fH0OaT";

    let GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send()

    GiphyAJAXCall.addEventListener('load', (e) => {
        let data = e.target.response;
        let response = JSON.parse(data);
        let imageUrls = response.data;
    
        let container = document.querySelector(".gif-container");
        container.innerHTML = ' ';

        imageUrls.forEach((image) => {
            let src = image.images.fixed_height.url;
            container.innerHTML += "<img src=\"" + src + "\" class=\"image-container\">";
        });
    });
});

    
