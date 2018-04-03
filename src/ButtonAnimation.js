import React from 'react';

import './index.css';

const INITIAL_STATE = 'a'
const STEP1 = 'b'
const STEP2 = 'c'
const STEP3 = 'd'
const STEP4 = 'e'

const STATES = [INITIAL_STATE, STEP1, STEP2, STEP3, STEP4]

export default class ButtonAnimation extends React.Component {

    constructor (props) {
        super(props)

        // créer l'état initial (avant clic)
        this.state = {
            current: INITIAL_STATE 
        }

        // fix le "this" de la fonction handleClick
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

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
        let buttonClass;
        let apparitionTick;
        let orderConfirmed;
    
        switch(this.state.current){

            case STEP1:
                buttonClass = 'reduce-width'
            break
            case STEP2:
                buttonClass = 'circle'
            break
            case STEP3:
                buttonClass = 'stay-hidden' 
                apparitionTick = 'tick-appear'
            break;
            case STEP4:
                buttonClass = 'stay-hidden'
                orderConfirmed = 'text-appear'
                apparitionTick = 'tick-appear'
            break;
        }
        
        return (
            <div>
                <div id="div"> 
                    {/* affecte une classe différente à chaque élément en fonction de l'état du composant */}
                    <button className= {'initial-state ' + buttonClass} onClick={this.handleClick}>submit</button>
                </div>
                <div>
                    <button className= {'tick ' + apparitionTick}>tick</button>
                </div>
                <div>
                    <p className={'text ' + orderConfirmed}>commande confirmée</p>
                </div>
                <button id="btn-test" onClick={this.handleClick}>test</button>
            </div>
        );    
    }
}