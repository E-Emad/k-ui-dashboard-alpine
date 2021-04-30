const quickStatisticsCards = () => {
  return [
    {
      title: 'Subscribers',
      value: '23,345',
      increaseAmount: '+2%',
      svgPath:
        'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
      title: 'Articles',
      value: '7,761',
      increaseAmount: '+8%',
      svgPath:
        'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    },
    {
      title: 'Sessions',
      value: '40%',
      increaseAmount: '+9%',
      svgPath:
        'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    },
    {
      title: 'Site Visits',
      value: '300k',
      increaseAmount: '+20%',
      svgPath: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
    },
  ]
}

const visitorsLocations = () => {
  return [
    {
      country: 'Egypt',
      latitude: 30.0571,
      longitude: 31.2272,
      percent: 40,
    },
    {
      country: 'Australia',
      latitude: -33.865143,
      longitude: 151.2099,
      percent: 30,
    },
    {
      country: 'Russia',
      latitude: 55.7558,
      longitude: 37.6176,
      percent: 20,
    },
    {
      country: 'USA',
      latitude: 38.8921,
      longitude: -77.0241,
      percent: 10,
    },
  ]
}

const visitorsBrowsers = () => {
  return [
    {
      browser: 'Firefox',
      count: 7000,
      color: '#1c64f2',
    },
    {
      browser: 'Chrome',
      count: 10000,
      color: '#0694a2',
    },
    {
      browser: 'Edge',
      count: 3000,
      color: '#00dd00',
    },
    {
      browser: 'Safari',
      count: 5000,
      color: '#7e3af2',
    },
  ]
}

// Map
am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated)
  // Themes end

  // Create map instance
  let worldMapChart = am4core.create('worldMap', am4maps.MapChart)

  // Set map definition
  worldMapChart.geodata = am4geodata_worldLow

  // Set projection
  worldMapChart.projection = new am4maps.projections.Miller()

  // Create map polygon series
  let polygonSeries = worldMapChart.series.push(new am4maps.MapPolygonSeries())

  // Exclude Antartica
  polygonSeries.exclude = ['AQ']

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true

  // Configure series
  let polygonTemplate = polygonSeries.mapPolygons.template
  polygonTemplate.tooltipText = '{name}'
  polygonTemplate.polygon.fillOpacity = 0.6

  // Create hover state and set alternative fill color
  let hs = polygonTemplate.states.create('hover')
  hs.properties.fill = worldMapChart.colors.getIndex(0)

  // Add image series
  let imageSeries = worldMapChart.series.push(new am4maps.MapImageSeries())
  imageSeries.mapImages.template.propertyFields.longitude = 'longitude'
  imageSeries.mapImages.template.propertyFields.latitude = 'latitude'
  imageSeries.mapImages.template.tooltipText = '{title}'
  imageSeries.mapImages.template.propertyFields.url = 'url'

  let circle = imageSeries.mapImages.template.createChild(am4core.Circle)
  circle.radius = 3
  // circle.scale = 1.5
  circle.propertyFields.fill = 'color'

  let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle)
  circle2.radius = 3
  // circle2.scale = 3
  // circle2.opacity = 0.5
  circle2.propertyFields.fill = 'color'

  circle2.events.on('inited', function (event) {
    animateBullet(event.target)
  })

  function animateBullet(circle) {
    let animation = circle.animate(
      [
        { property: 'scale', from: 1, to: 5 },
        { property: 'opacity', from: 1, to: 0 },
      ],
      1000,
      am4core.ease.circleOut
    )
    animation.events.on('animationended', function (event) {
      animateBullet(event.target.object)
    })
  }

  let colorSet = new am4core.ColorSet()

  imageSeries.data = visitorsLocations().map((location) => {
    return {
      title: location.country,
      latitude: location.latitude,
      longitude: location.longitude,
      color: colorSet.next(),
    }
  })
})

// Doughnut chart
const doughnutChart = new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: {
    labels: visitorsBrowsers().map((browser) => {
      return [browser.browser]
    }),
    datasets: [
      {
        data: visitorsBrowsers().map((browser) => {
          return [browser.count]
        }),
        backgroundColor: visitorsBrowsers().map((browser) => {
          return [browser.color]
        }),
        hoverBackgroundColor: 'blue',
        borderWidth: 0,
        weight: 0.5,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    legend: false,
    title: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
})
