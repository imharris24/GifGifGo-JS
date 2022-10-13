document.querySelector("button").addEventListener('click', function() {
    var input = document.querySelector("input").value;

    var api_key = "X21mpSOykjswkRD7fetIw8Mj00fH0OaT";
    var api_url = "http://api.giphy.com/v1/gifs/search?";  

    var url = api_url + "q=" + input + "&api_key=" + api_key;

    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send()

    GiphyAJAXCall.addEventListener('load', function(e){
        var data = e.target.response;
        var response = JSON.parse(data);
    var imageUrls = response.data;
    
    var container = document.querySelector(".gif-container");
    container.innerHTML = ' ';

    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;
        container.innerHTML += "<img src=\"" + src + "\" class=\"image-container\">";
    });
    });
});

    