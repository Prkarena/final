import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt='header'
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title"></h1>
        {(
          <Content className="PageHeader--Subtitle" src={null} />
        )}
      </div>
    </div>
  )
}



export default PageHeader
