import React from 'react'
import Tracker from 'tracker-component';
import PlacesCollection from '/imports/api/Places.js';
import PlacesList from '/imports/ui/components/PlacesList.js';

class Places extends Tracker.Component {
  constructor() {
    super();
    this.setState({places: []});
    this.autorun(() => {
      if (this.props && this.props.geo) {
        this.subscribe('places/nearby', this.props.geo);
        let places = PlacesCollection.find().fetch();
        this.setState({places})
      }
    })
  }

  render() {
    return <PlacesList places={this.state.places} />
  }
}

export default Places;
