var imageCompeletedIcon = new Image();
imageCompeletedIcon.src = "package_complete.svg"

var imageFiledIcon = new Image();
imageFiledIcon.src = "package_x.svg"
     
     
     
const ctx = document.getElementById('myChart').getContext('2d');
const data = {
  labels: ['25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan', '31 Jan', '1 Feb', '2 Feb', '3 Feb', '4 Feb', '5 Feb'],
  datasets: [{
    label: 'المكتملة',
    data: [1500, 4500, 5000, 5800, 3500, 8500, 5000, 4500, 5000, 8500, 7500, 6500],
    borderColor: 'rgba(20, 184, 166, 0.5)', // لون الخطوط الخارجية للمنحنى الخاص بالدخل
    backgroundColor: 'rgba(20, 184, 166, 0.1)', // لون الخلفية للمنحنى الخاص بالدخل
    fill: true,
    
    pointStyle : imageCompeletedIcon,
    tension: 0.4
  }, {
    label: 'المرفوضة',
    data: [200, 350, 600, 750, 400, 480, 450, 250, 400, 250, 400, 500],
    borderColor: 'rgba(239, 68, 68, 0.5)', // لون الخطوط الخارجية للمنحنى الخاص بالمصروفات
    backgroundColor: 'rgba(239, 68, 68, 0.1)', // لون الخلفية للمنحنى الخاص بالمصروفات
    fill: true,
    pointStyle : imageFiledIcon,
    tension: 0.4
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value / 1000 + 'k';
          },
          color: '#f2f2f2' // لون علامات المحور الرأسي
        }
      },
      x: {
        ticks: {
          color: '#f2f2f2' // لون علامات المحور الأفقي
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#f2f2f2' // لون نص الأسطر التوضيحية
        }
      }
    }
  }
};

const myChart = new Chart(ctx, config);