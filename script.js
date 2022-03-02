
const listOfPerson = [
    {name:'Aditya', dateOfBirth:"10/09/1982", aadharCardNumber: '1234-2323-1233-7657',address:'Bangaluru'},
    {name:'Kriti', dateOfBirth:"10/09/2019", aadharCardNumber: '1234-1010-1233-7657',address:'Chennai'},
    {name:'Binod', dateOfBirth:"01/09/1990", aadharCardNumber: '4523-1010-1233-7657',address:'Bhopal'},
    {name:'Amar', dateOfBirth:"01/09/1997", aadharCardNumber: '4523-1010-1233-2888',address:'Ajmer'}
];

    
listOfPerson.sort((a,b) => a.name > b.name ? 1 : -1);