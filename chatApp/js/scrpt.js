$(document).ready(function(){
  var box = '.chat-box';
  var btn = '#chat-circle';
  var x = '#chat-close';
  $(btn).click(function(){
    $(box).fadeIn().css('display','block');
    if($(box).css('display','block')){
      $(btn).hide();
    }
  });
$(x).click(function(){
  if($(box).css('display','none')){
    $(btn).show(100);
  }
  });
});
