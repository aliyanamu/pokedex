import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import getAllHabitat from '../store/actions/getAllHabitat'
import { CardGroup, Card, Message, Icon, Image } from 'semantic-ui-react'

class HabitatList extends Component {

  componentDidMount () {
    this.props.getAllHabitat()
  }

  render() {
    const { habitats, loadings } = this.props
    const { width, height } = this.props.size
    return (
      <Fragment>
        <Card onScroll={this.handleScroll} style={{
          'backgroundColor': 'white',
          'overflow': 'scroll',
          'margin': '180px 0',
          'padding': width < 1200 ? '30px 40px 180px' : '3% 10% 180px',
          'width': width, 'height': height,
          'borderRadius': '50px 50px 0 0',
        }}>
          <CardGroup align='center'>
          {
            habitats.length > 0 && habitats.map((item, index) => (
              <Link key={index} to={`/group/${item.name}`}>
                <Card className='habitat-card'>
                  <label>{item.name}</label>
                  <Image size='huge' src={require(`../assets/${item.name}.jpg`)} />
                </Card>
              </Link>
            ))
          }
          {
            loadings && (
              <Message icon style={{
                'maxWidth': '300px',
                'color': '#271fd5',
                'backgroundColor': 'transparent',
                'boxShadow': 'none',
                'margin': 'auto'
              }}>
                <Icon name='circle notched' loading />
                <Message.Content>
                  <Message.Header>Just one second</Message.Header>
                  We are fetching that content for you.
                </Message.Content>
              </Message>
            )
          }
          </CardGroup>
        </Card>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  habitats: state.pokeReducer.habitats,
  loadings: state.pokeReducer.loadings
})

const mapDispatchToProps = dispatch => ({
  getAllHabitat : () => dispatch(getAllHabitat())
})

export default connect(mapStateToProps, mapDispatchToProps)(HabitatList)