import {
  getGrossIncome,
  getSuper,
  getIncomeTax,
  getNetIncome,
  getPay,
  calculatePayslip,
} from '../components/calculator';

describe('Validating income brackets', () => {
  describe('with $37,001 - $80,000 at 9% super rate', (salary = 60050, superannuation = 9) => {
    it('calculate gross income', () => {
      expect(getGrossIncome(salary)).toEqual(5004);
    });

    it('calculate income tax', () => {
      expect(getIncomeTax(salary)).toEqual(922);
    });

    it('calculate super', () => {
      expect(getSuper(5004, superannuation)).toEqual(450);
    });

    it('calculate net income', () => {
      expect(getNetIncome(5004, 922)).toEqual(4082);
    });

    it('calculate pay', () => {
      expect(getPay(4082, 450)).toEqual(3632);
    });

    it('calculate payslip', () => {
      expect(calculatePayslip(salary, superannuation))
        .toEqual({
          gross: 5004,
          incomeTax: 922,
          netIncome: 4082,
          pay: 3632,
          super: 450,
        });
    });
  });

  describe('with $81,001 - $180,000 at 9% super rate', (salary = 100000, superannuation = 9) => {
    it('calculate gross income', () => {
      expect(getGrossIncome(salary)).toEqual(8333);
    });

    it('calculate income tax', () => {
      expect(getIncomeTax(salary)).toEqual(2079);
    });

    it('calculate super', () => {
      expect(getSuper(8333, superannuation)).toEqual(750);
    });

    it('calculate net income', () => {
      expect(getNetIncome(8333, 2079)).toEqual(6254);
    });

    it('calculate pay', () => {
      expect(getPay(6254, 750)).toEqual(5504);
    });
  });
});
