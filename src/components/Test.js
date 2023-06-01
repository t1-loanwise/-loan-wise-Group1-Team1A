import React from 'react'
import SettingAndPrivacy from './SettingAndPrivacy'
import PrivacyForm from './PrivacyForm'

const Test = () => {
  return (
    <div>
        <SettingAndPrivacy component={<PrivacyForm />} />
    </div>
  )
}

export default Test