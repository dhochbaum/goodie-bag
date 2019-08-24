import React, { Component } from 'react'
import { connect } from 'react-redux'

import {loadOneCandyThunk} from '../reducers'

export class DisconnectedCandy extends Component {
    async componentDidMount() {
        console.dir(this.props)
        this.props.loadOneCandy(this.props.match.params.id);
    }

    render() {
        const selectedCandy = this.props.selectedCandy

        return(
            <div>
                <main>
                    <h1>Welcome to the Goodie Bag!</h1>
                    <p>Let's take a look at the candy you've selected!</p>
                    <div id='candy-container'>
                            <div className="candy-view-item" key={selectedCandy.id}>
                                <img src={selectedCandy.imageUrl}></img>
                                <p>{selectedCandy.name}</p>
                                <p>Quantity: {selectedCandy.quantity}</p>
                                <p>{selectedCandy.description}</p>
                            </div>
                    </div>
                </main>
            </div>

        )
    }
}

const mapsStateToProps = state => {
    return {
        selectedCandy: state.selectedCandy
    }
}

const mapDispatchToProps = (dispatch, id) => {
    return {
        loadOneCandy: (id) => dispatch(loadOneCandyThunk(id))
    }
}

export const Candy = connect(mapsStateToProps, mapDispatchToProps)(DisconnectedCandy)