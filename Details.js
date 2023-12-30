import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {doc,getDoc} from 'firebase/firestore'
import { Bars } from "react-loader-spinner";
import Review from "./Review";

const Details = () => {
  const [data, setData]=useState({
    name:"",
    year:"",
    image:"",
    description:""
  });
  const [loading, setLoading] =useState(true);

  const {id}= useParams();
useEffect(()=>{
  async function getData(){
  const _doc= doc(db, "movies", id);
  const _data= await getDoc(_doc);
  setData(_data.data());
  setLoading(false);
  }
  getData();
})

  return (
    <div className='p-4 mt-4 flex flex-col md:flex-row item-center md:items-start w-full justify-center'>
{loading?<div className='h-96 flex justify-center items-center w-full'><Bars height={25}/></div>:
<>
<img className='h-96 md:sticky top-24'  alt="" src={data.image} />
<div className='ml-4'>
<h1 className='text-3xl font-bold text-gray-400'>
{data.name} <span className='text-xl'>({data.year})</span>
</h1>
<ReactStars
size={20}
half={true}
value={5}
edit={false}
/>
<p className='md:mt-4 ml-0 w-full md:w-1/2'>
  {data.description}
  <Review/>
</p>
</div>
</>
}
    </div>
  )
}

export default Details