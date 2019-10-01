import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import { logOut } from '../../store/actions/auth';

const accountStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem'
}

function Account({
  history,
  logOut
}) {
  function handleSubmit() {
    logOut(history);
  }

  return (
    <div style={accountStyle}>
      <Button
        variant='contained'
        color='primary'
        onClick={handleSubmit}
      >
        Se déconnecter
      </Button>
    </div>
  );
}

export default connect(
  null,
  { logOut }
)(Account);
