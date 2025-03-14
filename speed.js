const speedLimit = 70;
const kmPerDemeritPoint = 5;

function speedLimitCheck(speed) {
    if (speed < speedLimit) {
        return "Ok";
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (points > 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
    }
}

const speedCar = 56;
console.log(speedLimitCheck(speedCar)); 
