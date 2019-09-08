import React from "react";
import {
  Title,
  Row,
  FirstNameInput,
  LastNameInput,
  DollarInput,
  PercentInput,
  Button,
  InputContainer,
  InputContainerIcon
} from "./components/themes"
import { UserConsumer } from './UserContext';
import { calculatePayslip } from "./components/calculator"


class Calculator extends React.Component {
  state = {
    values: {
      firstname: "",
      lastname: "",
      salary: "",
      super: ""
    }
  }

  handleChange = event => {
    const newValuesObj = Object.assign({}, this.state.values, {[event.target.name]: event.target.value});
    this.setState({
      values: newValuesObj
    })
  }

  render() {
    return (
        <UserConsumer>
            {context => (
              <form onSubmit={() => {
                const calculatedData = calculatePayslip(this.state.values.salary, this.state.values.super)
                context.updateFormStatus({
                    name: this.state.values.firstname + " " + this.state.values.lastname,
                    firstName: this.state.values.firstname,
                    lastName: this.state.values.lastname,
                    salary: parseInt(this.state.values.salary),
                    super: parseInt(this.state.values.super),
                    payslip: {
                      grossIncome: calculatedData.gross,
                      incomeTax: calculatedData.incomeTax,
                      netIncome: calculatedData.netIncome,
                      superannuation2: calculatedData.super,
                      pay: calculatedData.pay,
                    }
                })
              }}>
                  <Title>Employee Info</Title>
                  <Row>
                      <InputContainer>
                      <FirstNameInput
                          name="firstname"
                          value={this.state.values.firstname}
                          onChange={this.handleChange}
                      />
                      </InputContainer>
                      <InputContainer>
                      <LastNameInput
                          name="lastname"
                          value={this.state.values.lastname} 
                          onChange={this.handleChange}
                      />
                      </InputContainer>
                  </Row>
                  <Row>
                  <InputContainer>
                      <InputContainerIcon leftSide={true}>$</InputContainerIcon>
                      <DollarInput
                      name="salary"
                      value={this.state.values.salary} 
                      onChange={this.handleChange} 
                      />
                      <InputContainerIcon leftSide={false}>.00</InputContainerIcon>
                      </InputContainer>
                      <InputContainer>
                      <InputContainerIcon leftSide={true}>%</InputContainerIcon>
                      <PercentInput
                          name="super"
                          value={this.state.values.super} 
                          onChange={this.handleChange}
                      />
                      </InputContainer>
                  </Row>
                  <Row>
                      <Button
                        value='Generate Payslip'
                      />
                  </Row>
              </form>
            )
            }
        </UserConsumer>
    )
  }
}

export default Calculator;
