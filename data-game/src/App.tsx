
import './App.css';
import {useState} from "react";

function App() {
    const [user,setUser] = useState({
        id:'1',
        name:'호돌맨',
        email:'asd@asd.com',
        gender:'MANE',
        level:10,
        age:29,
        address:"",
    });
    const onChangeBtn = () => {

        console.log(user);
        setUser({...user, name:'김성훈'})
    }
  return (
    <div className="App">
        <div>id:{user.id}</div>
        <div>name:{user.name}</div>
        <div>email:{user.email}</div>
        <div>level:{user.level}</div>
        <div>gender:{user.gender}</div>
        <div>age:{user.age}</div>
        
        <button onClick={onChangeBtn}>수정</button>
    </div>
  );
}

export default App;
