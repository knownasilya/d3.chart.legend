(function() {
  var data = [
    { label: 'one', value: 2 },
    { label: 'two', value: 5 },
    { label: 'three', value: 1.5 },
    { label: 'other', value: 1 }
  ],
  data2 = ['one', 'two', 'five'],
  legend;

  legend = d3.select('#legend')
    .append('svg')
      .attr('width', 450)
      .attr('height', 300)
      .chart('Legend', {
        x: 20,
        y: 20,
//        title: 'Example'
      });

  legend.draw(data);
}());
