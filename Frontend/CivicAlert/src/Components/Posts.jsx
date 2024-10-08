import React from "react";

function Posts({item}){

    console.log(item)

    return(
        <>
        <div className="mt-4 my-3 p-3 bg-base-100 w-92 hover:scale-105 duration-200">
            <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src={item.image}
                alt="complaint_image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.area}</h2>
                <p>{item.complaint_details}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Upvotes: {item.upvote}</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Posts