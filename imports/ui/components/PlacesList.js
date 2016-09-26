import React from 'react';
import { IonSubHeaderBar, IonContent, IonList, IonItem, IonIcon } from 'reactionic';
import Price from '/imports/ui/components/Price.js';
import Rating from '/imports/ui/components/Rating.js';
import Distance from '/imports/ui/components/Distance.js';

const PlacesList = ({places}) => {
  return (
    <div>
      <IonSubHeaderBar>
        <h1 className="title text-center">Nearby Places</h1>
      </IonSubHeaderBar>
      <IonContent>
        <IonList>
          {places.map((place) => { return <Place key={place._id} place={place} /> })}
        </IonList>
      </IonContent>
    </div>
  )
}

const Place = ({place}) => {
  return (
    <IonItem link={"/place/" + place._id}>
      <div className="row place">
        <div className="col col-90">
          <h2>{place.name}</h2>
          <p>
            <Price price={place.price_level} />
            <Rating rating={place.rating} />
            <Distance distance={place.distance} />
          </p>
        </div>
        <div className="col arrow">
          <IonIcon icon="ios-arrow-right" />
        </div>
      </div>
    </IonItem>
  )
}

export default PlacesList;
