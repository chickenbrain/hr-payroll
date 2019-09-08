import React from "react";
import { Table } from "./components/themes"
import PayslipContent from "./PayslipContent"

const PayslipTable = ({props}) => (
    <Table>
        <PayslipContent data={props} />
    </Table>
)

export default PayslipTable;