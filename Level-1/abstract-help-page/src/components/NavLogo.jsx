import React from 'react'

const Logo = () => {
  return (
    <a href="/" className="nav-logo">
        <div className="logo-image-container">
          <img src="../src/assets/logo.svg" alt="Abstract Logo" />
        </div>
        <div className="separator vertical"></div>
        <span className="logo-text">Help Center</span>
      </a>
  )
}

export default Logo