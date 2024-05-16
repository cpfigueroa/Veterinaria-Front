import React from 'react';
import './App.css';
import ScrollReveal from 'scrollreveal';
import AdminHome from './admin/AdminHome';
import PatientCRUD from './admin/PatientCRUD';
import TurnCRUD from './admin/TurnCRUD';

function App() {
	return (
		<div className="my-element">
			soy app
			<AdminHome />
			<PatientCRUD />
			<TurnCRUD />
		</div>
	);
}

export default App;
