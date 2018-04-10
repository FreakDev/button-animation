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
        /*
        this.buttonRef = null;
        this.setButtonRef = buttonElement => {
            this.buttonRef = buttonElement;
        }
        this.loadingCircleRef = null;
        this.setLoadingCircleRef = loadingCircle => {
            this.loadingCircleRef = loadingCircle;
        }
        this.tickRef = null;
        this.setTickRef = tick => {
            this.tickRef = tick
        }*/
        this.state = {
            current: INITIAL_STATE 
        }
        this.handleButtonTransition = this.handleButtonTransition.bind(this)
        //this.goNextState = this.goNextState.bind(this)
    }

    handleButtonTransition() {
        this.handleClick()
        /*this.setState({
            current: STATES[2]
        })*/
        console.log(('transition bouton'))
    }
    /*
    componentDidMount() {
        this.buttonRef.addEventListener('transitionend', this.goNextState)
        this.loadingCircleRef.addEventListener('transitionend', this.goNextState)
        this.tickRef.addEventListener('transitionend', this.goNextState)
    }
    componentWillUnmount() {
        this.buttonRef.addEventListener('transitionend', this.goNextState)
        this.loadingCircleRef.addEventListener('transitionend', this.goNextState)
        this.tickRef.addEventListener('transitionend', this.goNextState)
    }
    */
    handleClick= () => {

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
    /*
    handleClick(){
        this.goNextState()
    }*/
    render() {
        
        let buttonClass;
        let circleClass;
        let apparitionTick;
        let orderConfirmed;
        
        switch(this.state.current){

            case STEP1:
                buttonClass = 'reduce-width'
            break
            case STEP2:
                buttonClass = 'stay-hidden'
                circleClass = 'circle-animation'
            break
            
            case STEP3:
                buttonClass = 'stay-hidden' 
                apparitionTick = 'tick-appear'
                circleClass ='circle-animation'
            break;
            case STEP4:
                buttonClass = 'stay-hidden'
                apparitionTick = 'tick-appear'
                orderConfirmed = 'text-appear'
                circleClass ='circle-animation'
            break;
        }
        
        return (
            <div>
                <div id="div"> 
                    {/* affecte une classe différente à chaque élément en fonction de l'état du composant */}
                    <button className= {'initial-state ' + buttonClass} onTransitionEnd={this.handleButtonTransition} onClick= {this.handleClick} >submit</button>
                    <div className = {'circle ' + circleClass} onTransitionEnd= {this.handleTransition} ></div>
                    <button className= {'tick ' + apparitionTick} onTransitionEnd={this.handleTransition} >tick</button>
                    <p className={'text ' + orderConfirmed} >commande confirmée</p>
                </div>
                <div>
                </div>
                <button id="btn-test" onClick={this.handleClick}>test</button>
            </div>
        );    
    }
}