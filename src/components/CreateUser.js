import { useParams } from "react-router";
import React from 'react';

const CreateUser = ({status, createcallback, updatecallback})=>{
    const {id:eid} = useParams();
    var id = '';
    var name = '';
    var dept = '';

    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();

        for (let [key, value] of formData.entries()) {
          console.log(key, value);
          if(key === 'name'){
              name = value;
          }
          if(key === 'id'){
            id = value;
        }
        if(key === 'dept'){
            dept = value;
        }
        }

        const newUser = {
                id: id, 
                name: name, 
                dept: dept
        }

        if(status==='add'){
            createcallback(newUser);
        alert( name + ' Added\nplease check user list');
        }
        if(status==='edit'){
            alert( eid + ' Updated\nplease check user list');
            updatecallback(eid,newUser);
        }
      };
    return(
        <>
            <h1>{status==='add'?'Create':'Edit'} user page {eid}</h1>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" /> <br/>
                ID: <input type="text" name="id"  /> <br/>
                Dept: <input type="text" name="dept"/> <br/>
                <input type="submit" value={status==='add'?'Create':'Update'}/>
            </form>
            

        </>
    );
}

// <button onClick={()=>callback({eid}, "Mehedi")}>{status==='add'?'Create':'Update'}</button>
//  <input type="submit" value={status==='add'?'Create':'Update'}/>
export default CreateUser;