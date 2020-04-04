$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      //$btnCal = $('#calculate'),
      $form = $('form');
      $perimeter = $('#perimeter'),
      $area = $('#area');
  function i(e, t) {
    return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
  } 

  $form.submit(function(e){
    e.preventDefault();
    var w = Number($width.val()),
        h = Number($height.val());

    var p = i(2 * (w + h),2),
        a = i(w * h,2);

    $perimeter.val(p);
    $area.val(a);
  });
});

