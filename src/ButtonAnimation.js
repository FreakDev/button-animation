import React from 'react';

import './index.css';

const INITIAL_STATE = 0
const STEP1 = 1
const STEP2 = 2

const STATES = [INITIAL_STATE, STEP1]

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
        if (nextStateIndex >= STATES.length) {
            nextStateIndex = 0
        }

        // change la valeur de l'état courant à la prochaine valeur prévue
        this.setState({
            current: STATES[nextStateIndex]
        })
    }
    render() {
        return (
            <div id="div"> 
                    {/* affecte une classe différente à chaque élément en fonction de l'état du composant */}
                    <button id="btn" className={ this.state.current >= STEP1 ? 'reduce-width' : '' } onClick={this.handleClick}>submit </button>
            </div>
        );    
    }
}