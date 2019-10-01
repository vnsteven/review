import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logOut } from '../../store/actions/auth';

import Button from '@material-ui/core/Button';

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

Account.propTypes = {
  history: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
}

export default connect(
  null,
  { logOut }
)(Account);
