import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="notification-icon info" />
      <div className="message-container">
        <h1 className="message-heading">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="notification-icon warning" />
      <div className="message-container">
        <h1 className="message-heading">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="notification-icon error" />
      <div className="message-container">
        <h1 className="message-heading">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the files
        </p>
      </div>
    </Notification>
  )

  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="notification-icon success" />
      <div className="message-container">
        <h1 className="message-heading">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}
export default AlertNotifications
