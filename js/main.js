$(function() {
    'use strict';
    //initiate wow.js
    new WOW().init();
    //define variables
    var mask = $('.mask'),
        sidebar = $('.sidebar'),
        //the button that triggers sidebar
        sidebar_trigger = $('#sidebar_trigger'),
        back_button = $('.back-to-top'),
        //three buttons that scroll to the first section
        down_btn_1 = $('.fa-angle-down,#main-btn,.about-me'),
        down_btn_2 = $('.first-project'),
        down_btn_3 = $('.second-project'),
        down_btn_4 = $('.why-me'),
        down_btn_5 = $('.skill-set');


    sidebar_trigger.on('click', showSideBar);
    mask.on('click', hideSideBar);
    back_button.on('click',backTop);
    //scroll to each section
    down_btn_1.click(function(){
        scrollToDiv('#section1')
    });
    down_btn_2.click(function(){
        scrollToDiv('#section2')
    });
    down_btn_3.click(function(){
        scrollToDiv('#section3')
    });
    down_btn_4.click(function(){
        scrollToDiv('#section4')
    });
    down_btn_5.click(function(){
        scrollToDiv('#section5')
    });

    //trigger sidebar
    function showSideBar() {
        mask.fadeIn();
        sidebar.animate({
            right: 0
        }, 500);
        return false
    }
    //hide sidebar
    function hideSideBar() {
        mask.fadeOut();
        sidebar.animate({
            right: "-300px"
        }, 500);
        return false
    }
    //scroll to top
    function backTop(){
        $('html,body').animate({
            scrollTop:0
        },800)
    }
    //scroll to the corresponding section
    function scrollToDiv(id){
        $('html,body').animate({
            scrollTop:$(id).offset().top
        },500);
        hideSideBar();
        return false
    }
    //detect scroll to hide button
    $(window).on('scroll',function(){
        if($(window).scrollTop() > $(window).height()) {
            back_button.fadeIn();
        }
        else{
            back_button.fadeOut();
        }
    });
    //automatically trigger the scroll event when page loaded
    $(window).trigger('scroll');
});

