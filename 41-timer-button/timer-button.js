//构造函数 封装方式
function TimerButton(){
  var $btn = $('<input type="button" class="timer-button" disabled/>');
  var num  = 6,
      cfg = { //默认参数
         container:'body',
         num:6,
         title:'同意',
         onclick:null
      },
      num = cfg.num,
      timer;
 
  this.show = function(conf){
    $(conf.container).append($btn);
    $.extend(cfg,conf);

    $btn.val(cfg.title+"("+cfg.num+"s)");
    
    timer = setInterval(function(){
       num--;
       $btn.val(cfg.title+"("+num+'s）');
       if(num == 0){
          clearInterval(timer);
          $btn.val(cfg.title);
          $btn.removeAttr('disabled');
       }
    },1000);
    $btn.click(conf.onClick);

  
   }
}


/*
 * 工厂函数 封装方式
var $timerButton = (function(){
  //var html = '<input type="button" class="timer-button" value="同意（6s）"/>';
  //var $btn = $('<input type="button" class="timer-button" disabled/>');
  var num  = 6,
      cfg = { //默认参数
         container:'body',
         num:6,
         title:'同意',
         onclick:null
      },
      num = cfg.num,
      timer;
  //$btn.css({height:'50px',width:'200px'});

  function show(conf){
    //1.dom draw
    //$(container).html(html);
    var $btn = $('<input type="button" class="timer-button" disabled/>');

    var num  = 6,
      cfg = { //默认参数
         container:'body',
         num:6,
         title:'同意',
         onclick:null
    },
    num = cfg.num,
    timer;


    $(conf.container).append($btn);
    $.extend(cfg,conf);

    $btn.val(cfg.title+"("+cfg.num+"s)");
    
    timer = setInterval(function(){
       num--;
       $btn.val(cfg.title+"("+num+'s）');
       if(num == 0){
          clearInterval(timer);
          $btn.val(cfg.title);
          $btn.removeAttr('disabled');
       }
    },1000);
    $btn.click(conf.onClick);
    //$btn.click(function(){
      //alert('就知道你会同意的！');
    //});

  }
  
  
  //$btn.onclick(function(){//回调机制  封装按钮 按钮行为 作为参数
    // cfg.onClick();
  //});
  

  return {
    show:show
  }

}());*/

/**
 * 全局对象封装方式
 * var timerButton = {
 *   show:function(){
 *     ...
 *   }
 * }
 *
 */





