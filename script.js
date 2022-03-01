
const users = [
    {firstName: "shailendra", lastName: "sethiya", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "mask", age: 50},
    {firstName: "deepika", lastName: "padukone", age: 26},
];

// acc = { 26: 2, 75: 1, 50: 1}

const output = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
    }, {});

    console.log(output);