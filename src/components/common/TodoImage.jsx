import React from 'react'

function TodoImage({ name, src, alt }) {
  return React.createElement(
    'img',
    {
      className: `image-${name}`,
      srcSet: src,
      alt: alt
    }
  )
}

export {TodoImage}