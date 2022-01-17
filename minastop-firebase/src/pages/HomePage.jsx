import React from 'react'
import {Link} from 'react-router-dom'
import c from './HomePage.module.css'

import IconButton from '../components/ui/IconButton'

const HomePage = () => {
  const inOrUp = true
  return (
    <main className={c.main}>
      <h2>Good Day!</h2>
      <div>
        <p>Explore our comfy crafts!</p>
        <div className={c.buttons}>
          <Link to='/browse' className={c.button}>Shop</Link>
          <Link to='/sign' IconButton className={c.button}>Sign {inOrUp ? 'In' : 'Up'}</Link>
        </div>
      </div>
    </main>
  )
}

export default HomePage
