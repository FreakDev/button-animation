import React from 'react';

import './index.css';

const INITIAL_STATE = 0
const STEP1 = 1
const STEP2 = 2

const STATES = [INITIAL_STATE, STEP1, STEP2]

export default class ButtonAnimation extends React.Component {

    constructor (props) {
        super(props)

        // créer l'état initial
        this.state = {
            current: INITIAL_STATE
        }

        // fix le "this" de la fonction handleClick
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log('clicked')
        // calcul le prochain état que devra prendre l'application
        let currentStateIndex = STATES.indexOf(this.state.current)
        let nextStateIndex = currentStateIndex + 1
        if (nextStateIndex === 1) {
            nextStateIndex = STEP1
        } else if (nextStateIndex === 2) {
            nextStateIndex = STEP2
        }
        console.log(nextStateIndex);
        // change la valeur de l'état courant à la prochaine valeur prévue
        this.setState({
            current: STATES[nextStateIndex]
        })
    }
    render() {
        return (
            <div id="div"> 
                    {/* affecte une classe différente à chaque élément en fonction de l'état du composant */}
                    <button id="btn" className={ this.state.current === STEP1 ? 'reduce-width' : this.state.current === STEP2 ? 'circle' : ''} onClick={this.handleClick}>submit </button>
            </div>
        );    
    }
}