import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Chart from './chart'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email} = props

  return (
    <div>
      <h3>Welcome to Challenge Tracker</h3>
      <p> Challenge Tracker will be my attempt to research new technologies in order to create a visualization tracker.</p>
      <p> I hope to use this app to keep track of my attemps at learning various whiteboad questions.  I also want to expand to keeping track of other 'challenges' such as fitness activity and public speaking. </p>
      <p> As of this moment, it is my idea to research and use D3 for graph tracking and visualization, firebase and PostGresQL for data storage, and Semantic UI or Material UI for design.  I want to potentially research and use SASS or LESS for CSS and look into Grunt and Gulp, and compare against Webpack. </p>
      <p>I want to use a line graph with D3 to track challenges over time </p>
      <p>This will be an example D3 Graph: </p>
      <Chart />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
