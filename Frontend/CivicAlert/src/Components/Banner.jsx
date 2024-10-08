import React from "react";
import pothole from "../../public/pothole.png"

const Banner = () => {

    console.log("Banner rendered");

    return (

            <div className='max-w-screen-2xl container  md:px-20 px-4 flex flex-col md:flex-row my-10'>
            <div className='order-1 w-full md:w-1/2'>
            <img src={pothole} className='md:py-20 w-100 h-500' alt="" />
            </div>
            <div className='w-full order-2 py-10 px-16 md:order-1 md:w-1/2 mt-0 md:mt-10 text-center md:text-left'>
            <div className='space-y-5'>
            <h1 className='text-4xl font-bold text-center md:text-left'>See a problem?<br/>
            Don't let it go unnoticed. Snap a picture, report the issue, and we'll make sure it gets to the right authorities.
            <br/>
            <span className='text-blue-500'>Your Voice, Our Action</span></h1>
            <p className='text-xl text-center md:text-left'>Raise a complaint here.</p>

            <div className="border-dashed border-2 rounded-lg">
            <div className="p-5">
            <input type="file" className="file-input w-full max-w-xs" />
            <textarea
            placeholder="details here..."
            className="textarea textarea-bordered textarea-xs w-full max-w-xs mt-3"></textarea>
            </div>
            <div className="px-5 mb-5 -mt-3"><button className="btn btn-info">Submit</button></div></div>
            </div>
            </div>
            </div> 

    );
};

export default Banner;


<textarea
  placeholder="Bio"
  className="textarea textarea-bordered textarea-xs w-full max-w-xs"></textarea>