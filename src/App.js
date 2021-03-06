import UserList from './components/UserList';
import {users} from './usersData';
import {useState} from 'react';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

 const [userlist, setUserList] = useState(users);
  const deleteuser = (id)=>{
    const list = userlist.filter((user)=>user.id !== id);
    setUserList(list);
  }

  const createnewUser = (newUser)=>{
    userlist.push(newUser);
  }

  const updateuser = (id,newUser)=>{
    
    const list = userlist.filter((user)=>user.id !== id);
    console.log(list);
    console.log(id);

    setUserList(list);
    userlist.push(newUser);
  }

  return (
   
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/'> 
              <h1>Welcome Home!</h1>
          </Route>
          <Route path='/userlist'>
            <div>
                <UserList list={userlist} deleteCallback={deleteuser}/>
            </div>
          </Route>
          <Route path='/create'>
              <CreateUser status={'add'} createcallback={createnewUser}/>
          </Route>
          
          <Route path='/edit/:id' children={<CreateUser status={'edit'} updatecallback={updateuser}/>}>

            
        
          </Route>
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}


// <Route path='/edit/' children={<h1>Edit form</h1>}></Route>

export default App;
