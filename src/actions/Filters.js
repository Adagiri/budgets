export const filterText = (text = "") => {
  return {
    type: "FILTER_TEXT",
    text
  };
};

export const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
  };
};

export const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
  };
};

export const setStartDate = (start = 0) => {
  return {
    type: "SET_START_DATE",
    start
  };
};

export const setEndDate = (end = 0) => {
  return {
    type: "SET_END_DATE",
    end
  };
};
