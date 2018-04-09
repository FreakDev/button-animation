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
        
        // créer l'état initial (avant clic)
        this.state = {
            current: INITIAL_STATE 
        }
        // fix le "this" de la fonction handleClick
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        var that = this
        this.buttonRef.addEventListener('transitionend', function(){
            that.setState({
                current: STATES[2]
            })
        console.log('1- state: ' + that.state.current)
        })
        
        this.loadingCircleRef.addEventListener('transitionend', function(){
            that.setState({
                current: STATES[3]
            })
        console.log('2- state: ' + that.state.current)
        })
        this.tickRef.addEventListener('transitionend', function(){
            that.setState({
                current: STATES[4]
            })
        console.log('3- state: ' + that.state.current)
        })
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
                    <button className= {'initial-state ' + buttonClass} ref = {this.setButtonRef} onClick={this.handleClick}>submit</button>
                    <div className = {'circle ' + circleClass} ref={this.setLoadingCircleRef}></div>
                    <button className= {'tick ' + apparitionTick} ref={this.setTickRef}>tick</button>
                    <p className={'text ' + orderConfirmed} >commande confirmée</p>
                </div>
                <div>
                </div>
                <button id="btn-test" onClick={this.handleClick}>test</button>
            </div>
        );    
    }
}