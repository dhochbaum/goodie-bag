import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import {loadAllCandiesThunk} from '../reducers'

export class DisconnectedCandies extends Component {
    async componentDidMount() {
        this.props.loadAllCandies();
    }

    render() {
        const candies = this.props.candies

        return(
            <div className='container'>
                <main>
                    <h1>Welcome to the Goodie Bag!</h1>
                    <p>Let's take a look at all these candies!</p>
                    <div id='candies-container' className='row align-items-end'>
                        {candies.map( candy => (
                            <div className="candies-list-item col-12 col-md-4" key={candy.id}>
                                <Link to={`/candies/${candy.id}`}>
                                    <img src={candy.imageUrl} className="img-fluid" />
                                    <p>{candy.name}</p>
                                </Link>
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