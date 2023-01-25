import React, { Fragment } from 'react'

import "../style/Home.css"
import Cocktaits from './Cocktaits'

const Home = () => {
    
  return (
      
      <Fragment>
      <h1 className='title'>Cocktail</h1>
    <div className='cocktails'>
        <Cocktaits />
     </div>
     </Fragment>
  )
}

export default Home 