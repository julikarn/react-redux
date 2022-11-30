
import React from 'react'

const User = (props) => {

    console.log(props.data.name)

    const { data } = props;
  return (
    <div>
      <h1>User component</h1>
      <h4>{data.name}</h4>
      <h5>{data.age}</h5>
    </div>
  )
}

export default User
