
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI="http://localhost:8000/blogs/"

const CompCreateBlog=()=>{

  const [title,setTitle] = useState("")
  const [contend,setContend] = useState("")
  const navigate=useNavigate()
  
  const store= async(e)=>{
     e.preventDefault()
     await  axios.post(URI,{title:title, contend:contend})  
    navigate("/")
  }


    return(
        <div>
            <h3>Create Post</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                 </div>    
                 <div className="mb-3">
                    <label className="form-label">Contenedor</label>
                    <textarea 
                    value={contend}
                    onChange={(e)=>setContend(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div> 
                <button type="submit" className="btn btn-primary">Store</button>
               
            </form>
        </div>
    )
}


export default CompCreateBlog