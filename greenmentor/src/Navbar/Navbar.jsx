import React from 'react'
import './navbar.css'
import LOGO from '../resorce/LOGO.jpg'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src={LOGO} alt='logo' />
      </div>

      <div className='data-in'>
        <div className='heading'>
          <p>DATA-IN</p>

          <div className='energy'>
            <p>⚙️ Energy</p>
          </div>

          <div>
            <p>💧 Water and Effluents</p>
          </div>
        </div>


      </div>

      <div className='analyze'>
        <div className='heading'>
        <p>ANALYZE</p>
        <div className='energy'>
          <p>⚙️ Energy</p>
        </div>

        <div>
          <p> 🗑️ Waste <span>(Beta)</span></p>
        </div>

        </div>
      </div>


      <button>Open Help Centre</button>


      <div className='powered-by'>
        <p>POWERED BY Longsight</p>
      </div>
    </div>
  )
}

export default Navbar
