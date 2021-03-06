import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import HabitatList from '../components/HabitatList'
import { Responsive } from 'semantic-ui-react'

class Home extends Component {
  render() {
    const { width, height } = this.props.size
    const { location } = this.props
    return (
      <Fragment>
        <Responsive style={{
          'overflow': 'hidden',
          'height': '100%',
          'backgroundColor': '#271FD5'
        }}>
          <div className='App-title'>
            <div>POKEDEX</div>
            <div style={{ 'textTransform': 'capitalize', 'margin': '30px 0 0', lineHeight: 1 }}>
              { location.pathname.split('/')[1] } of Pokemon
            </div>
          </div>
          <HabitatList size={{ height, width }}/>
        </Responsive>
      </Fragment>
    )
  }
}

export default connect(null, null)(Home)