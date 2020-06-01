google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawRevenueChart);
google.charts.setOnLoadCallback(drawExpensesChart);


function drawRevenueChart() {

 var data = google.visualization.arrayToDataTable([
   ['Revenue Source', 'Dollars'],
   ['Durham County (event support)', 190845],
   ['City of Durham (event support)', 124822],
   ['DCVB (marketing & operations)', 377797],
   ['Encumbered Funds FY16-17', 187875],
   ['Event Revenue', 5995]
 ]);

 var formatter = new google.visualization.NumberFormat(
    {prefix: '$', fractionDigits: 0});

 formatter.format(data, 1);

 var options_small = {
   title: 'REVENUE',
   pieHole: 0.4,
   pieSliceText: 'value',
   backgroundColor: 'transparent',
   fontName: 'Lato',
   titleTextStyle: { fontName: 'Montserrat', bold: true, fontSize: 16 , color: '#262626'},
   legend: {position: 'bottom', textStyle: {color: '#262626'}},
   chartArea: {width: '90%'},
   colors: ['#3D6CCC','#CC4F33','#FFA826','#439649','#8C3D8C','#3DA3CC'],
 };

 var options_large = {
   title: 'REVENUE',
   pieHole: 0.4,
   pieSliceText: 'value',
   backgroundColor: 'transparent',
   fontName: 'Lato',
   titleTextStyle: { fontName: 'Montserrat', bold: true, fontSize: 18, color: '#262626'},
   legend: {position: 'right', textStyle: {color: '#262626'}},
   chartArea: {width: '90%'},
   colors: ['#3D6CCC','#CC4F33','#FFA826','#439649','#8C3D8C','#3DA3CC'],
 };

 var chart = new google.visualization.PieChart(document.getElementById('revenue-chart'));

  if ($(window).width() < 800) {
    chart.draw(data, options_small);
  } else {
    chart.draw(data, options_large);
  };
}

function drawExpensesChart() {

 var data = google.visualization.arrayToDataTable([
   ['Expense', 'Dollars'],
   ['Facilities Rentals', 16054],
   ['Grants & Bids', 260131],
   ['Facility Research', 21504],
   ['Staffing & Operations', 239432],
   ['Marketing & Promotion', 111971],
   ['Sales & Services', 67299],
   ['Encumbered for future events', 211728]
 ]);

 var formatter = new google.visualization.NumberFormat(
    {prefix: '$', fractionDigits: 0});

 formatter.format(data, 1);

 var options_small = {
   title: 'EXPENSES',
   pieHole: 0.4,
   pieSliceText: 'value',
   backgroundColor: 'transparent',
   fontName: 'Lato',
   titleTextStyle: { fontName: 'Montserrat', bold: true, fontSize: 16 , color: '#262626'},
   legend: {position: 'bottom', textStyle: {color: '#262626'}},
   chartArea: {width: '90%'},
   slices: { 0: {offset: 0}
   },
   colors: ['#3D6CCC','#CC4F33','#FFA826','#439649','#8C3D8C','#3DA3CC','#9e1c33'],
 };

 var options_large = {
   title: 'EXPENSES',
   pieHole: 0.4,
   pieSliceText: 'value',
   backgroundColor: 'transparent',
   fontName: 'Lato',
   titleTextStyle: { fontName: 'Montserrat', bold: true, fontSize: 18, color: '#262626'},
   legend: {position: 'right', textStyle: {color: '#262626'}},
   chartArea: {width: '90%'},
   slices: { 0: {offset: 0}
   },
   colors: ['#3D6CCC','#CC4F33','#FFA826','#439649','#8C3D8C','#3DA3CC','#9e1c33'],
 };

 var chart = new google.visualization.PieChart(document.getElementById('expenses-chart'));

 if ($(window).width() < 800) {
   chart.draw(data, options_small);
 } else {
   chart.draw(data, options_large);
 };
}
