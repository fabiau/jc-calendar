import React, { Component } from 'react';
import { DateTime } from 'luxon';
import { connect } from 'react-redux';
import { setMonth } from '../actions/month';
import AppHeader from './AppHeader';
import MonthlyCalendar from './calendar/MonthlyCalendar';
import ReminderModal from './reminders/ReminderModal';

function setNavigationBarHeightCSSVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', setNavigationBarHeightCSSVariable);

    if (this.props.month === null) {
      this.props.dispatch(setMonth(DateTime.local().toFormat('yyyy-MM')));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', setNavigationBarHeightCSSVariable);
  }

  render() {
    return (
      <div className="h-screen-nav-fix w-screen font-montserrat overflow-hidden bg-gray-50 text-gray-900">
        <div className="w-full h-full flex flex-col">
          <AppHeader />
          {this.props.month && <MonthlyCalendar />}
          <ReminderModal />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    month: state.month,
  };
}

export default connect(mapStateToProps)(App);
