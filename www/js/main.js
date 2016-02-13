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

    var startX, startY, x, y, x2, y2, timeout;
    $('.preview-container').on('mousedown', function(event){
        event.preventDefault();
        startX = x = x2 = event.pageX;
        startY = y = y2 = event.pageY;

        $(document).on('mousemove', mousemove);
        $(document).on('mouseup', mouseup);

        timeout = setInterval(function(){
            //var distance = Math.sqrt((x2 - x) * (x2 -x) + (y2 - y) * (y2 - y));
            var xDistance = x2 - x;
        }, 50);
    });

    var mousemove = function(event){
        x = x2;
        x2 = event.pageX;
        y = y2;
        y2 = event.pageY;
    };

    var mouseup = function(event){
        $(document).off('mousemove', mousemove);
        $(document).off('mouseup', mouseup);

        clearInterval(timeout);
    };
    
})(window, jQuery);
 
