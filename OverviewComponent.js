import { useState } from "react";
import "./Overview.css"

const AddTransactionView = (props) => {
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");
    
    const addTransaction =()=>{
        props.addTransaction({amount:Number(amount),
            desc,
            type,
             id: Date.now()});
        props.toggleAddTxn();
    };
return (
<>


<div className="addview">
<button className="addTransaction" onClick={addTransaction}> Add Transaction </button>
            <div className="radiobox">
            <input type="radio" id="expense" name="type" value="EXPENSE" checked={type==="EXPENSE"} onChange={(e)=>setType(e.target.value)}/>
            <label htmlFor="expense">Expense</label>
            <input type="radio" id="income" name="type" value="INCOME"checked={type==="INCOME"} onChange={(e)=>setType(e.target.value)}/>
            <label htmlFor="income">Income</label> 
            </div> 

            <input placeholder="Description" value={desc}  onChange={(e)=>setDesc(e.target.value)}/>
            <input placeholder="Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/> 
           
    
            </div>



</>
);
};

const OverviewComponent = (props) => {
    const [isAddTxnVisible, toggleAddTxn] = useState(false);
    return(
    <>
        <div className="balanceBox">
            Balance: Rs.{props.income - props.expense}
            <button className="addTransaction" onClick={()=>toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel" : "Add"}</button>
      
            </div>

            {isAddTxnVisible && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}/>}
            <div className="expense">
            <div className="expensebox">

                Expense<span>Rs.{props.expense}</span>
            </div>
            <div className="expensebox1" > 
                Income<span>Rs.{props.income}</span>
            </div>
            </div>
            </>

            
           



            

           
        
    );
}


export default OverviewComponent