import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";


const URI="http://localhost:8000/blogs/"

const CompEditBlog =()=>{
    const[title,setTitle]=useState("")
    const[contend,setContend]=useState("")
    const navigate=useNavigate()
    const {id}= useParams()
    

    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+id,{
            title:title,
            contend:contend
        })
        navigate("/")
    }

    useEffect(()=>{
        getBlogById()
    },[])
    
    const getBlogById=async()=>{
        const res=await axios.get(URI+id)
        setTitle(res.data.title)
        setContend(res.data.contend)
    }

    return(

        <div>
            <h3>edit Post</h3>
            <form onSubmit={update}>
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

export default CompEditBlog;