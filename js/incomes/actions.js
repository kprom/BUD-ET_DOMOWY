"use strict";

import { incomeName, incomeValue } from "../main.js";
import { renderIncomesList } from "./updates.js";

export let incomes = [];

export const addIncome = (e) => {
  e.preventDefault();

  const name = incomeName.value.trim();
  const value = Number(incomeValue.value);

  if (name === "" || isNaN(value) || value <= 0) {
    alert("Podaj poprawną nazwę przychodu oraz kwotę.");
    return;
  }

  const newIncome = {
    name: name,
    value: value,
    id: Math.random().toString(),
  };

  incomes.push(newIncome);

  renderIncomesList();

  incomeName.value = " ";
  incomeValue.value = "";
};

export const deleteIncome = (e) => {
  e.preventDefault();
  const idToDelete = e.target.id;
  incomes = incomes.filter((el) => el.id !== idToDelete);

  renderIncomesList();
};

export const editIncomesList = (e) => {
  e.preventDefault();
  const idToEdit = e.target.id.split("-")[2];
  const nameValue = document
    .getElementById(`update-name-${idToEdit}`)
    .value.trim();
  const incomeValue = Number(
    document.getElementById(`update-income-${idToEdit}`).value
  );

  if (nameValue === "" || isNaN(incomeValue) || incomeValue <= 0) {
    alert("Podaj poprawną nazwę przychodu oraz kwotę.");
    return;
  }

  incomes = incomes.map((income) => {
    if (income.id === idToEdit) {
      return {
        ...income,
        name: nameValue,
        value: incomeValue,
      };
    }
    return income;
  });

  renderIncomesList();
};
