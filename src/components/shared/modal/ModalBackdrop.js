import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class ModalBackdrop extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  handleClick = (e) => {
    if (e.target === this.ref.current) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div
        ref={this.ref}
        onClick={this.handleClick}
        className="fixed top-0 left-0 flex flex-col lg:py-28 h-full w-full bg-black z-20 bg-opacity-30"
      >
        {this.props.children}
      </div>
    );
  }
}

export default ModalBackdrop;
