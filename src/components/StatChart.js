import React, { Component } from 'react'
import { connect } from 'react-redux'
import ApexChart from 'react-apexcharts'

class StatChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        labels: ['SPD', 'SP. DEF', 'SP. ATK', 'DEF', 'ATK', 'HP']
      }
    }
  }

  render() {
    const { options } = this.state
    const { series } = this.props.data
    return (
      <div id="chart">
        <ApexChart options={options} series={series} type="radar" height="250" />
      </div>
    )
  }
}

export default connect(null, null)(StatChart)