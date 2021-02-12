this.turnRight = function () {
    this.turnLeft();
    this.turnLeft();
    this.turnLeft();
}

this.run = function (steps) {
    for (i = 1; i <= steps; i++) {
        this.move()
    }
}

this.run(1);
this.pickBeeper();
this.run(1);
this.turnLeft();
this.run(1);
this.turnRight();
this.run(2);
this.putBeeper();
this.run(1);