// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
//   const [data, setData] = useState({});

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         let response = await fetch("https://api.github.com/users/surajkr97");
//         let data = await response.json();
//         setData(data);
//         console.log("User Data: ", data);
//       } catch (error) {
//         console.log("Error fetching data: ", error);
//       }
//     }
//     fetchUserData();
//   }, []);

  return (
    <div className="bg-orange-50 flex mx-auto justify-center p-4 gap-6">
      <img
        className="w-[145px] rounded-xl"
        src={data.avatar_url}
        alt="Profile Picture"
      />
      <div className="align-middle">
        <p>Username: {data.login}</p>
        <p>Name: {data.name}</p>
        <p>Github Followers: {data.followers}</p>
        <p>Github Following: {data.following}</p>
        <p>Location: {data.location}</p>
        <p>Bio: {data.bio}</p>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
    let response = await fetch('https://api.github.com/users/surajkr97');
    return response.json();
}
