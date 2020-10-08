import { startOfMonth, endOfMonth } from "date-fns";

export default (
  state = {
    text: "",
    sortBy: "Date",
    startDate: startOfMonth(new Date()),
    endDate: endOfMonth(new Date()),
  },
  action
) => {
  switch (action.type) {
    case "TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "Amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "Date",
      };
    case "START_DATE_FILTER":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "END_DATE_FILTER":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
