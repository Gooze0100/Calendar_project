"use strict";

const currentPeriod = document.querySelector("#currentPeriod");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
currentPeriod.append(`${month + 1} ${year}`);

function getDaysInMonth() {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return daysInMonth;
}

const d = new Date(year, month, 0);
const weekDay = d.getDay();

const allMonthDays = getDaysInMonth();
const dayNumber = document.querySelector("#dayNumber");
for (let i = 1; i <= allMonthDays; i++) {
  const liEl = document.createElement("li");
  const spanEl = document.createElement("span");
  const number = document.createTextNode(`${i}`);
  spanEl.appendChild(number);
  liEl.appendChild(spanEl);
  dayNumber.appendChild(liEl);
  liEl.setAttribute("value", i);
}

// console.log(weekDay + 1);

// session storage
const createEventBtn = document.querySelector("#createEventBtn");
createEventBtn.addEventListener("click", createEvent);
let queue = 1;
const titleInput = document.querySelector("#title");
const dateInput = document.querySelector("#date");
const startTimeInput = document.querySelector("#startTime");
const endTimeInput = document.querySelector("#endTime");
const typeInput = document.querySelector("#type");
const descriptionInput = document.querySelector("#description");
function createEvent() {
  //   patikrinti ar session storage toks egzistuoja ir tada tik irasyti nes tokiu paciu vardu neleidzia irasyti

  //   irasyti i masyva arba json faila padaryti

  const dataObj = {
    titleInput: titleInput.value,
    dateInput: dateInput.value,
    startTimeInput: startTimeInput.value,
    endTimeInput: endTimeInput.value,
    typeInput: typeInput.value,
    descriptionInput: descriptionInput.value,
  };

  const inputs = JSON.stringify(dataObj);
  sessionStorage.setItem(`data${queue}`, inputs);
  queue++;

  //   if (title !== "" && typeof title === "string") {
  //     sessionStorage.setItem("title", title);
  //   }
  //   if (date !== "") {
  //     sessionStorage.setItem("date", date);
  //   }
  //   if (startTime !== "") {
  //     sessionStorage.setItem("startTime", startTime);
  //   }
  //   if (endTime !== "") {
  //     sessionStorage.setItem("endTime", endTime);
  //   }
  //   sessionStorage.setItem("type", type);
  //   if (description !== "" && typeof description === "string") {
  //     sessionStorage.setItem("description", description);
  //   }
}

// function getEvent() {
//   sessionStorage.getItem("title");
//   sessionStorage.getItem("date");
//   sessionStorage.getItem("startTime");
//   sessionStorage.getItem("endTime");
//   sessionStorage.getItem("type");
//   sessionStorage.getItem("description");
// }

// function detailView() {
//   const detailedViews = document.querySelector("#detailedViews");
//   sessionStorage.getItem("title");
//   sessionStorage.getItem("date");
//   sessionStorage.getItem("startTime");
//   sessionStorage.getItem("endTime");
//   sessionStorage.getItem("type");
//   sessionStorage.getItem("description");
// }

// validation

titleInput.addEventListener("input", () => {
  if (titleInput.value === "" && titleInput.value.length <= 0) {
    document.querySelector("#titleErr1").style.display = "inline";
    titleInput.classList.add("help-class");
  } else if (titleInput.value.length > 50) {
    document.querySelector("#titleErr2").style.display = "inline";
    titleInput.classList.add("help-class");
  } else {
    document.querySelector("#titleErr1").style.display = "none";
    document.querySelector("#titleErr2").style.display = "none";
    titleInput.classList.remove("help-class");
  }
});

dateInput.addEventListener("change", () => {
  if (dateInput.value === "" && dateInput.value.length <= 0) {
    document.querySelector("#dateErr1").style.display = "inline";
    dateInput.classList.add("help-class");
  } else if (typeof dateInput !== "object") {
    document.querySelector("#dateErr2").style.display = "inline";
    dateInput.classList.add("help-class");
  } else {
    document.querySelector("#dateErr1").style.display = "none";
    document.querySelector("#dateErr2").style.display = "none";
    dateInput.classList.remove("help-class");
  }
});

startTimeInput.addEventListener("input", () => {
  if (startTimeInput.value === "" && startTimeInput.value.length <= 0) {
    document.querySelector("#startTimeErr1").style.display = "inline";
    startTimeInput.classList.add("help-class");
  } else if (typeof startTimeInput !== "object") {
    document.querySelector("#startTimeErr2").style.display = "inline";
    startTimeInput.classList.add("help-class");
  } else {
    document.querySelector("#startTimeErr1").style.display = "none";
    document.querySelector("#startTimeErr2").style.display = "none";
    startTimeInput.classList.remove("help-class");
  }
});

endTimeInput.addEventListener("input", () => {
  if (endTimeInput.value === "" && endTimeInput.value.length <= 0) {
    document.querySelector("#endTimeErr1").style.display = "inline";
    endTimeInput.classList.add("help-class");
  } else if (typeof endTimeInput !== "object") {
    document.querySelector("#endTimeErr2").style.display = "inline";
    endTimeInput.classList.add("help-class");
  } else if (endTimeInput.valueAsNumber <= startTimeInput.valueAsNumber) {
    document.querySelector("#endTimeErr3").style.display = "inline";
    endTimeInput.classList.add("help-class");
  } else {
    document.querySelector("#endTimeErr1").style.display = "none";
    document.querySelector("#endTimeErr2").style.display = "none";
    document.querySelector("#endTimeErr3").style.display = "none";
    endTimeInput.classList.remove("help-class");
  }
});

typeInput.addEventListener("input", () => {
  if (typeInput.value === "" && typeInput.value.length <= 0) {
    document.querySelector("#endTimeErr1").style.display = "inline";
    typeInput.classList.add("help-class");
  } else if (typeof typeInput !== "object") {
    document.querySelector("#endTimeErr2").style.display = "inline";
    typeInput.classList.add("help-class");
  } else {
    document.querySelector("#endTimeErr1").style.display = "none";
    typeInput.classList.remove("help-class");
  }
});
