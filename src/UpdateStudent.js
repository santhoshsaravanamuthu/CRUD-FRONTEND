import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent(){
    const [name,SETNAME]=useState('')
    const [course,SETCOURSE]=useState('')
    const [dept,SETDEPT]=useState('')
    const [email,SETEMAIL]=useState('')
    const [phoneno,SETPHONENO]=useState('')
    const {id} = useParams();
    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8080/update/'+id,{name,course,dept,email,phoneno})
        .then(res=>{
            console.log(res);
            navigate('/');
        }).catch(err=>console.log(err));
    }

    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white p-4">
                <form onSubmit={handleSubmit}>
                    <h2>UPDATE STUDENT</h2>
                    <div className="mb-2">
                        <label htmlFor="">NAME</label>
                        <input type="text" placeholder="ENTER NAME" className="form-control"
                        onChange={e=>SETNAME(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">COURSE</label>
                        <input type="text" placeholder="ENTER COURSE" className="form-control"
                        onChange={e=>SETCOURSE(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">DEPT</label>
                        <input type="text" placeholder="ENTER DEPT" className="form-control"
                        onChange={e=>SETDEPT(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">EMAIL</label>
                        <input type="text" placeholder="ENTER EMAIL" className="form-control"
                        onChange={e=>SETEMAIL(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">PHONE NO</label>
                        <input type="text" placeholder="ENTER PHONE NO" className="form-control"
                        onChange={e=>SETPHONENO(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent;