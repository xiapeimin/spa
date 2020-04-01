var $dlgGoto = (function(){
  var html = ''
    + '<div class="notepad-dlg-goto">'
      +  '<div class="dialogbox">'
        +  '<div class="titlebar">'
          +  '<p class="title">转到指定行</p>'
          +  '<span class="close-btn">X</span>'
        +  '</div>'
        +  '<div class="main">'
           +  ' <label for="">行号(L):</label>'
           +  '<br>'
           +  '<input class="txt-line-num" type="text" autofocus />'
           +  '<br>'
           +  '<input class="btn-goto" type="button" value="转到"/>'
           +  '<input class="btn-cancel" type="button" value="取消"/>'
        +  '</div>'
      +  '</div>'
    +  '</div>';
 
  var $dlg = $(html);
  var cfg = { 
         container:'body',
         num:6,
         title:'同意',
         onclick:null
      },
      num = cfg.num,
      timer;
  var $close = $('.close-btn');
  
  function show(conf){
    //var $dlg = $('<input class="timer-button" type="button" />')
    //var $close = $('.close-btn');
    $(cfg.container).append($dlg);
    $.extend(cfg,conf);

    //$dlg.click(conf.onClick);

    $close.click(function(){ 
       console.log('ll');
       $('.notepad-dlg-goto').css({dispaly:'none'});
    });
  }
  
  return {
    show:show
  }

}());



