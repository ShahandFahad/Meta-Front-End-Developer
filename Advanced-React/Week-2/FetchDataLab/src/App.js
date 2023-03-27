import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1').then(
      (response) => response.json()
    ).then(
      (data) => setUser(data)
    ).catch(
      console.log("Data Fetching Failed")
    );
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="user profile image" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
