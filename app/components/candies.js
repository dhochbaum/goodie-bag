import React, { Component } from 'react'
import { connect } from 'react-redux'

import {loadAllCandiesThunk} from '../reducers'
//import {loadAllCandiesThunk} from '../main' WHICH ONE IS IT?

export class DisconnectedCandies extends Component {
    componentDidMount() {
        this.props.loadAllCandies();
    }

    render() {
        console.log(this.props)
        return(
            <div id='candies-container'>
                CANDIES GO HERE
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return {
        candies: state.candies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadAllCandies: () => dispatch(loadAllCandiesThunk())
    }
}

export const Candies = connect(mapsStateToProps, mapDispatchToProps)(DisconnectedCandies)