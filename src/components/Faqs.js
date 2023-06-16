import React from 'react'
import Accordion from './Accordion'
import TextHeader from "./TextHeader";

const Faqs = () => {
    const faqs = [
        {
            question:"Is the Basic Plan suitable for small financial institutions? ",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        },
        {
            question:"Can I upgrade from the Basic Plan to the Premium Plan at any time? ",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        },
        {
            question:"Can I add more users to my account on the Basic Plan? ",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        },
        {
            question:"Does the Premium Plan offer a free trial?",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        },
        {
            question:"Is white-labeling included in the Basic Plan?",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        },
        {
            question:"How does the flexible pricing work for the Premium Plan?",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        },
        {
            question:"Can I customize the risk models on the Basic Plan? ",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        },
        {
            question:"Are there any hidden fees with either pricing plan? ",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        },
        {
            question:"Does the Premium Plan offer more advanced reporting capabilities? ",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        },
        {
            question:"How much does the Basic Plan cost? ",
            answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem`
        }
    ];

    const faqList = faqs.map((faq, index)=> <li key={index}>
        <Accordion title={faq.question} content={faq.answer}  />
        </li>)
  return (
    <div className="faq-content" id="faqs">
      <TextHeader
        title="Frequently asked questions"
        description="Choose the pricing plan that works best for you, whether you’re looking for casual transactions or flexible customisations "
      />
      <h4>
        Frequently asked <br />
        questions
      </h4>
      <ul className="faqs">{faqList}</ul>
    </div>
  );
}

export default Faqs