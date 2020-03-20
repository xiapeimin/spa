$(function(){
  var $btn = $('input'),
      num  = 6,
      timer;
  timer = setInterval(function(){
    num--;
    $btn.val('同意（'+num+'s）');
    if(num == 0){
      clearInterval(timer);
      $btn.val('同意');
      $btn.removeAttr('disabled');
    }
  },1000);
  $btn.click(function(){
    alert('就知道你会同意的！');
  })
});
