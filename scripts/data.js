var houses = [
	{
		name: 'About House',
		id: '#aboutHouse',
		width: 200,
		height: 140,
		top: 470,
		left: 50,
		right: null,
		door: {
			width: 36,
			height: 39,
			left: 41,
			top: 100
		}
	},
	{
		name: 'Services House',
		id: '#servicesHouse',
		width: 200,
		height: 165,
		top: 754,
		left: null,
		right: 50,
		door: {
			width: 16,
			height: 32,
			left: 101,
			top: 133
		}		
	},
	{
		name: 'Portfolio House',
		id: '#portfolioHouse',
		width: 240,
		height: 154,
		top: 950,
		left: 50,
		right: null,
		door: {
			width: 32,
			height: 33,
			left: 105,
			top: 119
		}		
	}
];

var roads = [
	{
		name: 'About Road',
		id: '#aboutRoad',
		height: 200,
		top: 500,
		direction: 'left'
	},
	{
		name: 'Services Road',
		id: '#servicesRoad',
		height: 200,
		top: 784,
		direction: 'right'
	},
	{
		name: 'Portfolio Road',
		id: '#portfolioRoad',
		height: 200,
		top: 1000,
		direction: 'left'
	}
];

var notifications = [
	{
		id: 1,
		type: 'error',
		text: 'Você não pode se teletransportar aqui...',
		img: 'images/error.png'
	},
	{
		id: 2,
		type: 'info',
		text: 'Se você está com preguiça de andar, você pode navegar com a barra de navegação superior',
		img: 'images/information.png'
	},
	{
		id: 3,
		type: 'info',
		text: 'Pressione a tecla "Enter" ou clique no navio para navegar e revelar minhas informações de contato',
		img: 'images/information.png'
	},
	{
		id: 4,
		type: 'error',
		text: 'Pare de tentar me afogar!',
		img: 'images/error.png'
	},
]