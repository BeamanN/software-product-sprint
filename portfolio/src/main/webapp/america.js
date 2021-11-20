google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['State','Population Vaccinated','Percent of Population Vaccinated'],
          ["US-AL", 1617584,32.99],
          ["US-AK", 322988,44.15],
            ["US-AZ", 372380,43.58],
            ["US-AR", 1043217,34.57],
            ["US-CA", 19949682,50.49],
            ["US-CO", 3018088,52.41],
            ["US-CT", 2184079,61.26],
            ["US-DE", 493459,50.68],
            ["US-FL", 9983279,46.68],
            ["US-GA", 3926832,36.37],
            ["US-HI", 739265,52.21],
            ["US-ID", 649886,36.37],
            ["US-IL", 5922870,46.74],
            ["US-IN", 2875407,42.71],
            ["US-IA", 1526753,48.39],
            ["US-KS", 1233258,42.33],
            ["US-KY", 1964591,43.97],
            ["US-LA", 1647596,35.44],
            ["US-ME", 832621,61.94],
            ["US-MD", 3423288,56.62],
            ["US-MA", 4287693,62.21],
            ["US-MI", 4728832,47.35],
            ["US-MN", 2950753,52.32],
            ["US-MS", 889553,29.83],
            ["US-MO", 2419726,39.43],
            ["US-MT", 461776,43.21],
            ["US-NE", 928701,48.01],
            ["US-NV", 1309061,42.5],
            ["US-NH", 771557,56.74],
            ["US-NJ", 4955488,55.79],
            ["US-NM", 1157532,55.2],
            ["US-NY", 10646324,54.73],
            ["US-NC", 4424374,42.18],
            ["US-ND", 298138,39.12],
            ["US-OH", 5280628,45.18],
            ["US-OK", 1534133,38.77],
            ["US-OR", 2289915,54.29],
            ["US-PA", 6428133,50.21],
            ["US-RI", 629683,59.44],
            ["US-SC", 2014666,39.13],
            ["US-SD", 403805,45.65],
            ["US-TN", 2572522,37.48],
            ["US-TX", 12091994,41.7],
            ["US-UT", 1201445,37.47],
            ["US-VT", 412485,66.1],
            ["US-VA", 4478317,52.41],
            ["US-WA", 4206349,55.24],
            ["US-WV", 671593,37.47],
            ["US-WI", 2930845,50.34],
            ["US-WY", 204636,35.36],
            
        ]);
   

        var options = {
        region: 'US',
        displayMode: 'regions',
        resolution: 'provinces',
        backgroundColor: '#deeaee',

      };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_America'));

        chart.draw(data, options);
      }