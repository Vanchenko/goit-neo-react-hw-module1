import css from './TransactHistory.module.css';


const TransactHistory = ({ items }) => (
    <table className={css.transactHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead> 
        <tbody>    
        {items.map(elem => (<tr key={elem.id} className={css.item}>
            <td>{elem.type}</td>
            <td>{elem.amount}</td>
            <td>{elem.currency}</td>
        </tr>))}
       </tbody>         
  </table>
);


export default TransactHistory;