import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as ButtonUi } from '../Ui/Form';
import * as THEME from '../Ui/theme';

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

const Button = styled(ButtonUi)`
    margin: 0.1em 1em 0.1em 0;

    ${THEME.media.phone`
        padding: 0.6em;
        margin: .1em .1em .1em 0;
        font-size: 0.7em;
    `}
`;


export default class Tab extends React.Component {


    /**
    * propTypes
    */
	static propTypes = {
		data: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired,
	}



    /**
    * constructor
    *
    * @param {Object} props
    */
	constructor(props) {
		super(props);
	}



    /**
    * render
    */
	render() {

		const { data, onChange, active } = this.props;

		return <Container className="ps-react-tabs">
			{
				data.map((item, key) => (
					<Button
						key={key}
						color={active == item.name ? 'secondary' : 'default'}
						className={`ps-react-tab-payment-method ps-react-tab-payment-method-${active == item.name ? 'active' : ''}`}
						onClick={onChange.bind(this, item)}
					>
						{item.displayName}
					</Button>
				))
			}
		</Container>
	}
}
