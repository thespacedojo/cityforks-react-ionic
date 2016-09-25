import React from 'react'
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';
import { IonHeaderBar, IonView, IonNavView } from 'reactionic';

class Layout extends Tracker.Component {
  render() {
    return (
      <div>
        <IonHeaderBar customClasses="bar-assertive" alignTitle="center" title={<img src="images/cityforks-03.png" className="logo" alt="CITYFORKS" />} />
        <IonNavView>
          <IonView customClasses="" {...this.props}>
            {this.props.children}
          </IonView>
        </IonNavView>
      </div>
    );
  }
}

export default Layout;
