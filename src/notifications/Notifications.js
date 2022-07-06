import './Notifications.css'
import { useState, createContext, useContext } from "react"

const Notification = ({ message, severity, anotherClass }) => {

    const notificationStyle = {
        position: 'absolute',
        bottom: 200,
        right: 2,
        width: 'auto',
        height: 'auto',
        color: 'white',
        padding: '10px 20px 10px 20px',
        borderRadius: '10px'
    }

    const config = true ? {
        style: notificationStyle,
        className: `${severity === 'error' ? 'Error' : 'Success'} ${anotherClass || ''}`
    } : {}

    if(message === '') return

    return (
        <div {...config}>
            { message }
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [ configMessage, setConfigMessage ] = useState({
        severity: 'success',
        message: ''
    })
    const [anotherClass, setAnotherClass] = useState('')

    const setNotification = (sev, msg, timeout = 3) => {
        setConfigMessage({ severity: sev, message: msg})
        setTimeout(() => {
            setAnotherClass('Animation')
        }, (timeout - 1) * 1500)

        setTimeout(() => {
            setConfigMessage({ ...configMessage, message: ''})
        }, timeout * 1500)
    }

    return(
        <NotificationContext.Provider value= { setNotification } >
            <Notification message={configMessage.message} severity={configMessage.severity} otherClass={anotherClass}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}