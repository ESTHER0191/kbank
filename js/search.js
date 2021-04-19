$(function(){
    $('.btnSearch').on('click',function(){
        $('#searchBox').css({'visibility': 'visible'});
    }); //btnSearch 클릭할 때 function(){실행할 것, searchBox를 visible로}

    $('.btnClose').on('click',function(){
       $('#searchBox').css({'visibility':'hidden'}); 
    }); //btnClose 클릭할 때 function(){실행할 것, searchBox를 hidden으로}
    
    $('#searchBox li').on('click',function(){
        $(this).addClass('act'); //searchBox li클릭 시 class="act"추가해줄 거임
        $(this).siblings().removeClass('act'); //나말고 다른 형제는 class="act"제거해줄 거임
        
        var idx = $(this).index(); //idx에 내거 index숫자 담을거임
        
        $('[class^=tabCon]').hide(); //처음엔 다 가릴거임
        $('[class^=tabCon]').eq(idx).show(); //클래스가 tabCon으로 시작하는 속성은 idx에 나오는 숫자가 참조해서 불러오는 요소를 보여줄거다 
    });
    
    
});