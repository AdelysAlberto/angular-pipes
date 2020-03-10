const primerarray = [
	{
		label: "Pronostico 1",
		options: [{ value: "contenido1", label: "tema 1" }]
	},
	{
		label: "Pronostico 2",
		options: [
			{ value: "contenido2", label: "tema 2" },
			{ value: "contenido3", label: "tema 3" }
		]
	}
];

// arreglo dinámico, puede seguir creciendo
let segundoArray = ["contenido1", "contenido3"];

function recorrer() {
	let nuevoArray = [];
	primerarray.map((primero, index) => {
		return primero.options.map((segundo, idx) => {
			return segundoArray.find(comparame => {
				if (comparame === segundo.value) {
					nuevoArray.push(segundo);
				}
			});
		});
	});
	return nuevoArray;
}

console.log(recorrer());
