var stopSlideShow = false;
function slideshow(caller){
    var status = $(caller).attr('value');
        if(status.indexOf('Start') > -1){
            stopSlideShow = false;
            $(caller).attr('value','Stop Slideshow');
      }else{
            stopSlideShow = true;
            $(caller).attr('value','Start Slideshow');
      }
      var interval = setInterval(function(){
        if(!stopSlideShow){
            changeSlider('next'); 
        }
        else
            clearInterval(interval)
    }, 2000)
}

function changeSlider(direction){
    var currentImg = $(".active");
    var nextImg = currentImg.next();
    var previousImg = currentImg.prev();

    if(direction == 'next'){
        if(nextImg.length)
            nextImg.addClass('active');
        else

          $('.slider img').first().addClass('active')

       }else{
        if(previousImg.length)
        previousImg.addClass('active');
    else

      $('.slider img').last().addClass('active')

     }
    currentImg.removeClass('active');
}

