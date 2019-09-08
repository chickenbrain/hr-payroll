import React, { useContext } from "react";
import {
    PayslipContainer,
    Name,
    Title,
    Button,
    Row,
} from "./components/themes"
import PayslipTable from "./PayslipTable"
import { UserConsumer } from './UserContext'

require('dotenv').config()

const Payslip = () => {
    const user = useContext(UserConsumer);

    return (
        <PayslipContainer>
            <Title>Payslip</Title>
            <Name>{user.data.name}</Name>
            <PayslipTable props={user.data} />
            <Row>
                <Button value='Pay' onClick={(e) => {
                   handleSubmit(e, user.data)
                }} />
            </Row>
        </PayslipContainer>
    )
}

const handleSubmit = async (event, data) => {
    event.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_PAY_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });
      const body = await response.text();
      console.log(body)
      return body
    } catch (error) {
      console.log(error);
    }
  };

export default Payslip
