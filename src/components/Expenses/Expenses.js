import { useState } from "react";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('2022')

    const yearSelectHandler = yearSelected => {
        setSelectedYear(yearSelected)
    }

    const filteredYear = props.items.filter(e => {
        return e.date.getFullYear().toString() === selectedYear
    })


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onYearSelect={yearSelectHandler} />
                <ExpensesChart expenses={filteredYear}/> 
                <ExpensesList items={filteredYear}/>
            </Card>
    </div>
    )
}

export default Expenses;