"use strict";

import { addIncome } from "./incomes/actions.js";
import { addOutcome } from "./outcomes/actions.js";

export const incomeName = document.getElementById("income-name");
export const outcomeName = document.getElementById("outcome-name");

export const incomeValue = document.getElementById("income-value");
export const outcomeValue = document.getElementById("outcome-value");

export const incomesList = document.getElementById("incomes-list");
export const outcomesList = document.getElementById("outcomes-list");

export const incomesSum = document.getElementById("incomes-sum");
export const outcomesSum = document.getElementById("outcomes-sum");

const balanceInfoText = document.getElementById("info-text");

const addIncomeButton = document.getElementById("add-income-button");
const addOutcomeButton = document.getElementById("add-outcome-button");

addIncomeButton.addEventListener("click", addIncome);
addOutcomeButton.addEventListener("click", addOutcome);

export const displayCurrentBalance = () => {
  const outcome = Number(outcomesSum.innerText);
  const income = Number(incomesSum.innerText);
  if (outcome > income) {
    balanceInfoText.innerText = `Wydałeś/aś za dużo, jesteś na minusie o ${(
      outcome - income
    ).toFixed(2)} zł.`;
  } else if (income > outcome) {
    balanceInfoText.innerText = `Jesteś na plusie! Możesz jeszcze wydać ${(
      income - outcome
    ).toFixed(2)} zł.`;
  } else {
    balanceInfoText.innerText = `Twój bilans wynosi zero.`;
  }
};
