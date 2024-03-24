//  2ND quiz
function calculateDemeritPoints(speed){
    const speedLimit = 70
    let demeritPoints = 0
    if (speed <=speedLimit){
        console.log('ok');
    }
    else{
        demeritPoints = Math.floor((speed - speedLimit)/5)
        console.log("points:",demeritPoints)
        if (demeritPoints > 12){
            console.log("License suspended");
        }
    }
}
function main(){
    const speed =parseFloat(prompt("enter the speed of the car:"));
    if (!isNaN(speed)){
    calculateDemeritPoints(speed);
}
    else {
        console.log("invalid input.Please enter a valid nimber.");
    }
}
main ();
