import { useEffect, useState } from "react";
import { TailSpin, ColorRing } from "react-loader-spinner";
import ReactStars from "react-stars";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";



const Cards = () => {
const [data, setData] = useState([]);
const [loading, setLoading]= useState(false);

useEffect(()=>{
    async function getData(){
        setLoading(true);
       const _data= await getDocs(moviesRef);
       _data.forEach((doc)=>{
        setData((prv)=>[...prv, {...doc.data(), id:doc.id}])

       } )

        setLoading(false);

    }
getData();
},[])

  return (
    <div className='flex flex-wrap justify-between px-3 mt-2'>
{ loading ? <div className= 'w-full flex justify-center items-center h-96 ' ><ColorRing height={70}/></div>:
data.map((e,i)=>{
    return(
        <Link to={`/details/${e.id}`}>
<div key={i} className="card  font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer  mt-6 transition-all duration-500">
<img className='h-60 md:72' alt="" src={e.image}/>
    <h1><span className='text-gray-500'>Name: </span>{e.name}</h1>
    <h1><span className='text-gray-500'>year:</span>{e.year}</h1>
    <h1 className='flex items-center'><span className='text-gray-500 mr-2'>Rating:</span>
    <ReactStars
    size={20}
    half={true}
    value={5}
    edit={false}
    />
    </h1>
</div></Link>
);
})}

    </div>
  )
}

export default Cards