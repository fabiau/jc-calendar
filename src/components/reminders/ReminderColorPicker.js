import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReminderColorCircle from './ReminderColorCircle';
import ExpandIcon from '../icons/ExpandIcon';
import { ALL_COLORS } from '../../helpers/colors';
import ReminderColorPickerItem from './ReminderColorPickerItem';

// Should be used with Formik.Field `as` prop
class ReminderColorPicker extends Component {
  static propTypes = {
    value: PropTypes.oneOf(ALL_COLORS).isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.ref = createRef();
  }

  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  close = () => {
    this.setState(() => ({
      open: false,
    }));
  };

  handleOutsideClick = (e) => {
    if (this.ref.current !== null && !this.ref.current.contains(e.target)) {
      this.close();
    }
  };

  handleSelectColor = (colorName) => {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: colorName,
      },
    });
    this.close();
  };

  renderColorList = () => {
    const { value } = this.props;

    return (
      <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
        <ul
          tabIndex="0"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {ALL_COLORS.filter((color) => color !== value).map((colorName) => (
            <ReminderColorPickerItem
              key={colorName}
              colorName={colorName}
              onClick={() => this.handleSelectColor(colorName)}
            />
          ))}
        </ul>
      </div>
    );
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  render() {
    const { className, name, value } = this.props;

    return (
      <div ref={this.ref} name={name} className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          className={classNames(
            'relative w-auto bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
            className
          )}
          onClick={this.toggleOpen}
        >
          <span className="flex items-center">
            <ReminderColorCircle colorName={value} />
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ExpandIcon svgClassName="h-5 w-5 text-gray-400" />
          </span>
        </button>

        {this.state.open && this.renderColorList()}
      </div>
    );
  }
}

export default ReminderColorPicker;
