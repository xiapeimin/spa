$(function(){
  //console.log('hello')
  var $range = $('#range'),
      $age   = $('#age');
$range.change(function(){
 $age.html($range.val());
});
})
