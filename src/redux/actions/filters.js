export const setTextFilter = (text = "") => ({
  type: "TEXT_FILTER",
  text,
});

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

export const setStartDate = (startDate) => ({
  type: "START_DATE_FILTER",
  startDate,
});

export const setEndDate = (endDate) => ({
  type: "END_DATE_FILTER",
  endDate,
});
