import database from "../firebase/firebase";
import uuid from 'uuid';

export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState ) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const uid = getState().auth.uid;

    const expense = { description, note, amount, createdAt };
    database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

export const removeExpense = (id = "") => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

// START_REMOVE_EXPENSE
export const startRemoveExpense = ( id ) => {
  return (dispatch, getState) => {
        const uid = getState().auth.uid;

   return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
        dispatch(removeExpense(id));
      });
    }
  }


  // EDIT_EXPENSE
export const editExpense = (id, update) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    update
  };
};

// START_EDIT_EXPENSE
export const startEditExpense = ( id, update) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

      database.ref(`users/${uid}/expenses/${id}`).update(update).then(() => {
        dispatch(editExpense(id, update));
      });
  };
};

// SET EXPENSES

export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {

return (dispatch, getState) => {
  const uid = getState().auth.uid;
  return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
     const expenses = [];
     snapshot.forEach((expense) => {
        expenses.push({
           id: expense.key,
           ...expense.val()
        })
     });
     dispatch(setExpenses(expenses));
  });
}

}