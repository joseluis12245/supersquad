import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCharacterById } from '../actions';

class HeroList extends Component{
    render(){
        return(
            <div>
            <h4>Your Hero Squad:</h4>
            <ul>
                {
                    this.props.heroes.map(hero => {
                        return(
                            <li key={hero.id} className="list-group-item">
                                <div className="list-item">
                                    {hero.name}
                                </div>
                                <div
                                    className="list-item right-button"
                                    onClick={()=> this.props.deleteCharacterById(hero.id)}
                                    >
                                        -
                                    </div>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, {deleteCharacterById})(HeroList);