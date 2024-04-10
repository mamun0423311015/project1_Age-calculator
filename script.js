// Get user input element
let userDate = document.getElementById("date");
// Disable future date selection
userDate.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  // Get user output element
  let userAge = document.getElementById("age");
  userAge.innerHTML = "";

  let birthDate = new Date(userDate.value);

  if (birthDate == "Invalid Date") {
    let userError = document.getElementById("error");
    // To show error
    userError.innerHTML = "Date is invalid*";
  } else {
    let userError = document.getElementById("error");
    // To remove error (If any)
    userError.innerHTML = "";

    // Separating user's birthdate
    let userDay = birthDate.getDate();
    let userMonth = birthDate.getMonth() + 1;
    let userYear = birthDate.getFullYear();

    // Get current date
    let todayDate = new Date();

    // Separating today's date
    let todayDay = todayDate.getDate();
    let todayMonth = todayDate.getMonth() + 1;
    let todayYear = todayDate.getFullYear();

    // Calculations to get the age
    let ageDay, ageMonth, ageYear;

    // Get year
    ageYear = todayYear - userYear;

    // Get month
    if (todayMonth >= userMonth) {
      ageMonth = todayMonth - userMonth;
    } else {
      ageYear--;
      ageMonth = 12 + todayMonth - userMonth;
    }

    // Get day
    if (todayDay >= userDay) {
      ageDay = todayDay - userDay;
    } else {
      ageMonth--;
      ageDay = getDaysInMonth(userYear, userMonth) + todayDay - userDay;
    }

    // If ageMonth becomes nagative
    if (ageMonth < 0) {
      ageMonth = 11;
      ageYear--;
    }

    // To show output(User age)
    userAge.innerHTML = `Your age is: <span>${ageYear}</span> years <span>${ageMonth}</span> months <span>${ageDay}</span> days`;
  }
}

// To get number of days in user's birthday month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}