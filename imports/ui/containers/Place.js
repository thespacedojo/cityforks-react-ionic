import React from 'react'
import Tracker from 'tracker-component';
import PlacesCollection from '/imports/api/Places.js';
import PlaceComponent from '/imports/ui/components/Place.js';

class Place extends Tracker.Component {
  constructor() {
    super();
    this.setState({place: null});
    let id = null;
    this.autorun(() => {
      if (this.props && this.props.params)
        id = this.props.params.id;
      if (id) {
        this.subscribe('places/one', id);
        let place = PlacesCollection.findOne({_id: id});
        this.setState({place});
      }
    });
  }

  render() {
    if (this.state.place) {
      return <PlaceComponent place={this.state.place} />
    } else {
      return null 
    }
  }
}

export default Place;
