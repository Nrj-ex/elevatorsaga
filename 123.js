{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);

        });

        elevator.on("up_button_pressed", function(floorNum)
        { elevator.goToFloor(floorNum);
        } );
        elevator.on("floor_button_pressed", function(floorNum)
            // Может, сказать лифту, чтобы он поднялся на этот этаж?
        { elevator.goToFloor(floorNum);
        });

    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}