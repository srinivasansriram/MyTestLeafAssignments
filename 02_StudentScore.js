
var Studentmark = 250;

function CheckStudentGrade() {

switch (Studentmark) {
    case 475:

        if (Studentmark > 400) {

            console.log(" Grade is Distinction");
            
        }
        break;

    case 300:

        if (Studentmark < 400 && Studentmark > 300) {

            console.log(" Grade is First Class");
            
        }
        break;

    case 250:

        if (Studentmark < 300) {

            console.log(" Grade is Second Class");
            
        }
        break;    

    default:
            console.log("Examination Attempted ");
        break;
}

}

CheckStudentGrade();
