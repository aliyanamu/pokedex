import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import getAllPoke from '../store/actions/getAllPoke'
import PokeCard from './PokeCard'
import { CardGroup, Card, Message, Icon } from 'semantic-ui-react'

class PokeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 20,
      offset: 0
    }
  }

  handleScroll = (e) => {
    let element = e.target
    let { limit, offset } = this.state
    const { groupName } = this.props.data
    let { loadings } = this.props
    // 266 => height div chart
    if (element.scrollTop > 266 && !loadings && element.scrollTop + element.clientHeight >= element.scrollHeight - 20) {
      limit = limit + 20
      offset = offset + 20
      this.loadMoreItems(limit, offset, groupName)
      setTimeout(() => {
        this.setState({ limit: limit, offset: offset })
      }, 1000)
    }
  }

  loadMoreItems (limit, offset, groupName) {
    this.props.getAllPoke(limit, offset, groupName)
  }

  componentDidMount () {
    const { groupName } = this.props.data
    this.loadMoreItems (20, 0, groupName)
  }

  render() {
    const { items, loadings } = this.props
    const { width, height } = this.props.data
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
            items.length > 0 && items.map((item, index) => (
              <PokeCard key={index} data={{width, item}} />
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
  items: state.pokeReducer.items,
  loadings: state.pokeReducer.loadings
})

const mapDispatchToProps = dispatch => ({
  getAllPoke : (limit, offset, pokemon_species) => dispatch(getAllPoke(limit, offset, pokemon_species))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokeList)