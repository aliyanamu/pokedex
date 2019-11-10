import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PokeList from '../components/PokeList'
import { Responsive } from 'semantic-ui-react'

class Group extends Component {
  render() {
    const { width, height } = this.props.size
    const { location, match } = this.props
    return (
      <Fragment>
        <Responsive style={{
          'overflow': 'hidden',
          'height': '100%',
          'backgroundColor': '#271FD5'
        }}>
          <div className='App-title'>
            <div>POKEDEX</div>
            <div style={{ 'textTransform': 'capitalize', 'margin': '30px 0 0', lineHeight: 1.1 }}>
              { location.pathname.split('/')[1] } - { location.pathname.split('/')[2] }
            </div>
          </div>
          <PokeList data={{ height, width, groupName: match.params.groupName }}/>
        </Responsive>
      </Fragment>
    )
  }
}

export default connect(null, null)(Group)