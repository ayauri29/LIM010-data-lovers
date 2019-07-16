global.window = global;
require('../src/data');
require('./data.spec.js');

const dataPokemon =
  [
    {
      'id': '1',
      'num': '001',
      'name': 'Bulbasaur',
      'type': ['Grass', 'Poison'],
      'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
      'multipliers': [1.58],
      'egg': '2 km',
      'spawn_chance': 0.69
    },
    {
      'id': '2',
      'num': '002',
      'name': 'Ivysaur',
      'type': ['Grass', 'Poison'],
      'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
      'multipliers': [1.2, 1.6],
      'egg': 'Not in Eggs',
      'spawn_chance': 0.042
    },
    {
      'id': '3',
      'num': '003',
      'name': 'Venusaur',
      'type': ['Grass', 'Poison'],
      'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
      'multipliers': null,
      'egg': '5 km',
      'spawn_chance': 0.017
    },
    {
      'id': '22',
      'num': '022',
      'name': 'Fearow',
      'type': ['Normal', 'Flying'],
      'weaknesses': ['Electric', 'Rock'],
      'multipliers': null,
      'egg': 'Not in Eggs',
      'spawn_chance': 0.15
    },
    {
      'id': '4',
      'num': '004',
      'name': 'Charmander',
      'type': ['Fire'],
      'weaknesses': ['Water', 'Ground', 'Rock'],
      'multipliers': [1.65],
      'egg': '10 km',
      'spawn_chance': 0.253
    },
  ];

const orderDes = [
  {
    'id': '1',
    'num': '001',
    'name': 'Bulbasaur',
    'type': ['Grass', 'Poison'],
    'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
    'multipliers': [1.58],
    'egg': '2 km',
    'spawn_chance': 0.69
  },
  {
    'id': '4',
    'num': '004',
    'name': 'Charmander',
    'type': ['Fire'],
    'weaknesses': ['Water', 'Ground', 'Rock'],
    'multipliers': [1.65],
    'egg': '10 km',
    'spawn_chance': 0.253
  },
  {
    'id': '22',
    'num': '022',
    'name': 'Fearow',
    'type': ['Normal', 'Flying'],
    'weaknesses': ['Electric', 'Rock'],
    'multipliers': null,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.15
  },
  {
    'id': '2',
    'num': '002',
    'name': 'Ivysaur',
    'type': ['Grass', 'Poison'],
    'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
    'multipliers': [1.2, 1.6],
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042
  },
  {
    'id': '3',
    'num': '003',
    'name': 'Venusaur',
    'type': ['Grass', 'Poison'],
    'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
    'multipliers': null,
    'egg': '5 km',
    'spawn_chance': 0.017
  },
];

const orderAsc = [
  {
    'id': '3',
    'num': '003',
    'name': 'Venusaur',
    'type': ['Grass', 'Poison'],
    'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
    'multipliers': null,
    'egg': '5 km',
    'spawn_chance': 0.017
  },
  {
    'id': '2',
    'num': '002',
    'name': 'Ivysaur',
    'type': ['Grass', 'Poison'],
    'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
    'multipliers': [1.2, 1.6],
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042
  },
  {
    'id': '22',
    'num': '022',
    'name': 'Fearow',
    'type': ['Normal', 'Flying'],
    'weaknesses': ['Electric', 'Rock'],
    'multipliers': null,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.15
  },
  {
    'id': '4',
    'num': '004',
    'name': 'Charmander',
    'type': ['Fire'],
    'weaknesses': ['Water', 'Ground', 'Rock'],
    'multipliers': [1.65],
    'egg': '10 km',
    'spawn_chance': 0.253
  },
  {
    'id': '1',
    'num': '001',
    'name': 'Bulbasaur',
    'type': ['Grass', 'Poison'],
    'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
    'multipliers': [1.58],
    'egg': '2 km',
    'spawn_chance': 0.69
  },
];

describe('searchName', () => {
  it('debería buscar los pokemones que empiecen con bul', () => {
    expect(searchName(dataPokemon, 'bul')[0].name).toEqual('Bulbasaur');
  });

  it('debería buscar los pokemones que empiecen con BUL', () => {
    expect(searchName(dataPokemon, 'BUL')[0].name).toEqual('Bulbasaur');
  });
});

describe('searchOnlyWeakness', () => {
  it('debería mostrar los pokemones debiles a la electricidad', () => {
    expect(searchOnlyWeakness(dataPokemon, 'Electric')[0].weaknesses).toEqual(['Electric', 'Rock']);
  });
});

describe('searchType', () => {
  it('debería mostrar los pokemones de tipo normal', () => {
    expect(searchType(dataPokemon, 'Normal')[0].type).toEqual(['Normal', 'Flying']);
  });
});

describe('searchWeakness', () => {
  it('debería mostrar los pokemones de tipo normal debiles a la electricidad', () => {
    expect(searchWeakness(dataPokemon, 'Normal', 'Electric')[0].weaknesses).toEqual(['Electric', 'Rock']);
  });
});

describe('searchEggs', () => {
  it('debería mostrar los pokemones de cada tipo de huevo', () => {
    expect(searchEggs(dataPokemon)[0][0].egg).toEqual('2 km');
  });
});
describe('pushTable', () => {
  it('debería mostrar un arreglo con los datos del pokemon segun el huevo', () => {
    expect(pushTable(searchEggs(dataPokemon), 1)[0][0]).toEqual('Venusaur');
  });
});

describe('divideAtrapped', () => {
  it('debería mostrar cuantos pokemones son atrapados y cuantos no', () => {
    expect(divideAtrapped(dataPokemon).atrapado).toEqual(3);
  });
});

describe('sortId', () => {
  it('debería mostrar los pokemones ordenados por id', () => {
    expect(sortId(dataPokemon)).toEqual(dataPokemon);
  });
});

describe('orderData', () => {
  it('debería ordenar los pokemones de a-z', () => {
    expect(orderData(dataPokemon, 'order-a-z')).toEqual(orderDes);
  });
  it('debería ordenar los pokemones de z-a', () => {
    expect(orderData(dataPokemon, 'order-z-a')).toEqual(orderAsc);
  });
  it('debería ordenar los pokemones de z-a', () => {
    expect(orderData(dataPokemon, 'order-z-a')[0].name).toEqual('Venusaur');
  });
  it('debería ordenar los pokemones ascendente por frecuencia de aparicion', () => {
    expect(orderData(dataPokemon, 'order-asc')).toEqual(orderAsc);
  });
  it('debería ordenar los pokemones descendente por frecuencia de aparicion', () => {
    expect(orderData(dataPokemon, false)).toEqual(orderDes);
  });
  it('debería ordenar los pokemones ascendente por frecuencia de aparicion', () => {
    expect(orderData(dataPokemon, 'order-asc')[0].spawn_chance).toEqual(0.017);
  });
  it('debería ordenar los pokemones descendente por frecuencia de aparicion', () => {
    expect(orderData(dataPokemon, 'order-desc')[0].spawn_chance).toEqual(0.69);
  });
  it('debería ordenar los pokemones descendente por frecuencia de aparicion', () => {
    expect(orderData(dataPokemon, 'order-des')).toEqual(orderDes);
  });
});