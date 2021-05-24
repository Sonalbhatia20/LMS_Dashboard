var options = {
    series: [
      {
        name: "School Work",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Extracurricular",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Tests",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 250, 
      sparkline: {
        enabled: true, 
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "hrs",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " hrs";
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  
  var options1 = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [68, 82, 60, 40, 35, 75],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    labels: ['BIOLOGY', 'HISTORY', 'MATHS', 'ENGLISH', 'GEOGRAPHY', 'PHYSICS']
  };
  
  new ApexCharts(document.querySelector("#chart-circle1"), options1).render();
  
   var options2 = {
          series: [{
            name: " Aggregate Percentage Marks",
            data: [58, 47, 75, 62, 87, 68, 74, 85, 91],
        }],
          chart: {
          height: 300,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          title: {
            text: 'Month'
          },
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        yaxis: {
          title: {
            text: 'Percentage'
          },
        }
        };

  var chart2 = new ApexCharts(document.querySelector("#apex2"), options2);
  chart2.render();

  var options3 = {
    chart: {
      height: 280,
      type: "radialBar",
    },
  
    series: [65],
    colors: ["#af78c0"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#514b53"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#925fa7"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Progress"]
  };
  
  var chart3 = new ApexCharts(document.querySelector("#apex3"), options3);
  
  chart3.render();

  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
  }
  
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
  }