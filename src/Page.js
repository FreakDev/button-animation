import React from 'react'

import ButtonAnimation from './ButtonAnimation'


export default class Page extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            stopAt: 0
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick () {
        this.setState({
            stopAt: this.state.stopAt === 0 ? 2 : 4 
        })
    }

    onAnimationEnd= () => {
        console.log('whole animation ends')

    }

    render () {
        return (
            <div>
                <ButtonAnimation stopAt={ this.state.stopAt } onAnimationEnd={ this.onAnimationEnd} />

                <button onClick={ this.onClick} >trigger</button>
            </div>
        )
    }
}