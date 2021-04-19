$(function(){
    $('.depth1>li').on('mouseenter',function(){
        $(this).children('.depth2').show();
        if($(this).children('.depth2').length>0){
            $('.topMenubg').show();    
        }
        console.log($(this).children('.depth2'));
    })
    
    $('.depth1>li').on('mouseleave',function(){
        $(this).children('.depth2').hide();
        $('.topMenubg').hide();
    })
    
    
});