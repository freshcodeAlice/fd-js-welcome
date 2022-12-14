/*
const userObj = {
    name: {
        first: 'John',
        last: 'Doe',
    },
    age: 20,
    auth: {
        email: 'doe@mail.com',
        pass: 'qwerty'
    }
};

//`John Doe - doe@mail.com`
const {name: {first, last}, auth: {email}} = userObj;
 `${first} ${last} - ${email}`
// const {age} = userObj; // const age = userObj.age
// const {name: {first, last}} = userObj; 
const first = userObj.name.first;
const last = userObj.name.last;

*/

//const {auth:{email}} = userObj; //const email = userObj.auth.email


//////////////////////


const monitor = {
    sizes: {
        width:{
            value: 30,
            scale: 'sm'
        },
        height: {
            value: 40,
            scale: 'sm'
        },
    },   
    brigthness: {
        value: 24000,
        scale: 'lux'
    },
    resolution: '4k'
};

const {sizes: {width: {value: widthValue}}, brigthness: {value: brightnessValue}} = monitor;
// const widthValue = monitor.sizes.width.value;
// const brightnessValue = monitor.brightness.value;


function getDiagonal(monitor){
    const {sizes:{width: {value: widthValue}, height: {value: heightValue}}} = monitor;

    return Math.sqrt(widthValue**2 + heightValue**2);
}

const {brigthness, resolution, ...restOfObject} = monitor;


function consoleValue({target: {value, name}}){
//    const {target: {value}} = event;
}

//event{
//    target:{
//        value,name
//    }
// }


const userObj = {
    name: {
        first: 'John',
        last: 'Doe',
        fatherName: 'Petrovich'
    },
    age: 20,
    auth: {
        email: 'doe@mail.com',
        pass: 'qwerty'
    }
};

function getFullName({name: {first, last, ...restOfName}, ...restOfUser}) {
    return `${first} ${last}`
}


///////////////////////


const arr = [1, 2, 3, 4, 5, 6];

const [firstElem, secondElem,,,fiveElement] = arr;

const [first, ...restOfArray] = arr;

function getStringOfCortege([first, second]) {
    return `${first} ${second}`
}



/*
перетворити меп у ['1 - johndoe', '2 - janedoe', '3 - alexdoe']

const map = new Map([[1, {username: 'john doe'}], [2, {username: 'janedoe'}], [3, {username: 'alexdoe'}]]);


[...map.entries()].map((cortege)=>{
    return `${cortege[0]} ${cortege[1].username}`
}) 

-----> 

[...map.entries()].map(([key, {username}])=>{
    return `${key} ${username}`
})

*/



const settings = {
    width: 200,
    height: 400
}

function getSet({width, height, on = false}){
    console.log(`${width} ${height} ${on}`)
}

const us = {
    name: {
        first: 'Ricky'
    },
    pass: '1234'
}


const {
    name: {
        first: userFirstName, 
        last: userLastName = 'Anonumus'
    }, 
    pass = 'qwerty'} = us;