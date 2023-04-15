
//(reference from week 10 multiEvent Codealong)

// bar chart 1
Chart.defaults.global.legend.labels.boxWidth = 15;

const data = [[137.8, 111.8, 154.5],[133.4, 112.6, 141],[136.2, 112.6, 142.4]]; //red in the first bracket, green in the second bracket, blue for the third bracket
const uniqueNames = ['Red', 'Green', 'Blue'];
const labels = ['Studio Ghibli','90s Cyberpunk','New Age'];
const fills   = ['rgba(233, 115, 102, 1)', 'rgba(87,223,196, 1)', 'rgba(110,179,225, 1)'];

const datasets = [];
for(let i = 0; i < data.length; i++) {
    datasets.push({
        label: uniqueNames[i],
        data: data[i],
        backgroundColor: fills[i],
    });
}

const charts = [];

charts.push(new Chart("barChart", { type: 'bar',
    data: { labels: labels, datasets: datasets }
}));


// bar chart 2
Chart.defaults.global.legend.labels.boxWidth = 15;

const data2 = [[4134, 3353, 4634],[4001, 3379, 4231],[4001, 3379, 4272]]; //red in the first bracket, green in the second bracket, blue for the third bracket
const uniqueNames2 = ['Red', 'Green', 'Blue'];
const labels2 = ['Studio Ghibli','90s Cyberpunk','New Age'];
const fills2   = ['rgba(233, 115, 102, 1)', 'rgba(87,223,196, 1)', 'rgba(110,179,225, 1)'];

const datasets2 = [];
for(let i = 0; i < data2.length; i++) { // fixed typo here
    datasets2.push({ // pushing to datasets2 instead of datasets
        label: uniqueNames2[i],
        data: data2[i],
        backgroundColor: fills2[i],
    });
}

const charts2 = [];

charts2.push(new Chart("barChart2", { type: 'bar',
    data: { labels: labels2, datasets: datasets2 } // using labels2 and datasets2
}));



// set the dimensions and margins of the graph

//donut 1
var width = 300;
var height = 300;
var margin = 10;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#donutChart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data3 = {a: 10, b: 10, c:10, d:10, e:10};

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data3)
  .range(["rgb(218, 206, 154)", "rgb(227, 203, 175)", "rgb(126, 203, 175)", "rgb(89,5 ,20 )", "rgb(183, 9 ,40 )"]);

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) { return d.value; });
var data_ready = pie(d3.entries(data3));

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(50) // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d) { return color(d.data.key); })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7);


  //donut 2
  var width = 300;
  var height = 300;
  var margin = 10;
  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  var radius = Math.min(width, height) / 2 - margin;
  
  // append the svg object to the div called 'my_dataviz'
  var svg = d3.select("#donutChart2")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Create dummy data
  var data4 = {a: 10, b: 10, c:10, d:10, e:10};
  
  // set the color scale
  var color = d3.scaleOrdinal()
    .domain(data4)
    .range(["rgb(211,196 ,213 )", "rgb(171, 164 , 118)", "rgb(129, 104, 108)", "rgb(154, 40, 40)", "rgb(227, 56, 54)"]);
  
  // Compute the position of each group on the pie:
  var pie = d3.pie()
    .value(function(d) { return d.value; });
  var data_ready = pie(d3.entries(data4));
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
    .selectAll('whatever')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(50) // This is the size of the donut hole
      .outerRadius(radius)
    )
    .attr('fill', function(d) { return color(d.data.key); })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7);

//donut 3
var width = 300;
var height = 300;
var margin = 10;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#donutChart3")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data5 = {a: 10, b: 10, c:10, d:10, e:10};

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data5)
  .range(["rgb(6, 48, 48)", "rgb(33, 88, 88)", "rgb(170, 57, 87)", "rgb(158, 138, 79)", "rgb(247, 233, 226)"]);

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) { return d.value; });
var data_ready = pie(d3.entries(data5));

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(50) // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d) { return color(d.data.key); })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7);
 
