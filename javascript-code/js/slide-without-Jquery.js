/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates.
 * and open the template in the editor.
 */
    /**
     * show active slide image has colorful border.
     * no param.
     * @returns {undefined}.
     */
    function show__active__slide__image(){
        //saving screen image.
        var screen__image = document.querySelector("div.slide__image__container > div.screen__image__frame > img"); 
        //saving active image slide.
        var image__slide__active = document.querySelector("div.slide__image__container div.image__slide__active > img");
        //setting active image slide to screen image.
        screen__image.src = image__slide__active.src;
    }   
   
    // show image selected when body load.    
    document.body.onload = show__active__slide__image();
    
    
    // select all image slide in image slide container.
    var image__slide__list = document.querySelector("div.slide__image__container").querySelectorAll("div.image__slide");

    for (i = 0; i < image__slide__list.length; i++) {
        /**
         * registing fucntion for click event.
         * @returns {undefined}.
         */
        image__slide__list[i].onclick = (function() {            
            // removing red bober old image slide selected.
            document.querySelector("div.slide__image__container div.image__slide__active").classList.remove("image__slide__active");
            // adding red border to image slide clicked. 
            this.classList.add("image__slide__active");
            show__active__slide__image();
        });
    }
    
    /**
     * registing function next shape was clicked.
     * @returns {undefined}.
     */
    document.querySelector("div.slide__image__container div.right__arrow").onclick = (function() {
        // saving current active image slide.
        var current__slide__image__active = document.querySelector("div.slide__image__container div.image__slide__active");
        // checking next image slide if it exists.
        if(current__slide__image__active.nextElementSibling){
            // saving image slide list panel.
            var parent_element = current__slide__image__active.parentNode;
            // saving image slide index.
            var index__current__slide__image__active = Array.prototype.indexOf.call(parent_element.children, current__slide__image__active);
            
            // chaning scroll bar position.
            current__slide__image__active.parentNode.scrollLeft=index__current__slide__image__active*current__slide__image__active.offsetWidth;
            // removing active image slide.
            current__slide__image__active.classList.remove("image__slide__active");
            // changing active image slide to next image slide.
            current__slide__image__active.nextElementSibling.classList.add("image__slide__active");
            show__active__slide__image();
        }         
    });
    
    /**
     * registing function previous shape was clicked.
     * @returns {undefined}.
     */
    document.querySelector("div.slide__image__container div.left__arrow").onclick = (function() {
        // saving current active image slide.
        var current__slide__image__active = document.querySelector("div.slide__image__container div.image__slide__active");
        // checking next image slide if it exists.
        if(current__slide__image__active.previousElementSibling){
            // saving image slide list panel.
            var parent_element = current__slide__image__active.parentNode;
            // saving image slide index.
            var index__current__slide__image__active = Array.prototype.indexOf.call(parent_element.children, current__slide__image__active);
        
            // chaning scroll bar position.
            current__slide__image__active.parentNode.scrollLeft=index__current__slide__image__active*current__slide__image__active.offsetWidth-3*current__slide__image__active.offsetWidth;
            // removing active image slide.
            current__slide__image__active.classList.remove("image__slide__active");
            // changing active image slide to previous image slide.
            current__slide__image__active.previousElementSibling.classList.add("image__slide__active");
            show__active__slide__image();
        }         
    });