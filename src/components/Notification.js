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
                        <td className='sec-th'>In-app Notification</td>
                        <td className='sec-th'>Email Notification</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='tab-data'>New Applications</td>
                        <td className='ts-style tab-data'>
                            <ToggleSwitch />
                        </td>
                        <td className='ts-style tab-data'>
                            <ToggleSwitch />
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-data'>Loan repayment</td>
                        <td className='ts-style tab-data'>
                            <ToggleSwitch />
                        </td>
                        <td className='ts-style tab-data'>
                            <ToggleSwitch />
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-data pad-bottom'>Loan due dates</td>
                        <td className='ts-style tab-data pad-bottom'>
                            <ToggleSwitch />
                        </td>
                        <td className='ts-style tab-data pad-bottom'>
                            <ToggleSwitch />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Notification