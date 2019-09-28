import React from 'react';

import { connect } from 'react-redux';

import { logOut } from '../../store/actions/auth';

const accountStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem'
}

const buttonStyle = {
  backgroundColor: '#0074D9',
  color: 'white',
  fontSize: '1rem',
  padding: '0.5rem'
};

function Account({
  history,
  logOut
}) {
  function handleSubmit() {
    logOut(history);
  }

  return (
    <div style={accountStyle}>
      <button
        style={buttonStyle}
        onClick={handleSubmit}
      >
        Se déconnecter
      </button>
    </div>
  );
}

export default connect(
  null,
  { logOut }
)(Account);
