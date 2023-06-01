import React from 'react'
import SettingAndPrivacy from './SettingAndPrivacy'
import PrivacyForm from './PrivacyForm'

const Test = () => {
  return (
    <div>
        <SettingAndPrivacy title='Security & Privacy' subtitle='Protect your account with maximum security' component={<PrivacyForm />} />
    </div>
  )
}

export default Test