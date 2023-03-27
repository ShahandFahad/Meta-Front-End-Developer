import { useEffect, useState } from "react";

export default function FetchRandomUserData() {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        fetch('https://randomuser.me/api/?results=1').then((response => response.json())).then(data => setUser(data)).catch(console.log('Data Fetching Falied from random user API'));
    }

    useEffect( () => {
        fetchData();
    }, []);

    return(
        Object.keys(user).length > 0 ? (<div>
            <h1>Data Returned</h1>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last Name: {user.results[0].name.last}</h2>
            <img src={user.results[0].picture.large} alt="user profile image" />
        </div>) : (<h1>Data Pending...</h1>)
    );
}