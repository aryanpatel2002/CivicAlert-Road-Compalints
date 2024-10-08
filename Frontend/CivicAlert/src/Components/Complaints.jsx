import React from "react";
import list from "../../public/list.json"
import Posts from "../Components/Posts"

const Complaints = () => {

    console.log("Complaints rendered");

    const filterData = list.filter((data) => data.upvote === 0);
    console.log(filterData);

    return(
        <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <h1 className="font-semibold text-xl pb-2">
                Emerging complaints
            </h1>
            <p>
                Here are some of the emerging complaints of your area. Wanna upvote them so that they reach the right authority ? 
            </p>
        <div className="mt-12 grid grid-cols-3">
            {filterData.map((item)=>(
                <Posts item={item} key={item.id}/>
            ))}
        </div>
        </div>
        </>
    )
};

export default Complaints;
