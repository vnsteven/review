import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/user';
import UserCard from './UserCard';

function UserList({
  getUsers,
  user: { users }
}) {
  useEffect(() => {
    getUsers();
  }, [getUsers])

  return (
    <div>
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

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);
