$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      //$btnCal = $('#calculate'),
      $form = $('form');
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $form.submit(function(e){
    e.preventDefault();
    var w = Number($width.val()),
        h = Number($height.val());

    var p = 2 * (w + h),
        a = w * h;

    $perimeter.val(p);
    $area.val(a);
  });
});

