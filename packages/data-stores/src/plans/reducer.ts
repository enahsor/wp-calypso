/**
 * External dependencies
 */
import type { Reducer } from 'redux';
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import type { PlanAction } from './actions';
import type { Plan, PlanFeature, FeaturesByType, PlanProduct } from './types';

export const features: Reducer< Record< string, PlanFeature >, PlanAction > = (
	state = {},
	action
) => {
	switch ( action.type ) {
		case 'SET_FEATURES':
			return action.features;
		default:
			return state;
	}
};

export const featuresByType: Reducer< Array< FeaturesByType >, PlanAction > = (
	state = [],
	action
) => {
	switch ( action.type ) {
		case 'SET_FEATURES_BY_TYPE':
			return action.featuresByType;
		default:
			return state;
	}
};

export const plans: Reducer< Plan[], PlanAction > = ( state = [], action ) => {
	switch ( action.type ) {
		case 'SET_PLANS':
			return action.plans;
		default:
			return state;
	}
};

export const planProducts: Reducer< PlanProduct[], PlanAction > = ( state = [], action ) => {
	switch ( action.type ) {
		case 'SET_PLAN_PRODUCTS':
			return action.products;
		default:
			return state;
	}
};

const reducer = combineReducers( {
	features,
	featuresByType,
	planProducts,
	plans,
} );

export type State = ReturnType< typeof reducer >;

export default reducer;
