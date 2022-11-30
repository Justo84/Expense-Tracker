import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const closeEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} type="button">Add New Exepense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} editOff={closeEditingHandler}/>}
        </div>
    )
}

export default NewExpense