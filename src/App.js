import React, { useState } from "react";
import styled from "styled-components";
import { Normalize } from "styled-normalize"
import Calculator from "./Calculator"
import Payslip from "./Payslip"
import { UserProvider } from './UserContext';

const App = () => {
  const [state, setState] = useState({
    hasSubmit: false,
    name: "",
    firstName: "",
    lastName: "",
    salary: 0,
    superannuation: 0,
    payslip: {
      annualIncome: 0
    }
  });

  return (
    <UserProvider 
      value={{
        data: state,
        updateFormStatus: (data) => {
          setState({
            name: data.name,
            firstName: data.firstName,
            lastName: data.lastName,
            salary: data.salary,
            superannuation: data.super,
            hasSubmit: true,
            payslip: {
              grossIncome: data.payslip.grossIncome,
              incomeTax: data.payslip.incomeTax,
              netIncome: data.payslip.netIncome,
              superannuation2: data.payslip.superannuation2,
              pay: data.payslip.pay,
            }
          });
        }
      }}>
      <AppContainer className="App">
        <Normalize />
        {
          state.hasSubmit ? <Payslip /> : <Calculator />
        }
      </AppContainer>
    </UserProvider>
  )
}

const AppContainer = styled.div`
  flex: 1;
  margin: auto
  max-width: 48em;
`;

export default App;
