import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getInbox } from '../../store/actions/review';

import InboxItem from './InboxItem';

function InboxList({
  getInbox,
  review: { inbox }
}) {
  useEffect(() => {
    getInbox();
  }, [getInbox])

  return (
    <Fragment>
      {
        inbox.map(el => (
          <InboxItem
            id={el._id}
            key={el._id}
            sender={el.sender}
            title={el.title}
            description={el.description}
          />
        ))
      }
    </Fragment>
  )
}

InboxList.propTypes = {
  getInbox: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  review: state.review
})

export default connect(
  mapStateToProps,
  { getInbox }
)(InboxList);
