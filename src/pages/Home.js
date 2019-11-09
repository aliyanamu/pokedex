import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Responsive } from 'semantic-ui-react'

class Home extends Component {
  render() {
    const { width } = this.props.size
    return (
      <Fragment>
        <Responsive style={{
          'overflow': 'hidden',
          'height': '100%',
          'backgroundColor': '#271FD5'
        }}>
          Home
        </Responsive>
      </Fragment>
    )
  }
}

export default connect(null, null)(Home)