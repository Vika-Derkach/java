// $('#btn')
// // document.getElementById('btn');- в js
$(document).ready(function() {
    $('.list-item:first').hover(function() {
       $(this).toggleClass('active');
    });
  //за допомогою eq(n) можемо получити елемент из списка
    $('.list-item:eq(2)').on('click', function(){
      $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function(){
       $('.image:odd').animate( 
           {
              opacity:'toggle',
              height: 'toggle'
           }, 3000 )
    });
});