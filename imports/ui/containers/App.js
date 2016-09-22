import React from 'react'
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';
import { IonBody, IonHeaderBar } from 'reactionic';

class AppContainer extends Tracker.Component {
  render() {
    return (
      <IonBody location={this.props.location} >
        <IonHeaderBar>
          <div class="h1 title"><Link to="/places"><img src="/images/cityforks-03.png" class="logo" alt="CITYFORKS" /></Link></div>
        </IonHeaderBar>
        { this.props.children }
      </IonBody>
    );
  }
}

export default AppContainer;
