$(function(){
  console.log("hello");
  
  $('.lesson .lesson_title').click(function(){
    $(this).next().slideToggle(300);
  })
})
