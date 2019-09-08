const taxBracket = [
  {
    min: 0,
    max: 18000,
    additionalTax: 0,
    over: 0,
    someotherTax: 1,
  },
  {
    min: 18201,
    max: 37000,
    additionalTax: 0,
    over: 18200,
    someotherTax: 0.19,
  },
  {
    min: 37001,
    max: 80000,
    additionalTax: 3572,
    over: 37000,
    someotherTax: 0.325,
  },
  {
    min: 80001,
    max: 180000,
    additionalTax: 17547,
    over: 80000,
    someotherTax: 0.37,
  },
  {
    min: 180001,
    max: 99999999999,
    additionalTax: 54547,
    over: 180000,
    someotherTax: 0.45,
  },
];

export default taxBracket;
