import React from 'react'
import OutlineButton from './OutlineButton'
import FillButton from './FillButton'
import mark from '../assets/icons/Vector.png'

const PriceCard = (props) => {
    const hasTwoButton = props.hasTwoButton ?? false;
    const points = props.points?.map((point, index) => <li key={index}><img src={mark} alt="Logo" height="15" /><p>{point}</p></li>)

  return (
    <div className={`price-card ${props.active ? 'active' : ''}`}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className='row justify-center align-center'>
            {props.oldPrice != null && <div className='price-discount'><sup>$</sup>{props.oldPrice}</div>}
            <div className='price'><sup>$</sup>{props.price}</div>
            <div className='price-label'>
            <div>{props.priceLabel}</div>
            <div>{props.priceLabel2}</div>
            </div>            
        </div>
        {
          hasTwoButton === true &&  
          <div className='row'>
          <div><FillButton label={props.firstButtonLabel} /></div>
            <div><OutlineButton label={props.lastButtonLabel} /></div>
          </div>
        }
        <div className='row'>
            {props.outlineButtonLabel != null && <OutlineButton label={props.outlineButtonLabel} />}
            {props.fillButtonLabel != null && <FillButton label={props.fillButtonLabel} />}
        </div>
        <ul>
        {points}
        </ul>
        
    </div>
  )
}

export default PriceCard