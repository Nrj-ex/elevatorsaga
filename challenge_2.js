// Challenge #2: Transport 20 people in 60 seconds or less
{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
            elevator.goToFloor(1);
            elevator.goToFloor(2);
            elevator.goToFloor(3);
            elevator.goToFloor(4);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
//it takes a lot of attempts to pass))