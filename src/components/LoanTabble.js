import React from "react";
import "../styles/LoanTabble.css";

const LoanTabble = () => {
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Due Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>#0123456789</td>
          <td>Frances Gregory</td>
          <td>Business</td>
          <td>N560,000.00</td>
          <td>12th Aug. 2023</td>
          <td>
            <button className="activve">Active</button>
          </td>
        </tr>
        <tr>
          <td>#0123456789</td>
          <td>Frances Gregory</td>
          <td>Business</td>
          <td>N560,000.00</td>
          <td>12th Aug. 2023</td>
          <td>
            <button className="completeed">Completed</button>
          </td>
        </tr>
        <tr>
          <td>#0123456789</td>
          <td>Frances Gregory</td>
          <td>Business</td>
          <td>N560,000.00</td>
          <td>12th Aug. 2023</td>
          <td>
            <button className="declineed">Declined</button>
          </td>
        </tr>
        <tr>
          <td>#0123456789</td>
          <td>Frances Gregory</td>
          <td>Personal</td>
          <td>N560,000.00</td>
          <td>12th Aug. 2023</td>
          <td>
            <button className="declineed">Declined</button>
          </td>
        </tr>
        <tr>
          <td>#0123456789</td>
          <td>Frances Gregory</td>
          <td>Personal</td>
          <td>N560,000.00</td>
          <td>12th Aug. 2023</td>
          <td>
            <button className="completeed">Completed</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LoanTabble;
