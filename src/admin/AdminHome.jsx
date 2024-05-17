import React, { useState, useEffect } from 'react';
// Importo la biblioteca React y los hooks pra manejar estados de componentes funcionales y efectos secundarios como una API
const AdminHome = () => {
	const [turnos, setTurnos] = useState([]);
	// Declaro componente funcional AdminHome y creo una variable turnos (inicialmente es un arreglo vacio) con el hook, junto con su funcion actualizadora
	useEffect(() => {
		fetch('/#') // Ajusta la URL a tu endpoint
			.then((response) => response.json())
			.then((data) => setTurnos(data))
			.catch((error) => console.error('Error fetching turnos:', error));
	}, []);
	// Uso el hook useEffect para ejecutar efectos secundarios en el componente, [] como 2do argumento para indicar que no depende de ninguna prop o estado (se ejecuta una vez)
	// fetch solicitud HTTP get para obtener los datos de turnos, .json convierte la solicitud en objeto JSON, then actualiza el estado de turnos y catch se encarga de los errores
	return (
		<div>
			<h1>Bienvenido Administrador!</h1>
			<p>Versión del sistema: 1.0.0</p>
			<h2>Turnos Asignados</h2>
			<ul>
				{turnos.map((turno) => (
					<li key={turno.id}>
						Turno {turno.id}: Paciente {turno.paciente} - Fecha: {turno.fecha}
					</li>
				))}
			</ul>
		</div>
	);
};
// renderizó la página, mapeo el arreglo de turnos para crear una lista a cada uno y cada uno posee un ID, nombre y fecha. Key, es un atributo necesario para indentificar eficientemente a los elementos

export default AdminHome;
// exporto el componente, para luego podes importarlo
