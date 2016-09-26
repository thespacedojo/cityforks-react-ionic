import React from 'react'
import Tracker from 'tracker-component';
import PlacesCollection from '/imports/api/Places.js';
import LeafletMap from '/imports/ui/components/MapComponent.js';

class MapContainer extends Tracker.Component {
  constructor() {
    super();
    this.mapChanged = this.mapChanged.bind(this);
    this.mapSet = this.mapSet.bind(this);
    this.setState({places: []});
    this.setState({topRight: [0,0], bottomLeft: [0,0]})
    this.autorun(() => {
      if (this.props && this.props.geo) {
        this.subscribe('places/nearbyBox', this.state.bottomLeft, this.state.topRight);
        let places = PlacesCollection.find().fetch();
        this.setState({places})
      }
    })
  }
  mapSet(event) {
    console.log('Map set');
    let target = event.target._map;
    let bounds = target.getBounds();
    let bottomLeft = [bounds._southWest.lng, bounds._southWest.lat];
    let topRight = [bounds._northEast.lng, bounds._northEast.lat];
    let newCenter = target.getCenter();
    this.setState({topRight: topRight, bottomLeft: bottomLeft})
  }
  mapChanged(event) {
    console.log('Map changed');
    let bounds = event.target.getBounds();
    let bottomLeft = [bounds._southWest.lng, bounds._southWest.lat];
    let topRight = [bounds._northEast.lng, bounds._northEast.lat];
    let newCenter = event.target.getCenter();
    Meteor.call('places/fetch', newCenter, (err, res) => {this.setState({fetchingData: false})});
    this.setState({topRight: topRight, bottomLeft: bottomLeft})
  }
  render() {
    if (this.props.geo) {
      return <LeafletMap places={this.state.places} loc={this.props.geo} mapChanged={this.mapChanged} mapSet={this.mapSet}/>
    } else {
      return null
    }
  }
}

export default MapContainer;
