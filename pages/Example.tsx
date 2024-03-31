import React from 'react'
import Example from "./example.mdx"

function example() {
  return (
    <Example
  components={{
    Planet() {
      return <span style={{color: 'tomato'}}>Pluto</span>
    }
  }}
/>
  )
}

export default example