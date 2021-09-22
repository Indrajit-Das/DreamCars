/**
 * Created by IP DAS on 12/4/2016.
 */


//this code is for control the video in video tag//
$(function(){
    $("video").on('mouseenter',function(){
        if(this.pause) this.play();
    });

    $('video').on('mouseleave',function(){
        if(this.play) this.pause();
    });

});