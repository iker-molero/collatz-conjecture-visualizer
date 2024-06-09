const graph_service = { loaded_graphs: {} }

//* DATA FORMAT
//* TAKES 
//* - canvas_id (string)
//* - data_values (array)
graph_service.load_graph = function (canvas_id, data_values) {

    graph_service.loaded_graphs[canvas_id] = new Chart(canvas_id, {

        type: "line",
        data: {
            labels: data_values,
            datasets: [{

                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(204, 76, 101, 1.0)",
                borderColor: "rgba(204, 76, 101, 0.75)",
                data: data_values,
                pointRadius: 0

            }]
        },

        options: {
            legend: {display: false},
            scales: {
                xAxes: [{

                    gridLines: {

                        color: 'rgba(255, 255, 255, 0)',
                        lineWidth: 1

                    },
                    ticks: { display: false }

                }],
                yAxes: [{

                    gridLines: {

                        color: 'rgba(255, 255, 255, 0)',
                        lineWidth: 1

                    },
                    ticks: {

                        fontColor: 'rgba(255, 255, 255, 1)',
                        beginAtZero: true,
                        min: 0

                    }

                }]
            }
        }

    });

}

//* DATA FORMAT
//* TAKES 
//* - canvas_id (string)
//* - data_values (array)
graph_service.update_graph = function (canvas_id, data_values) {

    if (graph_service.loaded_graphs[canvas_id]) {

        graph_service.loaded_graphs[canvas_id].data.labels = data_values; 
        graph_service.loaded_graphs[canvas_id].data.datasets.data = data_values; 

    } else graph_service.load_graph(canvas_id, data_values)

}