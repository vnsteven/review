import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUsers } from '../../../store/actions/user';
import UserCard from '../UserCard/UserCard';

import './UserList.scss';

function UserList({
  getUsers,
  user: { users }
}) {
  useEffect(() => {
    getUsers();
  }, [getUsers])

  return (
    <div className="user-list">
      <h1 className="user-list--title">Amis</h1>
      {
        users.map(user => (
          <UserCard
            id={user._id}
            key={user._id}
            name={user.name}
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);
