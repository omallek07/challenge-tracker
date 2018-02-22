import React from 'react';
import * as d3 from 'd3';

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    var node  = this.refs.axis;
    var axis = d3[`axis${this.props.orient}`]
    var ticks = axis(this.props.scale).ticks(5)
    d3.select(node).call(ticks);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}
