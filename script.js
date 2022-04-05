const showRoom = [
    {id: 1, name: 'Maruti', model: 'Baleno' },
    {id: 2, name: 'Toyoto', model: 'Fortuner'},
    {id: 3, name: 'Mahindra', model: 'scorpio'},
    {id: 4, name: 'Tata', model: 'safari' }
];

for(let i=0; i< showRoom.length; i++){
    console.table(showRoom[i].name)
}

/**************************************************************************************************** */

const showRoom = [
    {id: 1, name: 'Maruti', model: 'Baleno' },
    {id: 2, name: 'Toyoto', model: 'Fortuner'},
    {id: 3, name: 'Mahindra', model: 'scorpio'},
    {id: 4, name: 'Tata', model: 'safari' }
];

showRoom.forEach((car, index, showRoom) => {
    console.table(`Name: ${car.name} Model: ${car.model} `)
});

/****************************************************************************************************** */

const showRoom = [
    {id: 1, name: 'Maruti', model: 'Baleno' },
    {id: 2, name: 'Toyoto', model: 'Fortuner'},
    {id: 3, name: 'Mahindra', model: 'scorpio'},
    {id: 4, name: 'Tata', model: 'safari' }
];

for(let car of showRoom){
    console.log(car.name);
}

/**************************************************************************************************** */

const showRoom = [
    {id: 1, name: 'Maruti', model: 'Baleno' },
    {id: 2, name: 'Toyoto', model: 'Fortuner'},
    {id: 3, name: 'Mahindra', model: 'scorpio'},
    {id: 4, name: 'Tata', model: 'safari' }
];

let i = 0;
while(i<showRoom.length){
    console.log(showRoom[i].name)
    i++
}

/************************************************************************************************************* */

const showRoom = [
    {id: 1, name: 'Maruti', model: 'Baleno' },
    {id: 2, name: 'Toyoto', model: 'Fortuner'},
    {id: 3, name: 'Mahindra', model: 'scorpio'},
    {id: 4, name: 'Tata', model: 'safari' }
];

let i = 0;

do{
    console.log(showRoom[i].name)
    i++
}
while(i<showRoom.length)

/*************************************************************************************************** */

const showRoom = [
    {id: 1, name: 'Maruti', model: 'Baleno' },
    {id: 2, name: 'Toyoto', model: 'Fortuner'},
    {id: 3, name: 'Mahindra', model: 'scorpio'},
    {id: 4, name: 'Tata', model: 'safari' }
];

let car = showRoom.map(showRoom => showRoom.name);

console.log(car);

/********************************************************************************************************** */