var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
	console.log("buscando pacientes....")	

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");



	xhr.addEventListener("load", function () {
		var erroAjax = document.querySelector("#erro-ajax");

		if (xhr.status == 200 ) {
			erroAjax.classList.add("invisivel");
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);

			pacientes.forEach(function (paciente) {
				adicionaPacienteNaTabela(paciente);
			});
		}else {
			erroAjax.classList.remove("invisivel");
		}
	});

	xhr.send();

});
