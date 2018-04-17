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

        this.state = {
            current: INITIAL_STATE 
        }
    }
    
    componentWillReceiveProps(){
       
        if (this.props.stopAt < 2) {
            this.setState({
                current: STATES[2]
            })
        } else {
            this.setState({
                    current: STATES[4]
                })   
        }
    }

    render() {
        
        let buttonClass;
        let circleClass;
        let circleProgress;
        let circleFilled;
        let apparitionTick;
        let orderConfirmed;
        
        switch(this.state.current){

            case STEP1:
                buttonClass = 'reduce-width'
                circleClass = 'circle-animation'
            break
            case STEP2:
                buttonClass = 'reduce-width'
                circleClass = 'circle-progress-appear'
            break
            case STEP3:
                buttonClass = 'stay-hidden'
                apparitionTick = 'tick-appear'
            break;
            case STEP4:
                buttonClass = 'stay-hidden'
                apparitionTick = 'tick-appear'
                orderConfirmed = 'text-appear'
                circleFilled = 'circle-progress-move'
            break
        }
        
        return (
            <div>
                <div id="div"> 
                    {/* affecte une classe différente à chaque élément en fonction de l'état du composant */}
                    <div className= {'initial-state ' + buttonClass}  > confirmer la commande </div>
                    <div className= {'circle-progress ' + circleClass + ' ' + circleProgress}>
                        <svg className="progress" width="50" height="120" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" strokeWidth="2" />
                            <circle className="progress__value" cx="60" cy="60" r="54" fill="none" stroke="#f27242" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className= {circleFilled}></div>
                    <div className= {'tick ' + apparitionTick} > </div>
                    <div className={'text ' + orderConfirmed} >Commande confirmée</div>
                </div>
            </div>
        )    
    }
}