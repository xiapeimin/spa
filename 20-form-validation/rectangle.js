$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  
  function i(e, t) {
    return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
  }
 

  $btnCal.click(function(){
    // validate if error return;
    if(!validate('#width') || !validate('#height')) return;

    //get value
    var w = Number($width.val()),
        h = Number($height.val());

    var p = i(2 * (w + h),2),
        a = i(w * h,2);

    $perimeter.val(p);
    $area.val(a);

  });

  $width.focusout(function(){
//    if(validate()) select this
    if(!validate('#width')) $width.select();
  });
  $height.focusout(function(){
    if(!validate('#height')) $height.select();
  });

  function validate(field){
    //get DOM error message
    var $data = $(field),
        $msg = $(field + '-validation-msg');
    console.log($msg);
    // validate null
    if($data.val() === ''){
      $msg.html('不能为空');
      $data.select();
      return false;
    }
    // validate number
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
      $msg.html('必须是数值！');
      $data.select();
      return false;
    }
    // validate > 0
    if(Number($data.val()) < 0){
      $msg.html('必须大于零！');
      $data.select();
      return false;
      
    }
      //prompt error message
      //return false;
    $msg.html('');
    return true;
  }
});
