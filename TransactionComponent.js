import { useEffect, useState } from "react";
import "./Transaction.css";
const TransactionCell = (props) => {
    return(<div className="cell">
   
        <span>{props.payload.desc}</span>
        <span>{props.payload.amount}</span>
       
    </div>
 
    );
};
const TransactionComponent = (props) => {
    const [searchText, updateSearchText] =useState("");
    const [filteredTransaction, updateTxn] =useState(props.transactions);
    const filterData = () => {
if(!searchText || !searchText.trim().length){
    updateTxn(props.transactions);
    return;
}
let txn = [...props.transactions];
txn=txn.filter((payload) => 
payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
);
updateTxn(txn)
    };
useEffect(()=>filterData(searchText),[props.transactions]);
    return(
        <div className="transaction">
            <h1>Transactions</h1>
            <input placeholder="Search" 
            value={searchText} 
            onChange={(e)=> {
                updateSearchText(e.target.value);
            filterData(e.target.value)}}
            />
            {filteredTransaction?.length
             ? filteredTransaction.map((payload)=> (
             <TransactionCell payload={payload}/>
             )):""}
            </div>
    );
}


export default TransactionComponent