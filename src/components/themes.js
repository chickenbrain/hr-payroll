import styled from 'styled-components';

const PayslipContainer = styled.div``;

const Name = styled.h2``;

const Title = styled.h1``;

const Input = styled.input`
  border-radius: 5px;
  padding: 5px;
  outline: none;
  border: 1px solid #bdc3c7;

  :not([type="submit"]) {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;
  justify-content: space-between;
`;

const FirstNameInput = styled(Input)``;

const LastNameInput = styled(Input)``;

const DollarInput = styled(Input)`
    border-radius: 0;
    border-left: none;
    border-right: none;
`;

const PercentInput = styled(Input)`
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`;

const Button = styled(Input)`
    background-color: #3498db;
    border: 0;
    color: #ffffff;
    margin-left: auto;
    padding: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  flex: 0 47%;
`

const InputContainerIcon = styled.div`
  border-top-left-radius: ${props => props.leftSide ? 5 : 0 }px;
  border-bottom-left-radius: ${props => props.leftSide ? 5 : 0 }px;
  border-top-right-radius: ${props => props.leftSide ? 0 : 5 }px;
  border-bottom-right-radius: ${props => props.leftSide ? 0 : 5 }px;
  border: 1px solid #bdc3c7;
  padding: 5px 10px;
  background: #ecf0f1;
  text-align: center;
`

FirstNameInput.defaultProps = {
  type: 'text',
  name: 'name',
  placeholder: 'Firstname',
};

LastNameInput.defaultProps = {
  type: 'text',
  name: 'name',
  placeholder: 'Lastname',
};

DollarInput.defaultProps = {
  type: 'number',
  name: 'name',
  placeholder: 'Annual Salary',
  min: '0',
  step: '1',
};

PercentInput.defaultProps = {
  type: 'number',
  name: 'name',
  placeholder: 'Super Rate',
  min: '0',
  step: '1',
};

Button.defaultProps = {
  type: 'submit',
};

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    tr:nth-child(odd) {
        background-color: #ecf0f1;
        border-top: 1px solid #bdc3c7;
        border-bottom: 1px solid #bdc3c7;
    }

    td {
        padding-right: 20px;
    }

`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
    padding: 5px;
    font-weight: ${(props) => (props.scope ? 'bold' : 'normal')};
`;

export {
  PayslipContainer,
  Name,
  Title,
  Input,
  Row,
  FirstNameInput,
  LastNameInput,
  DollarInput,
  PercentInput,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  InputContainer,
  InputContainerIcon,
};
