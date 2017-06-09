/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates.
 * and open the template in the editor.
 */
$(function(){
    function show__active__slide__image(){
        //saving screen image.
        var image__slide__active = $("div.slide__image__container div.image__slide__active > img");
        //saving active image slide.
        var screen__image = $("div.slide__image__container > div.screen__image__frame > img");
        //setting active image slide to screen image.
        screen__image.attr("src",image__slide__active.attr("src"));
    }
    
    // show image selected when body load.
    $('body').on("load",show__active__slide__image());
    
    
    /**
     * fucntion for image slide's click event.
     * @returns {undefined}.
     */
    $("div.slide__image__container div.image__slide").on("click",function(){
        // removing red bober old image slide selected.
        $("div.slide__image__container div.image__slide__active").removeClass("image__slide__active");
        // adding red border to image slide clicked.
        $(this).addClass("image__slide__active");
        show__active__slide__image();
    });
    
    /**
     * fucntion for next shape's click event.
     * @returns {undefined}.
     */
    $("div.slide__image__container div.right__arrow").on("click",function(){
        // saving current active image slide.
        var current__slide__image__active = $("div.slide__image__container div.image__slide__active");
        // checking next image slide if it exists.
        if(current__slide__image__active.index() < current__slide__image__active.parent().children().length-1){
            // chaning scroll bar position.
            current__slide__image__active.parent().scrollLeft(current__slide__image__active.index() * current__slide__image__active.width());
            // removing active image slide.
            current__slide__image__active.removeClass("image__slide__active");
            // changing active image slide to next image slide.
            current__slide__image__active.next().addClass("image__slide__active");
            show__active__slide__image();
        }
        
    });
    
    /**
     * fucntion for next shape's click event.
     * @returns {undefined.
     */
    $("div.slide__image__container div.left__arrow").on("click",function(){
        // saving current active image slide.
        var current__slide__image__active = $("div.slide__image__container div.image__slide__active");
        // checking next image slide if it exists.
        if(current__slide__image__active.index()>0){
            // chaning scroll bar position.
            current__slide__image__active.parent().scrollLeft(current__slide__image__active.index() * current__slide__image__active.width()-3*current__slide__image__active.width());
            // removing active image slide.
            current__slide__image__active.removeClass("image__slide__active");
            // changing active image slide to previous image slide.
            current__slide__image__active.prev().addClass("image__slide__active");
            show__active__slide__image();
        }
    });
});


