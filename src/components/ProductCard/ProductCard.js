import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { PhotoSwipe } from 'react-photoswipe'
import Image from '../Image'

import _kebabCase from 'lodash/kebabCase'

import './ProductCard.css'
import 'react-photoswipe/lib/photoswipe.css'

export const query = graphql`
  fragment ProductCard on MarkdownRemark {
    frontmatter {
      gallery {
        alt
        image
        title
      }
    }
  }
`

export default class ProductCard extends Component {
  state = {
    loaded: false,
    isOpen: false,
    sliderImages: [],
    index: 0
  }

  isOpen(isOpen, index) {
    if (typeof index === 'undefined') index = 0
    this.setState({ isOpen, index })
  }

  getImageInfo = (img, index) =>
    fetch(img.image + '-/json/')
      .then(res => res.json())
      .then(
        result => {
          const newImagesArr = [...this.state.sliderImages]
          newImagesArr[index] = {
            src: img.image,
            title: img.title,
            w: result.width,
            h: result.height
          }
          this.setState({
            sliderImages: newImagesArr
          })
          return true
        },
        error => {
          console.log(error)
          return false
        }
      )

  componentDidMount() {
    const { images } = this.props,
      maxCount = images.length
    let loopCount = 1

    for (let i in images) {
      if (this.getImageInfo(images[i], i)) {
        this.setState({ loaded: loopCount === maxCount })
        loopCount++
      }
    }
  }

  render() {
    const { images } = this.props
    return (
      <Fragment>
        {images &&
          images.length > 0 && (
            <div className="container">
                <div className='row Gallery' >
              {images.map((image, index) => (
              
                    <div className='col-md-12 Product--Item'
                    
                    >
                    <figure
                        key={_kebabCase(image.alt) + '-' + index}
                        onClick={() => this.isOpen(true, index)}
                      >
                       
                          <Image
                            resolutions="small"
                            src={image.image}
                            alt={image.alt}
                          />
                         
                       {image.title && 
                       <figcaption
                        className="figcaptions"
                       >{image.title}</figcaption>}
                     </figure>
                    </div>
              ))}
                </div>
            </div>
          )}
        {this.state.loaded &&
          this.state.sliderImages.length > 0 && (
            <PhotoSwipe
              isOpen={this.state.isOpen}
              items={this.state.sliderImages}
              options={{
                index: this.state.index,
                history: false
              }}
              onClose={() => this.isOpen(false)}
            />
          )}
      </Fragment>
    )
  }
}

ProductCard.propTypes = {
  images: PropTypes.array.isRequired
}