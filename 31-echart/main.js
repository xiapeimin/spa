$(function() {
  console.log('hello world');
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));

  // 指定图表的配置项和数据
  var xData = [],
      my = [1,3,4,5,4,2,1],
      yData = [];
  for(var p=0;p<7;p+=1){
     yData.push(my[p]);
    // if(p === 0 || p === 1){
        xData.push(p);
    // }else{
      //  yData.push(-1*p*Math.log2(p)-(1-p)*Math.log2(1-p));
     //}
     

  }
  var option = {
     title: {
       text: '二进熵函数'
     },
     tooltip: {},
     legend: {
       data:['信息量']
     },
     xAxis: {
       data:xData
     },
     yAxis: {},
       series: [{
          name: '信息量',
          type: 'line',
          smooth:true,
          data: yData
     }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});























