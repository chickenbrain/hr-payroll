import taxBracket from './tax-bracket';

const getGrossIncome = (salary) => (
  Math.round(salary / 12)
);

const getSuper = (grossIncome, superAnnuation) => (
  Math.round(grossIncome * (superAnnuation / 100))
);

const getTaxBracket = (salary) => (
  taxBracket.find((element) => salary > element.min && salary <= element.max)
);

const getIncomeTax = (salary) => {
  const { additionalTax, over, someotherTax } = getTaxBracket(salary);
  return Math.round((additionalTax + (salary - over) * someotherTax) / 12);
};

const getNetIncome = (grossIncome, incomeTax) => (
  grossIncome - incomeTax
);

const getPay = (netIncome, superAnnuation) => (
  netIncome - superAnnuation
);

const calculatePayslip = (salary, superannuation) => {
  const grossIncome = getGrossIncome(salary);
  const incomeTaxss = getIncomeTax(salary);
  const theNetIncome = getNetIncome(grossIncome, incomeTaxss);
  const superA = getSuper(grossIncome, superannuation);
  const thePay = getPay(theNetIncome, superA);

  return {
    gross: grossIncome,
    incomeTax: incomeTaxss,
    netIncome: theNetIncome,
    super: superA,
    pay: thePay,
  };
};

export {
  getGrossIncome,
  getSuper,
  getTaxBracket,
  getIncomeTax,
  getNetIncome,
  getPay,
  calculatePayslip,
};
