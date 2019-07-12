global.window = global;
require('../src/data');
require('./data.spec.js');


const input = 
[
  {
    id: '1', 
    num: '001', 
    name: 'Bulbasaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    multipliers: [1.58], 
    egg: '2 km',
    spawn_chance: 0.69
  },
  {
    id: '2', 
    num: '002',
    name: 'Ivysaur',
    type: [ 'Grass', 'Poison' ],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.2, 1.6], 
    egg: 'Not in Eggs',
    spawn_chance: 0.042,
  },
  {
    id: '3', 
    num: '003', 
    name: 'Venusaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: null, 
    egg: '5 km',
    spawn_chance: 0.017,
  },
  {
    id: '4', 
    num: '004', 
    name: 'Charmander', 
    type: ['Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.65], 
    egg: '10 km',
    spawn_chance: 0.253,
  },
  {
    id: '5', 
    num: '005', 
    name: 'Charmeleon', 
    type: [ 'Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.79], 
    egg: '2 km',
    spawn_chance: 0.012,
  },
];

const output = [
  {
    id: '1', 
    num: '001', 
    name: 'Bulbasaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.58], 
    egg: '2 km',
    spawn_chance: 0.69
  }];

const output2 =
[
  {
    id: '1', 
    num: '001', 
    name: 'Bulbasaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.58], 
    egg: '2 km',
    spawn_chance: 0.69
  },
  {
    id: '4', 
    num: '004', 
    name: 'Charmander', 
    type: ['Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.65], 
    egg: '10 km',
    spawn_chance: 0.253,
  },
  {
    id: '5', 
    num: '005', 
    name: 'Charmeleon', 
    type: [ 'Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'],
    multipliers: [1.79], 
    egg: '2 km',
    spawn_chance: 0.012,
  },
  {
    id: '2', 
    num: '002', 
    name: 'Ivysaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.2, 1.6], 
    egg: 'Not in Eggs',
    spawn_chance: 0.042,
  },
  {
    id: '3', 
    num: '003', 
    name: 'Venusaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: null, 
    egg: '5 km',
    spawn_chance: 0.017,
  },
];

const output3 =
[
  {
    id: '3', 
    num: '003', 
    name: 'Venusaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: null, 
    egg: '5 km',
    spawn_chance: 0.017,
  },
  {
    id: '2', 
    num: '002', 
    name: 'Ivysaur', 
    type: [ 'Grass', 'Poison'], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.2, 1.6], 
    egg: 'Not in Eggs',
    spawn_chance: 0.042,
  },
  {
    id: '5', 
    num: '005', 
    name: 'Charmeleon', 
    type: [ 'Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.79], 
    egg: '2 km',
    spawn_chance: 0.012,
  },
  {
    id: '4', 
    num: '004', 
    name: 'Charmander', 
    type: ['Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.65], 
    egg: '10 km',
    spawn_chance: 0.253,
  },
  {
    id: '1', 
    num: '001', 
    name: 'Bulbasaur', 
    type: [ 'Grass', 'Poison'], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.58], 
    egg: '2 km',
    spawn_chance: 0.69
  },
];

const output4 =
[
  {
    id: '4', 
    num: '004', 
    name: 'Charmander', 
    type: ['Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.65], 
    egg: '10 km',
    spawn_chance: 0.253,
  },
  {
    id: '5', 
    num: '005', 
    name: 'Charmeleon', 
    type: [ 'Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.79], 
    egg: '2 km',
    spawn_chance: 0.012,
  },
];

const output5 =
[
  {
    id: '4', 
    num: '004', 
    name: 'Charmander', 
    type: ['Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.65], 
    egg: '10 km',
    spawn_chance: 0.253,
  },
  {
    id: '5', 
    num: '005', 
    name: 'Charmeleon', 
    type: [ 'Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.79], 
    egg: '2 km',
    spawn_chance: 0.012,
  },
];

const output7 =
[
  {
    id: '1', 
    num: '001', 
    name: 'Bulbasaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.58], 
    egg: '2 km',
    spawn_chance: 0.69
  },
  {
    id: '2', 
    num: '002', 
    name: 'Ivysaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.2, 1.6], 
    egg: 'Not in Eggs',
    spawn_chance: 0.042,
  },
  {
    id: '3', 
    num: '003', 
    name: 'Venusaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: null, 
    egg: '5 km',
    spawn_chance: 0.017,
  },
];

const output8 = 
[
  [
    {
      id: '1',
      num: '001', 
      name: 'Bulbasaur', 
      type: [ 'Grass', 'Poison' ], 
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
      multipliers: [1.58], 
      egg: '2 km',
      spawn_chance: 0.69
    },
    {
      id: '5', 
      num: '005', 
      name: 'Charmeleon', 
      type: [ 'Fire' ], 
      weaknesses: ['Water', 'Ground', 'Rock'], 
      multipliers: [1.79], 
      egg: '2 km',
      spawn_chance: 0.012,
    },
  ],
  [
    {
      id: '3', 
      num: '003', 
      name: 'Venusaur', 
      type: [ 'Grass', 'Poison' ], 
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
      multipliers: null, 
      egg: '5 km',
      spawn_chance: 0.017,
    },
  ],
  [
    {
      id: '4', 
      num: '004', 
      name: 'Charmander', 
      type: ['Fire' ], 
      weaknesses: ['Water', 'Ground', 'Rock'], 
      multipliers: [1.65], 
      egg: '10 km',
      spawn_chance: 0.253,
    },
  ],
  [
    {
      id: '2', 
      num: '002', 
      name: 'Ivysaur', 
      type: [ 'Grass', 'Poison' ], 
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
      multipliers: [1.2, 1.6], 
      egg: 'Not in Eggs',
      spawn_chance: 0.042,
    },
  ]
];

const output10 = 
[
  {
    id: '5', 
    num: '005', 
    name: 'Charmeleon', 
    type: [ 'Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.79], 
    egg: '2 km',
    spawn_chance: 0.012,
  },
  {
    id: '3', 
    num: '003', 
    name: 'Venusaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: null, 
    egg: '5 km',
    spawn_chance: 0.017,
  },
  {
    id: '2', 
    num: '002',
    name: 'Ivysaur',
    type: [ 'Grass', 'Poison' ],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.2, 1.6], 
    egg: 'Not in Eggs',
    spawn_chance: 0.042,
  },
  {
    id: '4', 
    num: '004', 
    name: 'Charmander', 
    type: ['Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.65], 
    egg: '10 km',
    spawn_chance: 0.253,
  },
  {
    id: '1', 
    num: '001', 
    name: 'Bulbasaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    multipliers: [1.58], 
    egg: '2 km',
    spawn_chance: 0.69
  },
];

const output11 = 
[
  {
    id: '5', 
    num: '005', 
    name: 'Charmeleon', 
    type: [ 'Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.79], 
    egg: '2 km',
    spawn_chance: 0.012,
  },
  {
    id: '3', 
    num: '003', 
    name: 'Venusaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: null, 
    egg: '5 km',
    spawn_chance: 0.017,
  },
  {
    id: '2', 
    num: '002',
    name: 'Ivysaur',
    type: [ 'Grass', 'Poison' ],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], 
    multipliers: [1.2, 1.6], 
    egg: 'Not in Eggs',
    spawn_chance: 0.042,
  },
  {
    id: '4', 
    num: '004', 
    name: 'Charmander', 
    type: ['Fire' ], 
    weaknesses: ['Water', 'Ground', 'Rock'], 
    multipliers: [1.65], 
    egg: '10 km',
    spawn_chance: 0.253,
  },
  {
    id: '1', 
    num: '001', 
    name: 'Bulbasaur', 
    type: [ 'Grass', 'Poison' ], 
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    multipliers: [1.58], 
    egg: '2 km',
    spawn_chance: 0.69
  },
];

const output9 = [
  ['Venusaur', '<img class="width" src="undefined">', 0.017]
];

const output6 =
{
  atrapado: 4, 
  noAtrapado: 1
};

const input2 = [
  {
    id: '1',
    num: '001',
    name: 'Bulbasaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    type: ['Grass', 'Poison'],
    height: '0.71 m',
    weight: '6.9 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: '20:00',
    multipliers: [1.58],
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    next_evolution: [{
      num: '002',
      name: 'Ivysaur'
    }, {
      num: '003',
      name: 'Venusaur'
    }]
  }];

const input3 = [
  {
    id: 3,
    num: '003',
    name: 'Venusaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    type: [
      'Grass',
      'Poison'
    ],
    height: '2.01 m',
    weight: '100.0 kg',
    candy: 'Bulbasaur Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: '11:30',
    multipliers: null,
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    prev_evolution: [{
      num: '001',
      name: 'Bulbasaur'
    }, {
      num: '002',
      name: 'Ivysaur'
    }]
  }
];

const outputList =
`<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <p class="num">N.º 001</p>
      <p class="data-value blue"><span class="data-type">Estado:</span>ATRAPADO</p>
      <p class="data-value blue"><span class="data-type">Frec. aparición:</span>0.69%</p>
      <img class="img-pok" src="http://www.serebii.net/pokemongo/pokemon/001.png"/>
      <p class="nom orange">Bulbasaur</p>
      <p class="data-value blue"><span class="data-type">Tipo:</span>Grass - Poison</p>
    </div>
    <div class="flip-card-back">
      <p class="nom black">Bulbasaur</p>   
      <p class="data-value"><span class="data-type">CP:</span>1.58</p>       
      <p class="data-value"><span class="data-type">Estatura:</span>0.71 m</p>
      <p class="data-value"><span class="data-type">Peso:</span>6.9 kg</p>
      <p class="data-value"><span class="data-type">Cant. caramelos:</span>25</p>
      <p class="data-value"><span class="data-type">Huevos:</span>2 km</p>
      <p class="data-value"><span class="data-type">Tiempo de aparición:</span>20:00</p>
      <p class="data-value"><span class="data-type">Debilidades:</span>Fire - Ice - Flying - Psychic</p><p class="data-value"><span class="data-type">Pre-evoluciones:</span>No tiene pre evoluciones</p><p class="data-value"><span class="data-type">Evoluciones:</span>Ivysaur - Venusaur</p> 
      </div>
    </div>
  </div>`;

const outputList2 = 
  `<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front-no">
        <p class="num">N.º 003</p>
        <p class="data-value white"><span class="data-type">Estado:</span>NO ATRAPADO</p>
        <p class="data-value white"><span class="data-type">Frec. aparición:</span>0.017%</p>
        <img class="img-pok" src="http://www.serebii.net/pokemongo/pokemon/003.png"/>
        <p class="nom orange">Venusaur</p>
        <p class="data-value white"><span class="data-type">Tipo:</span>Grass - Poison</p>
      </div>
      <div class="flip-card-back">
        <p class="nom black">Venusaur</p>          
        <p class="data-value"><span class="data-type">Estatura:</span>2.01 m</p>
        <p class="data-value"><span class="data-type">Peso:</span>100.0 kg</p>
        <p class="data-value"><span class="data-type">Huevos:</span>Not in Eggs</p>
        <p class="data-value"><span class="data-type">Tiempo de aparición:</span>11:30</p>
        <p class="data-value"><span class="data-type">Debilidades:</span>Fire - Ice - Flying - Psychic</p><p class="data-value"><span class="data-type">Pre-evoluciones:</span>Bulbasaur - Ivysaur</p><p class="data-value"><span class="data-type">Evoluciones:</span>No tiene evoluciones</p> 
      </div>
    </div>
  </div>
  `;

describe('searchName', () => {  
  it('debería buscar los pokemones que empiecen con bul', () => {
    expect(searchName(input, 'bul').name).toEqual(output.name);
  });

  it('debería buscar los pokemones que empiecen con BUL', () => {
    expect(searchName(input, 'BUL').name).toEqual(output.name);
  });
});

describe('searchOnlyWeakness', () => {  
  it('debería mostrar los pokemones debiles al agua', () => {
    expect(searchOnlyWeakness(input, 'Water')).toEqual(output4);
  });
});

describe('searchType', () => {  
  it('debería mostrar los pokemones de tipo fuego', () => {
    expect(searchType(input, 'Fire')).toEqual(output5);
  });
});

describe('searchWeakness', () => {  
  it('debería mostrar los pokemones de tipo grass debiles al fuego', () => {
    expect(searchWeakness(input, 'Grass', 'Fire')).toEqual(output7);
  });
});

describe('searchEggs', () => {  
  it('debería mostrar los pokemones de cada tipo de huevo', () => {
    expect(searchEggs(input)).toEqual(output8);
  });
});

describe('pushTable', () => {  
  it('debería mostrar un arreglo con los datos del pokemon segun el huevo', () => {
    expect(pushTable(output8, 1)).toEqual(output9);
  });
});

/* describe('showImg', () => {  
  it('debería mostrar un string con el html de las cards', () => {
    expect(showImg(input2)).toEqual(outputList);
  });
});*/

describe('divideAtrapped', () => {  
  it('debería mostrar cuantos pokemones son atrapados y cuantos no', () => {
    expect(divideAtrapped(input)).toEqual(output6);
  });
});

describe('sortId', () => {  
  it('debería mostrar los pokemones ordenados por id', () => {
    expect(sortId(input)).toEqual(input);
  });
});

describe('orderData', () => {  
  it('debería ordenar los pokemones de a-z', () => {
    expect(orderData(input, 'order-a-z')).toEqual(output2);
  });

  it('debería ordenar los pokemones de z-a', () => {
    expect(orderData(input, 'order-z-a')).toEqual(output3);
  });

  it('debería ordenar los pokemones ascendete por frecuencia de aparicion', () => {
    expect(orderData(input, 'order-asc')).toEqual(output10);
  });
});
;
