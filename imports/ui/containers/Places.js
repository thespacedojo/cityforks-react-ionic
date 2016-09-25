import React from 'react'
import Tracker from 'tracker-component';
import PlacesCollection from '/imports/api/Places.js';
import PlacesComponent from '/imports/ui/components/Places.js';

const Places extends Tracker.Component {
  constructor() {
    super();
    Meteor.subscribe('places/nearby', this.props.geo);
    this.autorun( () => {
      let places = PlacesCollection.find().fetch();
      this.setState({places})
    })
  }

  render() {
    return (
      <PlacesComponent places={this.state.places} />
    )
  }
}

export default Places
