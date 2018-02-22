import classNames from 'classnames'
import React, { PropTypes } from 'react'
import Triangle from 'components/triangle/triangle'

const TrianglesLayer = (props) => {
  const { triangles } = props
  return (
    <div>
      {
        triangles.map(triangle => { return <Triangle {...triangle} /> })
      }
    </div>
  )
}

TrianglesLayer.propTypes = {
  triangles: PropTypes.array.isRequired
}

export default TrianglesLayer
