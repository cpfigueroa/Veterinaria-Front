import React, { useState, useEffect } from 'react';

const TurnCRUD = () => {
	const [turnos, setTurnos] = useState([]);

	useEffect(() => {
		fetch('/#') // escribir el endpoint
			.then((response) => response.json())
			.then((data) => setTurnos(data))
			.catch((error) => console.error('Error al econtrar turnos:', error));
	}, []);

	return (
		<div>
			{' '}
			<h2>Administrar Turnos</h2>
			<ul>
				{turnos.map((turno) => (
					<li key={turno.id}>
						Detalle: {turno.detalleCita} - Veterinario: {turno.veterinario} -
						Mascota: {turno.mascota} - Fecha: {turno.fecha} - Hora: {turno.hora}
					</li>
				))}
			</ul>
		</div>
	);
};
// Logica general parecida a la explicada en AdminHome.jsx
export default TurnCRUD;
