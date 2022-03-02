const listOfPerson = [
    {name:'Aditya', dateOfBirth:"10/09/1982", aadharCardNumber: '1234-2323-1233-7657',address:'Bangaluru'},
    {name:'Kriti', dateOfBirth:"10/09/2019", aadharCardNumber: '1234-1010-1233-7657',address:'Chennai'},
    {name:'Binod', dateOfBirth:"01/09/1990", aadharCardNumber: '4523-1010-1233-7657',address:'Bhopal'},
    {name:'Amar', dateOfBirth:"01/09/1997", aadharCardNumber: '4523-1010-1233-2888',address:'Patna'}
    ];

    listOfPerson.filter((x) => { 
        const time = new Date().getTime() - new Date(x.dateOfBirth).getTime();
        return time > 14 * 365 * 86400 * 1000;
    })
    
    // Output - will be 1st, 3rd and 4th
    
    // Explanation - getTime() give time in millisecond, perday milisecond 86400000 , 14 used to get person who's age greater than 14 years