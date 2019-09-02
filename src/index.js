import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

function App() {
  return (
    <AppContainer className="App">
      <Title>Employee Info</Title>
      <form>
        <FirstNameInput />
        <LastNameInput />
        <DollarInput />
        <PercentInput />
        <SubmitButton />
      </form>
    </AppContainer>
  );
}

const Title = styled.h1``;

const AppContainer = styled.div`
  flex: 1;
`;

const Input = styled.input`
  border-radius: 5px;
`;

const FirstNameInput = styled(Input)``;

const LastNameInput = styled(Input)``;

const DollarInput = styled(Input)``;

const PercentInput = styled(Input)``;

const SubmitButton = styled(Input)``;

FirstNameInput.defaultProps = {
  type: "text",
  name: "name",
  placeholder: "First Name"
};

LastNameInput.defaultProps = {
  type: "text",
  name: "name",
  placeholder: "Last Name"
};

DollarInput.defaultProps = {
  type: "text",
  name: "name",
  placeholder: "Annual Salary"
};

PercentInput.defaultProps = {
  type: "text",
  name: "name",
  placeholder: "Super Rate"
};

SubmitButton.defaultProps = {
  type: "submit",
  value: "Generate Payslip"
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
