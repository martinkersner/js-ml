/*
 * http://alignedleft.com/tutorials/d3/axes
 */
function draw(dataset, line) {
  var w = 500;
  var h = 300;
  var padding = 30;

  //Create scale functions
  var xScale = d3.scale.linear()
                       .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                       .range([padding, w - padding * 2]);

  var yScale = d3.scale.linear()
                       .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                       .range([h - padding, padding]);

  var rScale = d3.scale.linear()
                       .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                       .range([2, 5]);

   //Define X axis
  var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom")
                    .ticks(5);

   //Define Y axis
  var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .ticks(5);

   //Create SVG element
  var svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

  //Create circles
  svg.selectAll("circle").data(dataset)
                         .enter()
                         .append("circle")
                         .attr("cx", function(d) {
                            return xScale(d[0]);
                         })
                         .attr("cy", function(d) {
                            return yScale(d[1]);
                         })
                         .attr("r", function(d) {
                            return rScale(10);
                            //return rScale(d[1]);
                         });

      /*
      //Create labels
      svg.selectAll("text")
         .data(dataset)
         .enter()
         .append("text")
         .text(function(d) {
            return d[0] + "," + d[1];
         })
         .attr("x", function(d) {
            return xScale(d[0]);
         })
         .attr("y", function(d) {
            return yScale(d[1]);
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "11px")
         .attr("fill", "red");
        */
      
  //Create X axis
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);
  
  //Create Y axis
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

  svg.append("svg:line")
    .attr("x1", line[0])
    .attr("y1", line[1])
    .attr("x2", line[2])
    .attr("y2", line[3])
    .style("stroke", "rgb(6,120,155)"); 
}
