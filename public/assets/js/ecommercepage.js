const options = {
  scales: {
    yAxes: [
      {
        display: false
      }
    ],
    xAxes: [
      {
        display: false
      }
    ]
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: false
}

const labels = ['Sun', 'Mon', 'Tus', 'Wed', 'Sar', 'Fri', 'Sat']

const balanceChart = new Chart(document.getElementById('balanceCanvas'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        data: [1, 30, 8, 20, 8, 17, 40],
        backgroundColor: ['rgba(55, 125, 255, 0)'],
        borderColor: '#8b5cf6',
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        data: [2, 40, 10, 30, 8, 17, 50],
        backgroundColor: ['rgba(55, 125, 255, 0)'],
        borderColor: '#8b5cf6',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0
      }
    ]
  },
  options: options
})
const ordersChart = new Chart(document.getElementById('ordersCanvas'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        data: [1, 30, 8, 20, 8, 17, 40],
        backgroundColor: ['rgba(55, 125, 255, 0)'],
        borderColor: '#8b5cf6',
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        data: [2, 40, 10, 30, 8, 17, 50],
        backgroundColor: ['rgba(55, 125, 255, 0)'],
        borderColor: '#8b5cf6',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0
      }
    ]
  },
  options: options
})
const sessionsChart = new Chart(document.getElementById('sessionsCanvas'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        data: [1, 30, 8, 20, 8, 17, 40],
        backgroundColor: ['rgba(55, 125, 255, 0)'],
        borderColor: '#8b5cf6',
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        data: [2, 40, 10, 30, 8, 17, 50],
        backgroundColor: ['rgba(55, 125, 255, 0)'],
        borderColor: '#8b5cf6',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0
      }
    ]
  },
  options: options
})
