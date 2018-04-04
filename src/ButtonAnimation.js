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
 
        this.buttonRef = null;
        this.setButtonRef = buttonElement => {
            this.buttonRef = buttonElement;
        }
        this.loadingCircleRef = null;
        this.setLoadingCircleRef = loadingCircle => {
            this.loadingCircleRef = loadingCircle;
        }
        this.setTickRef = tick => {
            this.tickRef = tick
        }
        
        this.textRef = null;
        this.setTextRef = texte => {
            this.textRef = texte;
        }
        // créer l'état initial (avant clic)
        this.state = {
            current: INITIAL_STATE 
        }
        // fix le "this" de la fonction handleClick
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        let circle = this.loadingCircleRef
        this.buttonRef.addEventListener('transitionend', function(){
            console.log('transition terminée')
            circle.className = 'circle ' + 'circle-animation';
        });
        
        let tick = this.tickRef;
        this.loadingCircleRef.addEventListener('transitionend', function(){
            tick.className = 'tick ' + 'tick-appear'
        })

        let texte = this.textRef;
        this.tickRef.addEventListener('transitionend', function(){
            texte.className = 'text ' + 'text-appear'
        })
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
            default: buttonClass = 'initial-state'
            /*case STEP2:
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
            break;*/
        }
        
        return (
            <div>
                <div id="div"> 
                    {/* affecte une classe différente à chaque élément en fonction de l'état du composant */}
                    <button className= {'initial-state ' + buttonClass} ref = {this.setButtonRef} onClick={this.handleClick}>submit</button>
                    <div className = {'circle ' + this.loadingCircleRef} ref={this.setLoadingCircleRef}></div>
                    <button className= {'tick ' + this.tickRef} ref={this.setTickRef}>tick</button>
                    <p className={'text ' + this.textRef} ref={this.setTextRef}>commande confirmée</p>
                </div>
                <div>
                </div>
                <button id="btn-test" onClick={this.handleClick}>test</button>
            </div>
        );    
    }
}