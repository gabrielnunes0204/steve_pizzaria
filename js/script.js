// FUNÇÃO COM API PARA CONSULTAR O CEP DIGITADO
function consultarCep() {
	var $cep = document.getElementById("loginEndereco").value;
	var url = 'https://viacep.com.br/ws/' + $cep + '/json/';
	var request = new XMLHttpRequest();

	request.open('GET', url);
	request.onerror = function (e) {
		document.getElementById('return').innerHTML = 'API OFFLINE OU CEP INVÁLIDO';
	}

	request.onload = () => {
		var response = JSON.parse(request.responseText);

		if (response.erro === true) {
			document.getElementById('return').innerHTML = 'CEP NÃO ENCONTRADO';
		} else {
			document.getElementById('return').innerHTML += `<a href="https://www.google.com.br/maps" style="text-decoration:none;">` + 
				'CEP: ' + response.cep + '<br>' +
				'Logradouro: ' + response.logradouro + '<br>' +
				'Bairro: ' + response.bairro + '<br>' +
				'Cidade/UF: ' + response.localidade +
				' / ' + response.uf + `</a>` + `<br> <br>`;
		}
	}
	request.send();
}

/* ---------------------------------------- */

// FUNÇÃO PARA LOGAR O USUÁRIO, E PERMITIR ADICIONAR AS PIZZAS AO CARRINHO CASO ESTEJA LOGADO
let valor = 0;
let carrinho = 0;
const botaoLogin = document.querySelector('.botao-login');
const botaoEntrar = document.querySelector('.botao-entrar');

function logarUsuario() {
	const email = document.querySelector('#loginEmail');
	const senha = document.querySelector('#loginSenha');
	const modalLogin = document.querySelector('#modalLogin');

	botaoLogin.addEventListener('click', (event) => {
		if (email.value !== 'ademir@gmail.com' || senha.value !== '12345') {
			email.style.border = '2px solid red';
			senha.style.border = '2px solid red';
			alert('Login e/ou senha inválidos, tente novamente');
			event.preventDefault();
		} else {
			botaoEntrar.innerHTML = 'Ademir';
			event.preventDefault();
			if (botaoEntrar.innerHTML === 'Ademir') {
				email.value = '';
				senha.value = '';
				function pizzaMussarela() {
					const botaoP = document.querySelector('.pizzaMussarelaPequena');
					const botaoM = document.querySelector('.pizzaMussarelaMedia');
					const botaoG = document.querySelector('.pizzaMussarelaGrande');
					let valorPizza = document.querySelector('.valor');
					let carrinhoPizza = document.querySelector('#carrinho');

					botaoP.addEventListener('click', () => {
						valor += 20;
						valorPizza.innerHTML = valor;

						carrinho++;
						carrinhoPizza.innerHTML = carrinho;
					});

					botaoM.addEventListener('click', () => {
						valor += 25;
						valorPizza.innerHTML = valor;

						carrinho++;
						carrinhoPizza.innerHTML = carrinho;
					});

					botaoG.addEventListener('click', () => {
						valor += 30;
						valorPizza.innerHTML = valor;

						carrinho++;
						carrinhoPizza.innerHTML = carrinho;
					});
				}
				pizzaMussarela();
			}

			/* ---------------------------------------- */

			function pizzaCalabresa() {
				const botaoP = document.querySelector('.pizzaCalabresaPequena');
				const botaoM = document.querySelector('.pizzaCalabresaMedia');
				const botaoG = document.querySelector('.pizzaCalabresaGrande');
				let valorPizza = document.querySelector('.valor');
				let carrinhoPizza = document.querySelector('#carrinho');

				botaoP.addEventListener('click', () => {
					valor += 20;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoM.addEventListener('click', () => {
					valor += 25;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoG.addEventListener('click', () => {
					valor += 30;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});
			}
			pizzaCalabresa();

			/* ---------------------------------------- */

			function pizzaQuatroQueijos() {
				const botaoP = document.querySelector('.pizzaQuatroQueijosPequena');
				const botaoM = document.querySelector('.pizzaQuatroQueijosMedia');
				const botaoG = document.querySelector('.pizzaQuatroQueijosGrande');
				let valorPizza = document.querySelector('.valor');
				let carrinhoPizza = document.querySelector('#carrinho');

				botaoP.addEventListener('click', () => {
					valor += 30;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoM.addEventListener('click', () => {
					valor += 35;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoG.addEventListener('click', () => {
					valor += 40;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});
			}
			pizzaQuatroQueijos();

			/* ---------------------------------------- */

			function pizzaAmericana() {
				const botaoP = document.querySelector('.pizzaAmericanaPequena');
				const botaoM = document.querySelector('.pizzaAmericanaMedia');
				const botaoG = document.querySelector('.pizzaAmericanaGrande');
				let valorPizza = document.querySelector('.valor');
				let carrinhoPizza = document.querySelector('#carrinho');

				botaoP.addEventListener('click', () => {
					valor += 27;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoM.addEventListener('click', () => {
					valor += 32;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoG.addEventListener('click', () => {
					valor += 38;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});
			}
			pizzaAmericana();

			/* ---------------------------------------- */

			function pizzaPortuguesa() {
				const botaoP = document.querySelector('.pizzaPortuguesaPequena');
				const botaoM = document.querySelector('.pizzaPortuguesaMedia');
				const botaoG = document.querySelector('.pizzaPortuguesaGrande');
				let valorPizza = document.querySelector('.valor');
				let carrinhoPizza = document.querySelector('#carrinho');

				botaoP.addEventListener('click', () => {
					valor += 27;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoM.addEventListener('click', () => {
					valor += 32;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoG.addEventListener('click', () => {
					valor += 38;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});
			}
			pizzaPortuguesa();

			/* ---------------------------------------- */

			function pizzaModa() {
				const botaoP = document.querySelector('.pizzaModaPequena');
				const botaoM = document.querySelector('.pizzaModaMedia');
				const botaoG = document.querySelector('.pizzaModaGrande');
				let valorPizza = document.querySelector('.valor');
				let carrinhoPizza = document.querySelector('#carrinho');

				botaoP.addEventListener('click', () => {
					valor += 27;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoM.addEventListener('click', () => {
					valor += 32;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoG.addEventListener('click', () => {
					valor += 38;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});
			}
			pizzaModa();

			/* ---------------------------------------- */

			function pizzaChocolate() {
				const botaoP = document.querySelector('.pizzaChocolatePequena');
				const botaoM = document.querySelector('.pizzaChocolateMedia');
				const botaoG = document.querySelector('.pizzaChocolateGrande');
				let valorPizza = document.querySelector('.valor');
				let carrinhoPizza = document.querySelector('#carrinho');

				botaoP.addEventListener('click', () => {
					valor += 35;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoM.addEventListener('click', () => {
					valor += 40;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});

				botaoG.addEventListener('click', () => {
					valor += 45;
					valorPizza.innerHTML = valor;

					carrinho++;
					carrinhoPizza.innerHTML = carrinho;
				});
			}
			pizzaChocolate();
			$('#modalLogin').modal('hide');

			/* ---------------------------------------- */

			const botaoFicar = document.querySelector('.botao-nao');
			botaoEntrar.addEventListener('mouseover', () => {
				//Mostrar modal de logoff no evento de mouseover
				$("#modalLogoff").modal({
					show: true,
				  });

				//Ocultar o modal de logoff caso o botão NÃO for clicado
				botaoFicar.addEventListener('click', () => {
					$('#modalLogoff').modal('hide');
				});
			});
		}
	});
}
logarUsuario();

/* ---------------------------------------- */

// FUNÇÃO PARA FAZER A ROLAGEM SUAVE DOS LINKS COM SEUS RESPECTIVOS HREF'S
function rolagemSuave() {
	const botaoScroll = document.querySelectorAll('.botao-scroll');

	function scrollParaSecao(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const secao = document.querySelector(href);

		secao.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}

	botaoScroll.forEach((item) => {
		item.addEventListener('click', scrollParaSecao);
	});
}
rolagemSuave();

/* ---------------------------------------- */

// FUNÇÃO PARA VERIFICAR SE ESTÁ LOGADO, CASO NÃO ESTEJA, NÃO PODE ADICIONAR O ENDEREÇO
function alertaEndereco() {
	const cep = [document.querySelector("#loginEndereco")];
	const botaoConsulta = document.querySelector('.botao-consultar');

	botaoConsulta.addEventListener('click', () => {
		if (botaoEntrar.innerHTML !== 'Ademir') {
			alert('Faça login para adicionar o endereço');
			$('#modalEndereco').modal('hide');
		} else if (cep[0].value === '' || cep[0].value.length < 8) {
			alert('CEP incorreto, tente novamente');
			cep[0].style.border = '2px solid red';
		} else {
			alert('Endereço cadastrado com sucesso');
			cep[0].value = '';
			$('#modalEndereco').modal('hide');
		}
	});
}
alertaEndereco();

/* ---------------------------------------- */

// FUNÇÃO PARA VERIFICAR SE O USUÁRIO ESTÁ LOGADO AO TENTAR ADICIONAR PEDIDO, VER CARRINHO E VALORES
function verificarUsuario() {
	const valorCarrinho = document.querySelector('.valorCarrinho');
	const qtdeCarrinho = document.querySelector('.carrinho');
	const botaoAdicionar = document.querySelectorAll('.botao-add');

	valorCarrinho.addEventListener('click', (event) => {
		 if (botaoEntrar.innerHTML === 'Ademir') {
			console.log('Foi');
			event.preventDefault();
		 } else {
			event.preventDefault();
			alert('Faça login para ver os valores do pedido');
		 }
	});

	qtdeCarrinho.addEventListener('click', (event) => {
		if (botaoEntrar.innerHTML === 'Ademir') {
			console.log('Foi');
		} else {
			event.preventDefault();
			alert('Faça login para ver seu carrinho');
		}
	});

	botaoAdicionar.forEach((item) => {
		item.addEventListener('click', () => {
			if (botaoEntrar.innerHTML !== 'Ademir') {
				alert('Faça o login para fazer o pedido');
			}
		});
	});
}
verificarUsuario();

/* ---------------------------------------- */



