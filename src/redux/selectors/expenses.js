import { isBefore, isAfter, isSameDay, parseISO } from "date-fns";

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAt = new Date(expense.createdAt).toISOString();
      const startDateMatch = startDate
        ? isSameDay(parseISO(startDate.toISOString()), parseISO(createdAt)) ||
          isBefore(parseISO(startDate.toISOString()), parseISO(createdAt))
        : true;
      const endDateMatch = endDate
        ? isSameDay(parseISO(endDate.toISOString()), parseISO(createdAt)) ||
          isAfter(parseISO(endDate.toISOString()), parseISO(createdAt))
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch & endDateMatch & textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "Date") {
        return a.createdAt - b.createdAt;
      } else if (sortBy === "Amount") {
        return b.amount - a.amount;
      }

      return 0;
    });
};
