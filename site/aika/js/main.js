$(document).ready(function(){
    $('.header').height($(window).height());
})
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })
$('.carousel').carousel()
$(document).ready(function(){
    $(".preview_block_likes").each(function(){
        var parent_img = "";
        if ($(this).children("a").attr("href")){
            parent_img = $(this).children("a").attr("href");
            $(this).children("img").wrap("<a href='" + parent_img + "'></a>");
        }
    });
});
