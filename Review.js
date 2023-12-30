import { useState } from "react";
import ReactStars from "react-stars";

const Review = () => {
    const [rating, setRating]= useState(0);
  return (
   
 <div className='mt-4 w-full'>
    <ReactStars
size={30}
half={true}
onChange={(rate)=>setRating(rate)}
/>
<input
placeholder="Share your thought..."
className='w-full p-2 outline-none bg-gray-900'
/>
<button className='bg-green-600 w-full'>Share</button>
 </div>
  )
}

export default Review