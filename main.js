"use strict";

const currentPeriod = document.querySelector("#currentPeriod");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const options = { year: "numeric", month: "long" };
currentPeriod.append(new Date(year, month).toLocaleDateString("en", options));

function getDaysInMonth() {
  const daysInMonth = new Date(year, month, 0).getDate();
  return daysInMonth;
}

const allMonthDays = getDaysInMonth();
const dayNumber = document.querySelector("#dayNumber");
const monday = document.querySelector("#monday");
const tuesday = document.querySelector("#tuesday");
const wednesday = document.querySelector("#wednesday");
const thursday = document.querySelector("#thursday");
const friday = document.querySelector("#friday");
const saturday = document.querySelector("#saturday");
const sunday = document.querySelector("#sunday");
let divEl;
let spanEl;
let divEl1;
let divEl2;
let divEl3;
let divEl4;
let divEl5;
let day;
let d1 = new Date(year, month, 0);
let d;
const weekDayOfFirstMonthDay = d1.getDay();

if (weekDayOfFirstMonthDay === 1) {
  divEl = document.createElement("div");
  divEl.classList.add("helper");
  monday.appendChild(divEl);
} else if (weekDayOfFirstMonthDay === 2) {
  divEl = document.createElement("div");
  divEl1 = document.createElement("div");
  divEl.classList.add("helper");
  divEl1.classList.add("helper");
  monday.appendChild(divEl);
  tuesday.appendChild(divEl1);
} else if (weekDayOfFirstMonthDay === 3) {
  divEl = document.createElement("div");
  divEl1 = document.createElement("div");
  divEl2 = document.createElement("div");
  divEl.classList.add("helper");
  divEl1.classList.add("helper");
  divEl2.classList.add("helper");
  monday.appendChild(divEl);
  tuesday.appendChild(divEl1);
  wednesday.appendChild(divEl2);
} else if (weekDayOfFirstMonthDay === 4) {
  divEl = document.createElement("div");
  divEl1 = document.createElement("div");
  divEl2 = document.createElement("div");
  divEl3 = document.createElement("div");
  divEl.classList.add("helper");
  divEl1.classList.add("helper");
  divEl2.classList.add("helper");
  divEl3.classList.add("helper");
  monday.appendChild(divEl);
  tuesday.appendChild(divEl1);
  wednesday.appendChild(divEl2);
  thursday.appendChild(divEl3);
} else if (weekDayOfFirstMonthDay === 5) {
  divEl = document.createElement("div");
  divEl1 = document.createElement("div");
  divEl2 = document.createElement("div");
  divEl3 = document.createElement("div");
  divEl4 = document.createElement("div");
  divEl.classList.add("helper");
  divEl1.classList.add("helper");
  divEl2.classList.add("helper");
  divEl3.classList.add("helper");
  divEl4.classList.add("helper");
  monday.appendChild(divEl);
  tuesday.appendChild(divEl1);
  wednesday.appendChild(divEl2);
  thursday.appendChild(divEl3);
  friday.appendChild(divEl4);
} else if (weekDayOfFirstMonthDay === 6) {
  divEl = document.createElement("div");
  divEl1 = document.createElement("div");
  divEl2 = document.createElement("div");
  divEl3 = document.createElement("div");
  divEl4 = document.createElement("div");
  divEl5 = document.createElement("div");
  divEl.classList.add("helper");
  divEl1.classList.add("helper");
  divEl2.classList.add("helper");
  divEl3.classList.add("helper");
  divEl4.classList.add("helper");
  divEl5.classList.add("helper");
  monday.appendChild(divEl);
  tuesday.appendChild(divEl1);
  wednesday.appendChild(divEl2);
  thursday.appendChild(divEl3);
  friday.appendChild(divEl4);
  saturday.appendChild(divEl5);
}

for (let i = 0; i < allMonthDays; i++) {
  d = new Date(year, month, i);
  const weekDay = d.getDay();

  if (sessionStorage.length > 0) {
    for (let j = 1; j <= sessionStorage.length; j++) {
      const strings = sessionStorage.getItem(`data${j}`);
      const allData = JSON.parse(strings);
      const date = new Date(`${year}-${month + 1}-${i}`).toLocaleDateString(
        "lt"
      );

      if (allData.dateInput === date) {
        const divElement = document.createElement("div");
        divElement.classList.add("title-block");
        const text = document.createTextNode(`${allData.titleInput}`);
        const spanElement = document.createElement("span");
        spanElement.appendChild(text);
        spanEl = document.createElement("span");
        spanEl.classList.add("type-bubble");
        if (allData.typeInput === "Meeting") {
          spanEl.style.backgroundColor = "red";
        } else if (allData.typeInput === "Call") {
          spanEl.style.backgroundColor = "green";
        } else if (allData.typeInput === "Out of office") {
          spanEl.style.backgroundColor = "yellow";
        }
        divElement.appendChild(spanElement);
        divElement.appendChild(spanEl);

        // Create detailed view
        divElement.addEventListener(
          "click",
          (e) => {
            console.log(e.target);
            const emptyBox = document.querySelector("#detailedViews");
            let newDiv = document.createElement("div");
            newDiv.classList.add("detailed-view-form");

            if (allData.titleInput) {
              let newDiv1 = document.createElement("div");
              newDiv1.classList.add("text-info");
              newDiv1.innerText = `Title: ${allData.titleInput}`;
              newDiv.appendChild(newDiv1);
            }
            if (allData.dateInput) {
              let newDiv2 = document.createElement("div");
              newDiv2.classList.add("text-info");
              newDiv2.innerText = `Date: ${allData.dateInput}`;
              newDiv.appendChild(newDiv2);
            }
            if (allData.startTimeInput) {
              let newDiv3 = document.createElement("div");
              newDiv3.classList.add("text-info");
              newDiv3.innerText = `Start time: ${allData.startTimeInput}`;
              newDiv.appendChild(newDiv3);
            }
            if (allData.endTimeInput) {
              let newDiv4 = document.createElement("div");
              newDiv4.classList.add("text-info");
              newDiv4.innerText = `End time: ${allData.endTimeInput}`;
              newDiv.appendChild(newDiv4);
            }
            if (allData.typeInput) {
              let newDiv5 = document.createElement("div");
              newDiv5.classList.add("text-info");
              newDiv5.innerText = `Type: ${allData.typeInput}`;
              newDiv.appendChild(newDiv5);
            }
            if (allData.descriptionInput) {
              let newDiv6 = document.createElement("div");
              newDiv6.classList.add("text-info");
              newDiv6.innerText = `Type: ${allData.descriptionInput}`;
              newDiv.appendChild(newDiv6);
            }

            const modalSubmitBtn = document.createElement("button");
            modalSubmitBtn.innerText = "Submit";
            modalSubmitBtn.setAttribute("class", "btn");
            modalSubmitBtn.setAttribute("value", `${j}`);
            modalSubmitBtn.id = "submitBtn";
            const modalContent = document.querySelector("#modalContent");
            modalContent.appendChild(modalSubmitBtn);

            let newDiv2 = document.createElement("div");
            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.setAttribute("value", `${j}`);
            deleteButton.setAttribute("class", "btn");
            deleteButton.id = "modalBtn";
            newDiv2.appendChild(deleteButton);

            newDiv.appendChild(newDiv2);
            emptyBox.appendChild(newDiv);

            const modal = document.querySelector("#modalView");
            const modalBtn = document.querySelectorAll("#modalBtn");
            const closeBtn = document.querySelector("#closeBtn");
            if (modalBtn) {
              modalBtn.forEach((e) => {
                e.addEventListener("click", (e) => {
                  modal.style.display = "block";
                  // cia padaryti kad submit button atsirastu tik tada kai toks delete paspaudamas
                  // console.log(e.target.value);
                  // console.log(modalSubmitBtn.value);
                  // if (e.target.value !== modalSubmitBtn.value) {
                  //   // modalContent.removeChild(modalSubmitBtn);
                  //   // modalContent.replaceChild(modalSubmitBtn, modalSubmitBtn);
                  //   modalSubmitBtn.hasChildNodes()
                  // }
                  if (modalContent.hasChildNodes()) {
                    // while (modalContent.firstChild) {
                    //   modalContent.removeChild(modalContent.lastChild);
                    // }
                  }
                });
              });
            }
            closeBtn.addEventListener("click", () => {
              modal.style.display = "none";
            });
            window.addEventListener("click", (e) => {
              if (e.target == modal) {
                modal.style.display = "none";
              }
            });

            const submitBtn = document.querySelectorAll("#submitBtn");
            submitBtn.forEach((e) => {
              e.addEventListener("click", (v) => {
                console.log(v.target.value);
                console.log(`data${v.currentTarget.value}`);
                // sessionStorage.removeItem(`data${j}`);
              });
            });
          },
          { once: true }
        );
        divEl.appendChild(divElement);
      }
    }
  }

  // Create calendar fields
  switch (weekDay) {
    case 0:
      divEl = document.createElement("div");
      spanEl = document.createElement("span");
      spanEl.classList.add("calendar-days");
      day = document.createTextNode(`${i + 1}`);
      spanEl.appendChild(day);
      divEl.setAttribute(
        "value",
        `${new Date(`${year}-${month + 1}-${i + 1}`).toLocaleDateString("lt")}`
      );
      divEl.appendChild(spanEl);
      divEl.classList.add("day-fields");
      monday.appendChild(divEl);
      break;
    case 1:
      divEl = document.createElement("div");
      spanEl = document.createElement("span");
      spanEl.classList.add("calendar-days");
      day = document.createTextNode(`${i + 1}`);
      spanEl.appendChild(day);
      divEl.setAttribute(
        "value",
        `${new Date(`${year}-${month + 1}-${i + 1}`).toLocaleDateString("lt")}`
      );
      divEl.appendChild(spanEl);
      divEl.classList.add("day-fields");
      tuesday.appendChild(divEl);
      break;
    case 2:
      divEl = document.createElement("div");
      spanEl = document.createElement("span");
      spanEl.classList.add("calendar-days");
      day = document.createTextNode(`${i + 1}`);
      spanEl.appendChild(day);
      divEl.setAttribute(
        "value",
        `${new Date(`${year}-${month + 1}-${i + 1}`).toLocaleDateString("lt")}`
      );
      divEl.appendChild(spanEl);
      divEl.classList.add("day-fields");
      wednesday.appendChild(divEl);
      break;
    case 3:
      divEl = document.createElement("div");
      spanEl = document.createElement("span");
      spanEl.classList.add("calendar-days");
      day = document.createTextNode(`${i + 1}`);
      spanEl.appendChild(day);
      divEl.setAttribute(
        "value",
        `${new Date(`${year}-${month + 1}-${i + 1}`).toLocaleDateString("lt")}`
      );
      divEl.appendChild(spanEl);
      divEl.classList.add("day-fields");
      thursday.appendChild(divEl);
      break;
    case 4:
      divEl = document.createElement("div");
      spanEl = document.createElement("span");
      spanEl.classList.add("calendar-days");
      day = document.createTextNode(`${i + 1}`);
      spanEl.appendChild(day);
      divEl.setAttribute(
        "value",
        `${new Date(`${year}-${month + 1}-${i + 1}`).toLocaleDateString("lt")}`
      );
      divEl.appendChild(spanEl);
      divEl.classList.add("day-fields");
      friday.appendChild(divEl);
      break;
    case 5:
      divEl = document.createElement("div");
      spanEl = document.createElement("span");
      spanEl.classList.add("calendar-days");
      day = document.createTextNode(`${i + 1}`);
      spanEl.appendChild(day);
      divEl.setAttribute(
        "value",
        `${new Date(`${year}-${month + 1}-${i + 1}`).toLocaleDateString("lt")}`
      );
      divEl.appendChild(spanEl);
      divEl.classList.add("day-fields");
      saturday.appendChild(divEl);
      break;
    case 6:
      divEl = document.createElement("div");
      spanEl = document.createElement("span");
      spanEl.classList.add("calendar-days");
      day = document.createTextNode(`${i + 1}`);
      spanEl.appendChild(day);
      divEl.setAttribute(
        "value",
        `${new Date(`${year}-${month + 1}-${i + 1}`).toLocaleDateString("lt")}`
      );
      divEl.appendChild(spanEl);
      divEl.classList.add("day-fields");
      sunday.appendChild(divEl);
      break;
  }
}

// Show form and close form listeners
document.querySelector("#showForm").addEventListener("click", () => {
  document.querySelector("#formInputs").style.opacity = "1";
});

document.querySelector("#closeForm").addEventListener("click", () => {
  document.querySelector("#formInputs").style.opacity = "0";
});

// Set session storage
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
}

// Form validations
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

// padaryti button disabled jei forma negerai uzpildyta
// padaryti kad kalendoriuje butu galima kelis blokus saugoti ta pacia diena
// istrinti galeti
