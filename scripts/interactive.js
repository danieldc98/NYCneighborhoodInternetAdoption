// create SVG element

var svg = d3.select("div#plot")
    .append("svg")
    .attr("width", "400")
    .attr("height", "400");

svg.append("rect")
    .attr("x", "0")
    .attr("y", "0")
    .attr("width", "400")
    .attr("height", "400")
    .attr("fill", "green");

svg.append("rect")
    .attr("x", "0")
    .attr("y", "0")
    .attr("width", "100")
    .attr("height", "100")
    .attr("fill", "blue");

d3.selectAll("p")
    .on("click", function () {
      const paraID = d3.select(this).attr("id");
      if (paraID == "add") {
          const newvalue = Math.floor(Math.random()*400);
          bardata.push(newvalue);
          } else if (paraID == "remove_left") {
          bardata.shift();
          } else {
          bardata.pop();
          };
      update(bardata);
      });