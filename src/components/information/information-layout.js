import PropTypes from 'prop-types';
import { Component } from 'react';

export class InformationLayout extends Component {
	render() {
		return <div>{this.props.information}</div>;
	}
}

InformationLayout.propTypes = {
	information: PropTypes.string,
};
