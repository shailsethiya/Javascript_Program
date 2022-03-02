
listOfnumbers = [3,4,5,6,7,8,9,10];

listOfnumbers.map((x) => {
    const obj = { };
    obj['evenOrOdd'] = (x%2 === 0) ? 'even' : 'odd';
    obj['areOfCircle'] =  Math.PI*x*x;
    return obj;
});