/* Tip calculator */

// Target

const button = document.querySelector("button");

// Calculates % of bill amount & adds some light validation

const billAmtCalc = (billAmt, percent) => {
  return percent > 0
    ? billAmt > 0
      ? billAmt * percent
      : alert("Please enter a valid bill amount")
    : alert("Please enter a valid service amount");
};

// Calculates portion of bill divided by number of people

const billSplitter = (billAmt, numOfPeople) =>
  numOfPeople > 0
    ? billAmt / numOfPeople
    : alert("Please enter a valid number for the people splitting the bill");

const tipCalc = (billAmt, percent, numOfPeople) => {
  const netBillAmt = billAmtCalc(billAmt, percent);
  const individualBill = billSplitter(netBillAmt, numOfPeople);
  const tipDisplay = document.querySelector(".tip-display");
  if (typeof netBillAmt === "number") {
    tipDisplay.innerHTML = `Your tip is $${individualBill.toLocaleString(
      "en-US"
    )}`;
  }
};

button.addEventListener("click", () => {
  const billAmt = document.querySelector("#bill-amt").value;
  const service = document.querySelector("#service").value;
  const numOfPeople = document.querySelector("#people").value;
  tipCalc(billAmt, service, numOfPeople);
});
