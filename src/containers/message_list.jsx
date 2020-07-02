import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.setMessages();
  }

  setMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="message-list col-sm-7">
        {
          this.props.messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
