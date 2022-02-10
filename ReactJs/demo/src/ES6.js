const person={
    name:'Mosh',
    walk(){
        console.log(this);
    },

    talk(){},

}

person.walk();
const fun=person.walk.bind(person);
fun()