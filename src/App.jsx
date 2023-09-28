import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
    const [count,setCount]=useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    const getData=async () => {
        try{
            setLoading(true);

            // REST api
            // GET
            // POST
            // PATCH 
            // PUT 
            // DELETE
            const response= await axios.get("https://reqres.in/api/users");
            console.log(response);
            console.log(response.data);
            if(response.status===200){
                setData(response.data.data)
            }
            else{
                alert('some arror,please try again')
            }
        }catch(error){
            console.log(error);
            alert(error);
        }finally{
            setLoading(false);
        }
    }

    const showUserData = (userId) => {
        const user = data.find(user => user.id === userId);
        console.log("Selected user: ",user);
        setLoading(user);
    };

    useEffect(() => {
        getData();
    },[])

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <button onClick={() => showUserData(1)}>User 1</button>
                <button onClick={() => showUserData(2)}>User 2</button>
                <button onClick={() => showUserData(3)}>User 3</button>
                <button onClick={() => showUserData(4)}>User 4</button>
                <button onClick={() => showUserData(5)}>User 5</button>
                <button onClick={() => showUserData(6)}>User 6</button>
            </div>
            {loading ? (
                <div>
                    <h2>User Details</h2>
                    <p>ID: {loading.id}</p>
                    <p>First Name: {loading.first_name}</p>
                    <p>Last Name: {loading.last_name}</p>
                    <p>Email: {loading.email}</p>
                    <img src={loading.avatar} alt={`Avatar for ${loading.first_name}`} />
                </div>
            ) :(<h1> Loading ...</h1>)}
            <button onClick={()=>setCount(count+1)}>Refresh</button>
        </div>
    );
}

export default App;