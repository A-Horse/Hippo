(function(window, $){


    var imageShowNumber = 3;

    var showImageQueue = [];

    var showImage = function(url){
        
    };

    var initShowImage = function(urls){
        var $container = $('.image-show-container');
        urls.map(function(url){
            var $image = $('<img src="' + url + '"/>');
            showImageQueue.push($image);
            $container.append($image);
        });
        
    };
    
    
    $.get('/root').then((data) => {
        var htmlFrame = '';
        var urls= data.images.map(function(imageName){
            var url = '/images/' + imageName;
            htmlFrame += '<img class="preview-img" src="' + url + '"/>';
            return url;
        });
        $('.preview-container').html(htmlFrame);

        initShowImage(urls.slice(0, imageShowNumber));        
    });

    

    
    
    
})(window, jQuery);
 
