import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './TESLAAPP/Dashboard/Navbar';
import Footer from './TESLAAPP/Dashboard/Footer';
import About from './TESLAAPP/Dashboard/About';
import Login from './TESLAAPP/Login/Login';


export default function App() {
const [data, setData] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, email) => {
    setCurrentUser({ username, email });
    setIsLoggedIn(true);
  };


   useEffect(() => {
    fetch("http://localhost:5000/articles")
    .then((response) => response.json())
    .then((news) => setData(news))
    .catch((error) => console.error('error fetching data',error));
   },[isLoggedIn]);
  return (
    <div>
      <Navbar />
      {isLoggedIn ?(
        <div>
         <h1>Welcome, {currentUser ? currentUser.username : 'Guest'}</h1>
        </div>
      ) : (
       <Login handleLogin={handleLogin} />
      )}
      <About />
      { data? data.map( ((coffee) => {
          return (
            <div key={coffee.url} >
              <h1>{coffee.title}</h1>
              <img src={coffee.urlToImage} alt={coffee.title} style={{ maxWidth: '500px' }}/>
            </div>
          )
        })):(<p>Loading...</p>)
       
      }
    <Footer />
    </div>
  )
}
