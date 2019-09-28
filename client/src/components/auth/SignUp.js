import React from 'react';

function SignUp() {
  return (
    <form style={{ margin: '1rem', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Sign up</h1>
      <input style={{ border: '1px solid black' }} />
      <br />
      <input style={{ border: '1px solid black' }} />
      <br />
      <button type="submit" style={{ backgroundColor: '#0074D9', color: 'white' }}>Sign up</button>
    </form>
  )
}

export default SignUp;
