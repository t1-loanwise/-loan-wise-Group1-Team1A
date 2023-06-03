import React from 'react'
import SettingAndPrivacy from './SettingAndPrivacy'
import PrivacyForm from './PrivacyForm'
import UseLoanwise from '../components/UseLoanwise'

const Test = () => {
  return (
    <div>
        <SettingAndPrivacy title='Security & Privacy' subtitle='Protect your account with maximum security' component={<PrivacyForm />} />
        <SettingAndPrivacy title='Second' subtitle='securityffff' component={<UseLoanwise />} />
    </div>
  )
}

export default Test