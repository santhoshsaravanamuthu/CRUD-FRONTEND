import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Student(){
    const [student,setStudent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/")
        .then(res=>setStudent(res.data))
        .catch(err=>console.log(err));
    },[])

    const handleDelete=async(id)=>{
        try{
            await axios.delete("http://localhost:8080/student/"+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-95 bg-white p-4">
                <Link to="/create" className="btn btn-success ">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                        <th>NAME</th>
                        <th>COURSE</th>
                        <th>DEPT</th>
                        <th>EMAIL</th>
                        <th>PHONE NO</th>
                        <th className="align-items-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.course}</td>
                                    <td>{data.dept}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phoneno}</td>
                                    <td>
                                        <Link to={`update/${data.id}`} className="btn btn-primary ">UPDATE</Link >&nbsp; 
                                        <button className="btn btn-danger" onClick={e=>handleDelete(data.id)}>DELETE</button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Student;