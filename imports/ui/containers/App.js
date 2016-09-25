import React from 'react'
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';
import { IonBody, IonHeaderBar } from 'reactionic';
import { getPlatform } from '/imports/helpers.js';

class AppContainer extends Tracker.Component {
  constructor() {
    super();
    this.setState({ location: { lat: 0, lng: 0 } })
    this.autorun(() => {
      let newLocation = Geolocation.latLng()
      console.log(`Location: ${JSON.stringify(newLocation)}`)
      if (newLocation != this.state.location) {
        this.setState({location: newLocation})
      }
    })
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`Next State: ${JSON.stringify(nextState)}`);
    if (nextState.location)
      Meteor.call('places/fetch', nextState.location, (err, res) => {});
  }

  render() {
    console.log('Rendering');
    let platform = getPlatform('iOS');

    return (
      <IonBody platform={platform} location={this.props.location} >
        { this.props.children }
      </IonBody>
    );
  }
}

export default AppContainer;
