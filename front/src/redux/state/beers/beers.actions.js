import { BeerActionTypes } from "./beers.model";

export const fetchBeersIfNot = () => ({
  type: BeerActionTypes.BEERS_FETCH_IF_NOT
});
export const fetchBeers = () => ({
  type: BeerActionTypes.BEERS_FETCH
});

export const setBeers = beers => ({
  type: BeerActionTypes.BEERS_SET,
  beers
});

export const fetchBeersSuccess = () => ({
  type: BeerActionTypes.BEERS_FETCH_SUCCESS
});

export const fetchBeersFailure = () => ({
  type: BeerActionTypes.BEERS_FETCH_FAILURE
});

export const createBeer = beer => ({
  type: BeerActionTypes.BEERS_CREATE,
  beer
});

export const rateBeer = payload => ({
  type: BeerActionTypes.BEERS_RATE,
  payload
});

export const setNewlyCreatedBeer = beer => ({
  type: BeerActionTypes.BEERS_SET_NEW,
  beer
});
