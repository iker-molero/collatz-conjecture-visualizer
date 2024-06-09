visualizer_controller = function($scope) {

    //? [ VARIABLES ]
    $scope.number_to_visualize = "";
    $scope.is_valid = false;

    //? [ FUNCTIONS ]
    //* Validate the number input
    //* DATA FORMAT
    //* RETURNS
    //* - is_valid (bool)
    $scope.validate_number = function() {

        const value = $scope.number_to_visualize;

        switch (true) {

            case value == "":
                $scope.is_valid = false;
                break;
            
            case isNaN(value):
                $scope.is_valid = false;
                break;

            default:
                $scope.is_valid = true;
                break;

        };

    };

    //* Calculate the repetitions for the number
    //* DATA FORMAT
    //* TAKES
    //* - value (int)
    //* RETURNS
    //* - repetitions (array)
    $scope.calculate_repetitions = function(value) {

        const repetitions = [];
        let number = Number(value)

        while (true) {

            repetitions.push(number);

            if (number % 2 == 0) { number = number / 2 }
            else { number = (number * 3) + 1 }

            if (number == 1) { repetitions.push(number); break; }

        };

        $scope.plot_values(repetitions)

    };

    //* Draw the repetitions in the graph
    //* DATA FORMAT
    //* TAKES
    //* - repetitions (array)
    $scope.plot_values = function(repetitions) {

        graph_service.load_graph('visualizer', repetitions)

    };
    graph_service.update_graph('visualizer', [])

};

app.controller("visualizer_controller", visualizer_controller);