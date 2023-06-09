import{ useState } from "react";
import '../styles/PortfolioTable.css';
import UseTable from './Portfolio/useTable';
import FooterTable from './Portfolio/FooterTable';
import { Link, NavLink } from "react-router-dom";

const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = UseTable(data, page, rowsPerPage);
    return (
      <>
        <table className="table">
          <thead className="tableRowHeader">
            <tr>
              <th><Link className="tableLinks">ID</Link></th>
              <th><Link className="tableLinks">Name</Link></th>
              <th><Link className="tableLinks">Category</Link></th>
              <th><Link className="tableLinks">Amount</Link></th>
              <th><Link className="tableLinks">Due Date</Link></th>
              <th><Link className="tableLinks">Status</Link></th>
            </tr>
          </thead>
          <tbody>
            {slice.map((el) => (
              <tr className="tableRowItems" key={el.id}>
                <td className="tableCell"><NavLink className="tableLinks">{el.id}</NavLink></td>
                <td className="tableCell"><NavLink className="tableLinks">{el.Name}</NavLink></td>
                <td className="tableCell"><NavLink className="tableLinks">{el.Category}</NavLink></td>
                <td className="tableCell"><NavLink className="tableLinks">{el.Amount}</NavLink></td>
                <td className="tableCell"><NavLink className="tableLinks">{el.DueDate}</NavLink></td>
                <td className={el.Status}><NavLink className="tableLinks"><button>{el.Status}</button></NavLink></td>
              </tr>
            ))}
           
          </tbody>
        </table>
        <FooterTable className="pagination" range={range} slice={slice} setPage={setPage} page={page} />
      </>
    );
}

export default Table