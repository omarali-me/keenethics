import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import 'whatwg-fetch';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: {
        value: '',
        error: false,
      },
      lastname: {
        value: '',
        error: false,
      },
      email: {
        value: '',
        error: false,
      },
      phone: {
        value: '',
        error: false,
      },
      message: {
        value: '',
        error: false,
      },
      isPending: false,
      status: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      isPending: true,
    });

    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then(response => response.json()).then((json) => {
      const state = {
        isPending: false,
        status: json.status.toString(),
      };

      if (json && json.errorField) {
        Object.assign(state, json.errorField);
      }

      this.setState(state);
    });
  }

  onChange({ target }) {
    this.setState({
      [target.name]: {
        value: target.value,
        error: '',
      },
    });
  }

  render() {
    const {
      isPending,
      status,
      firstname,
      lastname,
      email,
      phone,
      message,
    } = this.state;

    return (<div className="contacts-form">
      <form onSubmit={this.onSubmit}>
        <div className="contacts-title">Say hello</div>
        <div className="input-cols">
          <div className="input-wrap input-wrap-2">
            <input
              className={firstname.error ? 'error' : null}
              name="firstname"
              placeholder="First Name"
              type="text"
              onChange={this.onChange}
            />
          </div>
          <div className="input-wrap input-wrap-2">
            <input
              className={lastname.error ? 'error' : null}
              name="lastname"
              placeholder="Last Name"
              type="text"
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="input-cols">
          <div className="input-wrap input-wrap-2 input-wrap-l">
            <input
              className={email.error ? 'error' : null}
              name="email"
              placeholder="Your Email"
              type="mail"
              onChange={this.onChange}
            />
          </div>
          <div className="input-wrap input-wrap-2 input-wrap-l">
            <input
              className={phone.error ? 'error' : null}
              name="phone"
              placeholder="Your Phone"
              type="tel"
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="input-wrap input-wrap-2 input-wrap-ta">
          <textarea
            className={message.error ? 'error' : null}
            name="message"
            placeholder="Message"
            onChange={this.onChange}
          />
        </div>
        {status ? (
          <div className="form-status">{status}</div>
        ) : null}
        <button
          type="submit"
          className={isPending ? 'button button-send pending' : 'button button-send'}
        >
          <img src="/static/images/svg/send.svg" alt="send" />
        </button>
      </form>
    </div>)
  }
}

ContactForm.propTypes = {
  isPending: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};
