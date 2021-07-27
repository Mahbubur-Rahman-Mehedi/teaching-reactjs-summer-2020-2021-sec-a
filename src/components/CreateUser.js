import { useParams } from "react-router";
import React from 'react';
import ReactDOM from 'react-dom';

const CreateUser = ({status, callback})=>{
    const {id:eid} = useParams();
    return(
        <>
            <h1>{status==='add'?'Create':'Edit'} user page {eid}</h1>
            
                Name: <input type="text" name="name"/> <br/>
                ID: <input type="text" name="id"/> <br/>
                Dept: <input type="text" name="dept"/> <br/>
                <button onClick={()=>callback({eid}, "Mehedi")}>{status==='add'?'Create':'Update'}</button>
               
            

        </>
    );
}
//  <input type="submit" value={status==='add'?'Create':'Update'}/>
export default CreateUser;