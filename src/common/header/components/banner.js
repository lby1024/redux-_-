import React, { Component } from 'react';
import './banner.css'
import { connect } from "react-redux"
import { actions } from '../../../redux/reducer.js'

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                {this.props.number}
                <button onClick={this.props.add}>add</button>
                <button onClick={this.props.minus}>minus</button>
                <button onClick={this.props.addAync}>addAsync</button>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {number: state.number}
}
let {add, minus, addAync} = actions
const actionCreators = {add, minus, addAync}

Banner = connect(mapStatetoProps, actionCreators)(Banner)

export default Banner;