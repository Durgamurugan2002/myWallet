import { useEffect, useState } from "react";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const HomeComponent = (props) => {
    const [transactions, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    
    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);


    };


    const calculateBalance= () => {
        let exp = 0;
        let inc = 0;
        transactions.map((payload) => {
            payload.type === "EXPENSE"
            ? (exp = exp + payload.amount)
            : (inc = inc + payload.amount);
        });
       updateExpense(exp);
       updateIncome(inc);
    };
     
    useEffect(() => calculateBalance(), 
    [transactions] );

    


    return(
        <div>
          <OverviewComponent
           addTransaction={addTransaction} 
           expense={expense}
           income={income}
           />
        <TransactionComponent transactions={transactions}/>
            </div>
    );
}


export default HomeComponent
