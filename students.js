const studentMark = 151;
function studentGrade (marks) {
    if (typeof marks !== "number" || marks < 0 || marks > 100) {
        return "Invalid input! Please enter a number between 0 and 100.";
    }

    if (studentMark  > 79) {
        return "A";
    }else if (studentMark >= 60) {
        return "B";
    }else if (studentMark >= 49) {
        return "C";
    }else if (studentMark >= 40) {
        return "D";
    }else {
        return "E"
    }

}
console.log(studentGrade(studentMark));

