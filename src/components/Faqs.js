import React from 'react'
import plus from '../assets/icons/plus.png'

const Faqs = () => {
    const faqs = [
        {
            question:"Is the Basic Plan suitable for small financial institutions? ",
            answer: ""
        },
        {
            question:"Can I upgrade from the Basic Plan to the Premium Plan at any time? ",
            answer: ""
        },
        {
            question:"Can I add more users to my account on the Basic Plan? ",
            answer: ""
        },
        {
            question:"Does the Premium Plan offer a free trial?",
            answer: ""
        },
        {
            question:"Is white-labeling included in the Basic Plan?",
            answer: ""
        },
        {
            question:"How does the flexible pricing work for the Premium Plan?",
            answer: ""
        },
        {
            question:"Can I customize the risk models on the Basic Plan? ",
            answer: ""
        },
        {
            question:"Are there any hidden fees with either pricing plan? ",
            answer: ""
        },
        {
            question:"Does the Premium Plan offer more advanced reporting capabilities? ",
            answer: ""
        },
        {
            question:"How much does the Basic Plan cost? ",
            answer: ""
        }
    ]
    const faqList = faqs.map(faq => <li><div>{faq.question}</div><img src={plus} height='20' alt='plus'/></li>)
  return (
    <div className='faq-content'>
    <h4>Frequently asked <br/>
    questions</h4>
        <ul className='faqs'>
            {faqList}
        </ul>
    </div>
  )
}

export default Faqs