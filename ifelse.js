// const age = 15;
// const hasPermission = false;

// // if(age >= 21){
// //     console.log("you are under age");
// // }else{
// //     console.log("please enter you right age");

// // }


// if (age >= 18 || hasPermission) {
//    // ...
//    console.log("good");
// }

const day = "Mondays";

switch (day) {
  case "Mondays":
    console.log("Start of week");


  case "Friday":
    console.log("Weekend is near");


  case "Monday":
    console.log("Holiday");
    break;

  default:
    console.log("Normal day");
}

const status = "shipped";


switch (status) {
  case "pending":
    console.log("Order is pending");
    break;

  case "shipped":
    console.log("Order is on the way");
    break;

  case "delivered":
    console.log("Order delivered");
    break;

  case "cancelled":
    console.log("Order cancelled");
    break;

  default:
    console.log("Unknown status");
}