import React from 'react'

import ButtonAnimation from './ButtonAnimation'


export default class Page extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            stopAt: 0,
            busy: false
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick () {
        if (!this.state.busy) {
            this.setState({
                stopAt: 2,
                busy: true
            })
            setTimeout(() => {
                this.setState({
                    stopAt: 4 ,
                    busy: false
                })                
            }, 3000)    
        }
    }

    onAnimationEnd= () => {
        console.log('whole animation ends')

    }

    render () {
        return (
            <ButtonAnimation stopAt={ this.state.stopAt } onClick={ this.onClick } onAnimationEnd={ this.onAnimationEnd} />
        )
    }
}