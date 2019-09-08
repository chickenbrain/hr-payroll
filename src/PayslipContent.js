import React from "react";
import {
    TableBody,
    TableRow,
    TableCell,
} from "./components/themes"
import { calculatePayslip } from "./components/calculator"

const PayslipContent = ({data}) => {
    const calculatedData = calculatePayslip(data.salary, data.superannuation)

    const renderRows = [                
        { title: "Pay Date", value: "30 March 2013" },
        { title: "Pay Frequency", value: "Monthly" },
        { title: "Annual Income", value: formatter.format(data.salary) },
        { title: "Gross Income", value: formatter.format(calculatedData.gross) },
        { title: "Income Tax", value: formatter.format(calculatedData.incomeTax) },
        { title: "Net Income", value: formatter.format(calculatedData.netIncome) },
        { title: "Super", value: formatter.format(calculatedData.super) },
        { title: "Pay", value: formatter.format(calculatedData.pay) },
    ]

    return (
        <TableBody>
            {
                renderRows.map((item, key) =>
                    <TableRow key={key}>
                        <TableCell scope="row">{item.title}</TableCell>
                        <TableCell>{item.value}</TableCell>
                    </TableRow>
                )
            }
        </TableBody>
    )
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export default PayslipContent;