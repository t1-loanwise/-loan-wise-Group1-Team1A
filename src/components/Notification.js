import React from 'react'
import { useState } from 'react';
import "../styles/Notification.css"
import ToggleSwitch from './ToggleSwitch';

const Notification = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };
    return (
        <div>
            {items.map((item, index) => (
                <div key={item.title}>
                    <button className='not-button' onClick={() => handleClick(index)}>{item.title}

                        <h4>Control alerts and notification settings</h4>

                    </button>

                    {index === activeIndex &&
                        <div>
                            <table className='customer'>
                                <thead>
                                    <tr>
                                        <th className='first-th'></th>
                                        <th>in-app Notification</th>
                                        <th>email Notification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>New Applications</td>
                                        <td>
                                            <ToggleSwitch label={"nin"} />
                                        </td>
                                        <td>
                                            <ToggleSwitch label={"nen"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Loan repayment</td>
                                        <td>
                                            <ToggleSwitch label={"lrin"} />
                                        </td>
                                        <td>
                                            <ToggleSwitch label={"lren"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Loan due dates</td>
                                        <td>
                                            <ToggleSwitch label={"lddin"} />
                                        </td>
                                        <td>
                                            <ToggleSwitch label={"lddem"} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {item.content}
                        </div>
                    }
                </div>
            ))}
        </div>
    );
    return (
        <div>Notification</div>
    )
}

export default Notification