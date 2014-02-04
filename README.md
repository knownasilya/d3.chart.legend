d3.chart.legend
============

Legend "chart" for mixin with other charts. 

[![Dependencies](https://david-dm.org/knownasilya/d3.chart.pie.png)](https://david-dm.org/knownasilya/d3.chart.pie)  
[![Gitter chat](https://badges.gitter.im/knownasilya/d3.chart.legend.png)](https://gitter.im/knownasilya/d3.chart.legend)

## Usage

```js
  // Appends the chart to an 'svg' element.
  var legend = d3.select('body')
    .append('svg')
    .height(350)
    .width(400)
    .chart('Legend');

  // Draws legend once you add data.
  legend.draw([
    {
      label: 'my label',
      value: 3
    }, {
      label: 'your label',
      value: 0.5
    }, {
      label: 'other label',
      value: 1
    }
  ]);
```

### Available Options

* `x` - `int|float` (optional) defaults to `0`
* `y` - `int|float` (optional) defaults to `0`
* `markerRadius` - `int` (optional) defaults to `5`. This is the radius of the legend 'icons'.
* `colors` - `array` (optional) valid d3 colors, defaults to `d3.scale.category20()`
* `title` - `string` (optional) The title of the legend.

## Contributing

See the following links:

1. [d3.chart quickstart][1]
2. [d3.chart API reference][2]
3. [d3 API][3]

[1]: https://github.com/misoproject/d3.chart/wiki/quickstart
[2]: http://misoproject.com/d3-chart/api.html
[3]: https://github.com/mbostock/d3/wiki/API-Reference
