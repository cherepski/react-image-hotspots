import React from 'react'
import PropTypes from 'prop-types'

class Hotspot extends React.Component {
  render () {
    const { x, y, content } = this.props

    const hotspotStyle = {
      position: 'absolute',
      display: 'block',
      top: y + '%',
      left: x + '%',
      fontFamily: 'Sans-Serif',
      pointerEvents: 'auto'
    }

    return <div style={hotspotStyle}>{ content }</div>
  }
}

Hotspot.propTypes = {
  /** percentage from the left of the image to show this hotspot */
  x: PropTypes.number,
  /** percentage from the top of the image to show this hotspot */
  y: PropTypes.number,
  /** the content of the hotspot */
  content: PropTypes.element
}

export default Hotspot
