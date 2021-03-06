import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';
import './App.module.scss';

import ScrollTop from './components/features/ScrollTop/ScrollTop';

import Home from './components/views/Home/Home';
import Trips from './components/views/Trips/TripsContainer';
import Countries from './components/views/Countries/CountriesContainer';
import Regions from './components/views/Regions/RegionsContainer';
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';
import TripContainer from './components/views/Trip/TripContainer';
import Country from './components/views/Country/CountryContainer';

import parseTrips from './utils/parseTrips';
import { setMultipleStates } from './redux/globalRedux';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  };

  constructor(props) {
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trips != this.props.trips) {
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollTop>
          <MainLayout>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 1 }}
              atActive={{ opacity: 1 }}
              className='switch-wrapper'
            >
              <Route exact path='/' component={Home} />
              <Route exact path='/trips' component={Trips} />
              <Route exact path='/countries' component={Countries} />
              <Route exact path='/regions' component={Regions} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/trip/:id' component={TripContainer} />
              <Route exact path='/country/:id' component={Country} />

              <Route path='*' component={NotFound} />
            </AnimatedSwitch>
          </MainLayout>
        </ScrollTop>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips,
});

const mapDispatchToProps = (dispatch) => ({
  setStates: (newState) => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
