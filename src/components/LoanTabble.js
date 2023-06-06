import React from 'react'

const LoanTabble = () => {
  return (
    <div>
            <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Catagory</th>
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
                <button>Active</button>
            </td>
        </tr>
        <tr>
            <td>#0123456789</td>
            <td>Frances Gregory</td>
            <td>Business</td>
            <td>N560,000.00</td>
            <td>12th Aug. 2023</td>
            <td>
                <button>Completed</button>
            </td>
        </tr>
        <tr>
            <td>#0123456789</td>
            <td>Frances Gregory</td>
            <td>Business</td>
            <td>N560,000.00</td>
            <td>12th Aug. 2023</td>
            <td>
                <button>Declined</button>
            </td>
        </tr>
        <tr>
            <td>#0123456789</td>
            <td>Frances Gregory</td>
            <td>Personal</td>
            <td>N560,000.00</td>
            <td>12th Aug. 2023</td>
            <td>
                <button>Declined</button>
            </td>
        </tr>
        <tr>
            <td>#0123456789</td>
            <td>Frances Gregory</td>
            <td>Personal</td>
            <td>N560,000.00</td>
            <td>12th Aug. 2023</td>
            <td>
                <button>Completed</button>
            </td>
        </tr>
    </table>
    </div>
  )
}

export default LoanTabble