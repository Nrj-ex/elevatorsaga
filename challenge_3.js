// Challenge #3: Transport 23 people in 60 seconds or less
{
    init: function(elevators, floors) {

        var elevator = elevators[0]; // Let's use the first elevator
        var elevatorPressedFloors = elevator.getPressedFloors();
        var destinationQueue = elevator.checkDestinationQueue();


        // когда свободен
        elevator.on("idle", function() {
            elevator.goToFloor(0);

        });

        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
        } );

        floor.on("up_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);

        } );


        floor.on("down_button_pressed", function() {

        } );

    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }

}
//it takes a lot of attempts to pass))
