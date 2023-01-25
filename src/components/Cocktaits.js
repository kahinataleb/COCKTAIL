import React from 'react'
import "../style/CocktailDetails.css"
import Products from '../data'
import { NavLink } from 'react-router-dom'


const Cocktaits = () => {

  return (
    <div>
       
    {Products.map((prod, i) => (
       
        <img key={i} src={prod.img}  />
        
    ))}
     
     <NavLink to="/https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg">info</NavLink>
</div>
)
  
}

export default Cocktaits