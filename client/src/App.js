import './App.css';
import {useEffect, useState} from "react";
import Axios from "axios";

function App() {

  const [listOfUsers,setListOfUsers] = useState([]);
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [age,setAge] = useState(0);

  useEffect(()=>{
    Axios.get("http://localhost:3004/api/users/displayUser").then((response)=>{
      console.log(response.data.myData)

      setListOfUsers(response.data.myData)
    })
  },[])

  const createUser=()=>{
    //alert("clicked")
    Axios.post("http://localhost:3004/api/users/createUser",{
      name : name,
      username : username,
      age : age
    }).then((response)=>{
      //alert("User created")
      setListOfUsers([...listOfUsers,{ name : name,
        username : username,
        age : age}])
    })
  }

  return (
    <>
    <div className='App'>

    <div className='userInput'>
        <input type='text' placeholder='Name..' onChange={(e)=>{setName(e.target.value)}}></input>
        <input type='text' placeholder='Username..' onChange={(e)=>{setUsername(e.target.value)}}></input>
        <input type='number' placeholder='Age..' onChange={(e)=>{setAge(e.target.value)}}></input>
        <button onClick={createUser}>Create User</button>
    </div>
    
      <div className="userDisplay">
      {
        listOfUsers.map((user)=>{
          return(
            <div >
              <h1> Name : {user.name}</h1>
              <h1> User-Name : {user.username}</h1>
              <h1> Age : {user.age}</h1>
              <h1> Department : {user.department}</h1>
            </div>
          )
        })
      }
      </div>

      


      </div>
    </>
  );
}

export default App;
