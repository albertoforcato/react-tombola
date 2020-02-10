import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';

const GameSettings = () => {

	const [prizes, setPrizes] = useState([
		{ id: 1, name: 'ambo' },
		{ id: 1, name: 'terna' },
		{ id: 1, name: 'quaterna' },
		{ id: 1, name: 'cinquina' },
		{ id: 1, name: 'tombola' },
		{ id: 1, name: 'tombolino' }
	]);

	const prizeList = prizes.map(prize => {
		return (
			<Form.Check
				inline
				type={'checkbox'}
				id={prize.id}
				label={prize.name}
			/>
		);
	});

	return (
		<Form className="">
			<Form.Group controlId="checkPrizes" className="mb-3">
				{prizeList}
			</Form.Group>
			<FormGroup controlId="checkPrizes" className="mb-3">
				<Form.Check type="switch" id="custom-switch" label="Estrazione automatica" />
			</FormGroup>
			<Button variant="primary" type="submit">
				Submit
      </Button>
		</Form>
	);
};

export default GameSettings;