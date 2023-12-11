import React from 'react'

export default function Alert(props) {
  return (
    props.almssage &&
    <>
    <div className={`alert alert-${props.almssage.type} alert-dismissible fade show`} role="alert">
  <strong>{props.almssage.type}</strong>{props.almssage.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </>
  )
}
