import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import StatChart from './StatChart'
import { Card, Button, Image, Grid } from 'semantic-ui-react'

const PokeCard = props => {
  const { loading } = props
  const { item } = props.data
  const statArr = item.stats.map(each => each.base_stat)
  return (
    <Fragment>
      {
        !loading && (
          <Card>
            <Card.Content>
              <Grid align='left'>
                <Grid.Column floated='left' width={6}>
                  <Card.Header style={{'textTransform': 'capitalize', 'fontWeight': 'bold'}}>{item.name}</Card.Header>
                </Grid.Column>
                <Grid.Column floated='right' align='right' width={10}>
                  {
                    item.types.map((each, i) => (
                      <Button key={i} circular className={`type-bg-${each.type.name}`} size='tiny' >{each.type.name}</Button>
                    ))
                  }
                </Grid.Column>
              </Grid>
              <Image align='center' size='small' src={item.sprites.front_default} />
              <StatChart style={{'marginTop': '-50px'}} data={{ series: [{ name: item.name, data: statArr }]}}/>
            </Card.Content>
          </Card>
        )
      }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  loading: state.pokeReducer.loading
})

export default connect(mapStateToProps, null)(PokeCard)