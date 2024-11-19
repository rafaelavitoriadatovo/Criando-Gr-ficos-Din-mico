import { getCSS, tickConfig } from "./common.js";

async function getUsersByNetwork() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const response = await fetch(url);
    const data = await response.json();
    const networkNames = Object.keys(data);
    const userCounts = Object.values(data);

    const chartData = [
        {
            x: networkNames,
            y: userCounts,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Social networks with the most users',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Network names',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Billions of active users',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const chart = document.createElement('div');
    chart.className = 'chart';
    document.getElementById('charts-container').appendChild(chart);
    Plotly.newPlot(chart, chartData, layout);
}

getUsersByNetwork();