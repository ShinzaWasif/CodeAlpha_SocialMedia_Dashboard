document.addEventListener('DOMContentLoaded', function () {

    //Specific user object on user login
    const user = JSON.parse(localStorage.getItem('user'));

    //Followers
    document.getElementById('fbFollowers').getElementsByTagName('h2')[0].textContent = user.followers[0];
    document.getElementById('igFollowers').getElementsByTagName('h2')[0].textContent = user.followers[1];
    document.getElementById('twFollowers').getElementsByTagName('h2')[0].textContent = user.followers[2];

    //Account Reach
    document.getElementById('fbReach').getElementsByTagName('h2')[0].textContent = user.accountReach[0];
    document.getElementById('igReach').getElementsByTagName('h2')[0].textContent = user.accountReach[1];
    document.getElementById('twReach').getElementsByTagName('h2')[0].textContent = user.accountReach[2];

    //Post Impressions (Likes/Comments)
    document.getElementById('fbImpressions').getElementsByTagName('span')[0].textContent = user.postsImpression[0][0];
    document.getElementById('igImpressions').getElementsByTagName('span')[0].textContent = user.postsImpression[1][0];
    document.getElementById('twImpressions').getElementsByTagName('span')[0].textContent = user.postsImpression[2][0];
    document.getElementById('fbImpressions').getElementsByTagName('span')[1].textContent = user.postsImpression[0][1];
    document.getElementById('igImpressions').getElementsByTagName('span')[1].textContent = user.postsImpression[1][1];
    document.getElementById('twImpressions').getElementsByTagName('span')[1].textContent = user.postsImpression[2][1];

    //Name and Image
    document.getElementById('profileDiv').getElementsByTagName('h5')[0].textContent = user.name;
    document.getElementById('imgDiv').style.backgroundImage = `url(${user.picture})`;

    //data objects array for 3 charts
    const data = [{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Facebook',
            data: [0.3, 0.7, 1.3, 1.8, 2.2, 2.8],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
        },
        {
            label: 'Instagram',
            data: [0.7, 1.4, 1.9, 2.3, 2.8, 3.5],
            fill: false,
            borderColor: 'rgb(196, 54, 196)',
        },
        {
            label: 'Twitter',
            data: [0.2, 0.9, 1.2, 1.4, 1.7, 1.9],
            fill: false,
            borderColor: 'rgb(228, 239, 32)',
        }
        ]
    }, {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Facebook',
            data: [250, 400, 640, 800, 640, 720],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
        },
        {
            label: 'Instagram',
            data: [500, 680, 700, 1100, 950, 1000],
            fill: false,
            borderColor: 'rgb(196, 54, 196)',
        },
        {
            label: 'Twitter',
            data: [250, 385, 430, 550, 400, 560],
            fill: false,
            borderColor: 'rgb(228, 239, 32)',
        }
        ]
    }, {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Facebook',
            data: [630, 690, 720, 890, 1050, 1200],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
        },
        {
            label: 'Instagram',
            data: [890, 920, 1000, 1210, 1320, 1400],
            fill: false,
            borderColor: 'rgb(196, 54, 196)',
        },
        {
            label: 'Twitter',
            data: [400, 430, 595, 625, 870, 970],
            fill: false,
            borderColor: 'rgb(228, 239, 32)',
        }
        ]
    }];

    // 3 charts configuration
    const config = [{
        type: 'line',
        data: data[0],
        options: {
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgb(192, 184, 190)'
                    },
                    ticks: {
                        color: 'rgb(192, 184, 190)'
                    }
                },
                y: {
                    grid: {
                        color: 'rgb(192, 184, 190)'
                    },
                    ticks: {
                        color: 'rgb(192, 184, 190)'
                    },
                    min: 0,
                    max: 5
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'rgb(192, 184, 190)'
                    }
                }
            }

        }
    }, {
        type: 'line',
        data: data[1],
        options: {
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgb(192, 184, 190)'
                    },
                    ticks: {
                        color: 'rgb(192, 184, 190)'
                    }
                },
                y: {
                    grid: {
                        color: 'rgb(192, 184, 190)'
                    },
                    ticks: {
                        color: 'rgb(192, 184, 190)'
                    },
                    min: 100,
                    max: 1200
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'rgb(192, 184, 190)'
                    }
                }
            }

        }
    }, {
        type: 'line',
        data: data[2],
        options: {
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgb(192, 184, 190)'
                    },
                    ticks: {
                        color: 'rgb(192, 184, 190)'
                    }
                },
                y: {
                    grid: {
                        color: 'rgb(192, 184, 190)'
                    },
                    ticks: {
                        color: 'rgb(192, 184, 190)'
                    },
                    min: 100,
                    max: 1500
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'rgb(192, 184, 190)'
                    }
                }
            }

        }
    }]


    chart = document.getElementById('chart1');
    chartt = document.getElementById('chart2');
    charttt = document.getElementById('chart3');


    new Chart(chart, config[0]);
    new Chart(chartt, config[1]);
    new Chart(charttt, config[2]);

});