import './App.css';
import Greet from  './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import  Status  from './components/Status';
import ChildComponent from './components/ChildComponent';
import Heading from './components/Heading';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const personName = {
    first : 'Bruce',
    last  : 'adarsh'
  }

  const nameList = [
    {
      first:'adarsh',
      last:'pandey'
    },
    {
    first:'nihal',
    last:'pandey'
  },
  {
   first:'john',
   last:'Burg'
  }
  ]

  return (
    <div className="App">
      <Greet name ='Adarsh' messageCount = {10} isLoggedIn ={true}/>
      <Person name = {personName} />
      <PersonList names = {nameList} />
      <Status status = 'loading' />
      <ChildComponent>
        <Heading>Hello from </Heading>
      </ChildComponent>
      <Button 
        handleClick={
          (event,id)=> {
            console.log("button clicked" , event, id)
          }
        }
        />
        <Input value='' handleChange={(event)=>console.log(event)} />
    </div>
  );
}

export default App;
