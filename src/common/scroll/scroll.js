import React, { Component } from 'react'
import BScroll from 'better-scroll'

class Banner extends Component {

    constructor (props) {
        super(props)
        this.sate = {
            scroll: null
        }
    }

    componentDidMount () {
        let scroll = new BScroll(this.refs.scroll)
        this.setState({scroll})
    }

    render() {
        return (
            <div className="scroll" ref="scroll">
                {this.props.children}
            </div>
        );
    }
}

export default Banner
