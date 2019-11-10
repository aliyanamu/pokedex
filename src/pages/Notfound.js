import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Responsive, Image, Grid, Button } from 'semantic-ui-react'

class Notfound extends Component {
  render() {
    return (
      <Fragment>
        <Responsive style={{
          'overflow': 'hidden',
          'height': '100%',
          'backgroundColor': '#271FD5'
        }}>
          <div style={{ margin: '10% 20% 0', padding: '100px 0' }}>
            <div style={{ color: 'white', fontWeight: 'bold', fontSize: '9em' }}>
              <Grid centered verticalAlign='middle'>
                <Grid.Column computer={2} tablet={4} mobile={6}>4</Grid.Column>
                <Grid.Column computer={3} tablet={6} mobile={12}>
                  <Image align='center' style={{ width: '150px', margin: '20px 10px' }} src={require(`../assets/pokeball.png`)} />
                </Grid.Column>
                <Grid.Column computer={2} tablet={4} mobile={6}>4</Grid.Column>
              </Grid>
            </div>
          </div>
          <Link to='/home'>
            <Button style={{ color: '#271FD5', backgroundColor: 'white', marginLeft: '-1%' }} circular>Back to Home</Button>
          </Link>
        </Responsive>
      </Fragment>
    )
  }
}

export default connect(null, null)(Notfound)