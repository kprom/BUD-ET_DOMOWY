"use strict";

import { outcomeName, outcomeValue } from "../main.js";
import { renderOutcomesList } from "./updates.js";

export let outcomes = [];

export const addOutcome = (e) => {
  e.preventDefault();

  const name = outcomeName.value.trim();
  const value = Number(outcomeValue.value);

  if (name === "" || isNaN(value) || value <= 0) {
    alert("Podaj poprawną nazwę wydatków oraz kwotę.");
    return;
  }

  const newOutcome = {
    name: name,
    value: value,
    id: Math.random().toString(),
  };

  outcomes.push(newOutcome);

  renderOutcomesList();

  outcomeName.value = " ";
  outcomeValue.value = "";
};

export const deleteOutcome = (e) => {
  e.preventDefault();
  const idToDelete = e.target.id;
  outcomes = outcomes.filter((el) => el.id !== idToDelete);

  renderOutcomesList();
};

export const editOutcomesList = (e) => {
  e.preventDefault();
  const idToEdit = e.target.id.split("-")[2];
  const nameValue = document
    .getElementById(`update-name-${idToEdit}`)
    .value.trim();
  const outcomeValue = Number(
    document.getElementById(`update-outcome-${idToEdit}`).value
  );

  if (nameValue === "" || isNaN(outcomeValue) || outcomeValue <= 0) {
    alert("Podaj poprawną nazwę wydatków oraz kwotę.");
    return;
  }

  outcomes = outcomes.map((outcome) => {
    if (outcome.id === idToEdit) {
      return {
        ...outcome,
        name: nameValue,
        value: outcomeValue,
      };
    }
    return outcome;
  });

  renderOutcomesList();
};
