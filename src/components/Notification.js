import React from 'react'
import { useState } from 'react';
import "../styles/Notification.css"
import "../styles/AccordianContent.css"
import ToggleSwitch from './ToggleSwitch';

const Notification = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <div>
            <table className='customer'>
                <thead>
                    <tr>
                        <td className='first-th'></td>
                        <td className='sec-th'>in-app Notification</td>
                        <td className='sec-th'>Email Notification</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>New Applications</td>
                        <td className='ts-style'>
                            <ToggleSwitch />
                        </td>
                        <td className='ts-style'>
                            <ToggleSwitch />
                        </td>
                    </tr>
                    <tr>
                        <td>Loan repayment</td>
                        <td className='ts-style'>
                            <ToggleSwitch />
                        </td>
                        <td className='ts-style'>
                            <ToggleSwitch />
                        </td>
                    </tr>
                    <tr>
                        <td>Loan due dates</td>
                        <td className='ts-style'>
                            <ToggleSwitch />
                        </td>
                        <td className='ts-style'>
                            <ToggleSwitch />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Notification