import React, { Component } from 'react'
import { connect } from 'react-redux'

import {loadAllCandiesThunk} from '../reducers'

export class DisconnectedCandies extends Component {
    async componentDidMount() {
        this.props.loadAllCandies();
    }

    render() {
        const candies = this.props.candies

        return(
            <div>
                <main>
                    <h1>Welcome to the Goodie Bag!</h1>
                    <p>Let's take a look at all these candies!</p>
                    <div id='candies-container'>
                        {candies.map( candy => (
                            <div className="candies-list-item" key={candy.id}>
                                <img src={candy.imageUrl}></img>
                                <p>{candy.name}</p>
                            </div>
                        ))}
                    </div>
                </main>
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