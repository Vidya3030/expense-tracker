const incomeColors = ['#003333', '#006633', '#006633', '#009933', '#009966', '#00CC66', '#00CC99', '#00FF99'];
const expenseColors = ['#CC0000', '#CC3300', '#cC3333', '#CC6633', '#CC6666', '#FF6666', '#FF9966', '#FF9999', '#FFCC99'];

export const incomeCategories = [
  { type: 'Deposits', amount: 0, color: incomeColors[0] },
  { type: 'Gifts', amount: 0, color: incomeColors[1] },
  { type: 'Salary', amount: 0, color: incomeColors[2] },
  { type: 'Savings', amount: 0, color: incomeColors[3] },
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Car', amount: 0, color: expenseColors[1] },
  { type: 'Clothes', amount: 0, color: expenseColors[2] },
  { type: 'Food', amount: 0, color: expenseColors[3] },
  { type: 'Shopping', amount: 0, color: expenseColors[4] },
  { type: 'Entertainment', amount: 0, color: expenseColors[5] },
  { type: 'Phone', amount: 0, color: expenseColors[6] },
  { type: 'Other', amount: 0, color: expenseColors[7] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};