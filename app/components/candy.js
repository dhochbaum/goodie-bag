import React, { Component } from 'react'
import { connect } from 'react-redux'

import {loadOneCandyThunk, changeCandyQuantityThunk } from '../reducers'

export class DisconnectedCandy extends Component {
    async componentDidMount() {
        console.dir(this.props)
        this.props.loadOneCandy(this.props.match.params.id);
    }

    render() {
        const selectedCandy = this.props.selectedCandy

        return(
            <div className='container'>
                <main>
                    <h1>Welcome to the Goodie Bag!</h1>
                    <p>Let's take a look at the candy you've selected!</p>
                    <div id='candy-container'>
                            <div className="candy-view-item row" key={selectedCandy.id}>
                                <div className='col-12 col-md-4'>
                                    <img src={selectedCandy.imageUrl} className="img-fluid" />
                                </div>
                                <div className='col-12 col-md-8'>
                                    <p>{selectedCandy.name}</p>
                                    <p>Quantity: {selectedCandy.quantity}</p>
                                    <button onClick={() => {
                                        this.props.increaseCandyQuantity(selectedCandy.id)
                                    }}>Add Candy</button>
                                    <button onClick={() => {
                                        this.props.decreaseCandyQuantity(selectedCandy.id)
                                    }}>Remove Candy</button>
                                    <p>{selectedCandy.description}</p>
                                </div>
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
        loadOneCandy: (id) => dispatch(loadOneCandyThunk(id)),
        increaseCandyQuantity: (id) => dispatch(changeCandyQuantityThunk(id, 1)),
        decreaseCandyQuantity: (id) => dispatch(changeCandyQuantityThunk(id, -1))
    }
}

export const Candy = connect(mapsStateToProps, mapDispatchToProps)(DisconnectedCandy)