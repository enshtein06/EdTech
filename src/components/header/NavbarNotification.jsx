import React from 'react';

const navbarNotification = (props) => {
	let returnResult;

	if(props.numberOfNotification === 0) {
		returnResult = null;
	} else if(props.numberOfNotification > 9) {
		returnResult = (<span>9+</span>)
	} else {
		returnResult = (<span>{props.numberOfNotification}</span>)
	}

	return returnResult;
};

export default navbarNotification;