import React from 'react'
import SettingAndPrivacy from '../components/SettingAndPrivacy'
import PrivacyForm from '../components/PrivacyForm'

const Test = () => {
  return (
    <div>
        <SettingAndPrivacy title='Security & Privacy' subtitle='Protect your account with maximum security' component={<PrivacyForm />} />
    </div>
  )
}

export default Test