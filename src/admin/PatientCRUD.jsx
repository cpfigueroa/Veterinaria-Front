import React, { useState, useEffect } from 'react';

const PatientCRUD = () => {
	const [pacientes, setPacientes] = useState([]);

	useEffect(() => {
		fetch('/#') //Agregar el endpoint
			.then((response) => response.json())
			.then((data) => setPacientes(data))
			.catch((error) => console.error('Error al encontrar pacientes:', error));
	}, []);

	return (
		<div>
			<h2>Administrar Pacientes</h2>
			<ul>
				{pacientes.map((paciente) => (
					<li key={paciente.id}>
						Dueño: {paciente.dueñoNombre} {paciente.dueñoApellido} - Mascota:{' '}
						{paciente.mascotaNombre} ({paciente.mascotaEspecie})
					</li>
				))}
			</ul>
		</div>
	);
};

export default PatientCRUD;
