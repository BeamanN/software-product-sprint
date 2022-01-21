google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Fifa World Ranking'],
          ['Belgium', 1783],
          ['France', 1757],
          ['Brazil', 1743],
          ['United Kingdom', 1687],
          ['Portugal', 1666],
          ['Spain', 1648],
          ['Italy', 1642],
          ['Argentina', 1642],
          ['Uruguay', 1639],
          ['Denmark', 1632],
          ['Russia', 1463],
          ['Japan', 1509],
          ['Iran', 1500],
          ['South Korea', 1460],
          ['India', 1184],
          ['China', 1323],
          ['Senegal', 1542],
          ['Tunisia', 1513],
          ['Nigeria', 1487],
          ['Algeria', 1487],
          ['Morroco', 1479],
          ['Egypt', 1433],
          ['Ghana', 1425],
          ['Camerron', 1405],
          ['Ethiopia', 1009],
          ['US', 1555],
          ['Mexico', 1630],
          ['Canada', 1341],
          ['NZ', 1149],
          ['Australia', 1457],
          ['South Africa', 1326],
          ['Somalia', 879],
          ['Madagascar', 1326],
          ['Kenya', 1205],
          ['CD', 1377],




        ]);
        


        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }