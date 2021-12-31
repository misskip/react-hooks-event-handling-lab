// Code EyesOnMe Component Here
import React from 'react'

export default function EyesOnMe() {
    return (
    <input
        onFocus={(e) => {
          console.log('Good!');
        }}
        placeholder="text"
    />
    )
  }
 /* 
  function Example() {
    return (
    <input
        onBlur={(e) => {
          console.log('Hey! Eyes on me!');
        }}
        placeholder="text"
    />
    )
  }
 */ 