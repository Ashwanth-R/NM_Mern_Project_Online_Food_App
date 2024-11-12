import React, { useEffect, useState } from 'react'
import '../styles/PopularRestaurants.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PopularRestaurants = () => {

    const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState([]);
  const [promoteList, setPromoteList] = useState([]);

    useEffect(()=>{
        fetchRestaurants();
        fetchPromotions();
      }, [])

      const fetchRestaurants = async () => {
        try {
          const response = await axios.get('http://localhost:6001/fetch-restaurants');
          console.log('Restaurants:', response.data); // Log the response data
          setRestaurants(response.data);
        } catch (error) {
          console.error('Error fetching restaurants:', error);
        }
      }
      
      const fetchPromotions = async () => {
        try {
          const response = await axios.get('http://localhost:6001/fetch-promoted-list');
          console.log('Promoted List:', response.data); // Log the promoted list
          setPromoteList(response.data);
        } catch (error) {
          console.error('Error fetching promoted list:', error);
        }
      }



  return (
    <div className="popularRestaurantContainer">
        <h3>Popular Restaurants</h3>
        <div className="popularRestaurant-body">

            {restaurants.filter(restaurant=> promoteList.includes(restaurant._id)).map((restaurant)=>(

                <div className="popularRestaurantCard" key={restaurant._id} onClick={()=> navigate(`/restaurant/${restaurant._id}`)}>
                    <img src={restaurant.mainImg} alt="" />
                    <div className="popularRestaurantCard-data">
                        <h6>{restaurant.title}</h6>
                        <p>{restaurant.address}</p>
                    </div>
                </div>
            ))}


        </div>
    </div>
  )
}

export default PopularRestaurants