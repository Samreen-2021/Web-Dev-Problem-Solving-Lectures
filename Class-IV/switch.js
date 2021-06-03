// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log(day);

function myFunction(){
let color = document.querySelector('input').value;
switch(color) {
    case "red":
      alert("color is red");
    break;
    case "blue":
        alert('color is blue');
    
    break;
    case "green":
        alert('color is green');
    break;
    default:
        alert('default condition');
  }
}
  