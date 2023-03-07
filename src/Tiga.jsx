/*
const name = 'joshua';
const element = <h1>{name}</h1>
*/
function myName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : 'joshua',
  lastName : 'manossoh'
}

const element = <h1>Hello {myName(user)}</h1>
/*
function getGreeting(user) {
  if(user) {
    return <h1>{user.firstName}</h1>
  } else {
    return <h1>Hello Stranger</h1>
  }
}*/



function Tiga() {
  return (
   element
  ); 
}

export default Tiga;