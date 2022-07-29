$(function () {
    

    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            $('.hd').addClass('on')
            $('nav').css('display', 'none')
        } else {
            $('.hd').removeClass('on')
            $('nav').css('display', 'block')
        }
    })

    if ($(window).width() > 790) {
        $('.ham').click(function () {
            $('.hd.on').removeClass('on')
            $('nav').css('display', 'block')
        })
    } else {
        $('.ham').click(function () {
            $('.hd.on').removeClass('on')
            $('nav').slideToggle()
        })
    }


    $('.gnb>li').click(function () {
        $(this).find('.sub').slideToggle()
    })
    $(window).resize(function () {
        let winWid = $(window).width();
        if (winWid > 790) {
            $('.hd.on').removeClass('on')
            $('nav').css('display', 'block')
            $('.sub').css('display', 'flex')
        } else {
            $('nav').css('display', 'none')
            $('.sub').css('display', 'none')
        }
    })
    $('.ip_box3 button').click(function () {
        $(this).toggleClass('on')
    })
    $('.ip_box4 button').click(function () {
        $(this).toggleClass('on')
    })
    
   $('.sec3_tab>a').click(function(){
    let idx = $(this).index();
    $('.sec3_tab>a').removeClass('on')
    $(this).addClass('on')
    $('.sec3 .tab_con').removeClass('on')
    $('.sec3 .tab_con').eq(idx).addClass('on')
   })
   $('.sec4_tab>a').click(function(){
    let idx = $(this).index();
    $('.sec4_tab>a').removeClass('on')
    $(this).addClass('on')
    $('.sec4 .tab_con').removeClass('on')
    $('.sec4 .tab_con').eq(idx).addClass('on')
   })
   $('.sec5_tab>a').click(function(){
    let idx = $(this).index();
    $('.sec5_tab>a').removeClass('on')
    $(this).addClass('on')
    $('.sec5 .tab_con').removeClass('on')
    $('.sec5 .tab_con').eq(idx).addClass('on')
   })
   $('.sec6_tab>a').click(function(){
    let idx = $(this).index();
    $('.sec6_tab>a').removeClass('on')
    $(this).addClass('on')
    $('.sec6 .tab_con').removeClass('on')
    $('.sec6 .tab_con').eq(idx).addClass('on')
   })
})