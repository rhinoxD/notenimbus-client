const Alert = ({ alert }) => {
  return (
    <div style={{ height: '40px' }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role='alert'
        >
          {alert.message}
        </div>
      )}
    </div>
  )
}

export default Alert
