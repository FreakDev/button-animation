import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ButtonAnimation extends React.Component {

    handleClick(){
        console.log('clicked')
        var startAnimate = document.getElementById('btn');
        var circle = document.getElementById('cl');
        startAnimate.classList.add('reduce-width');
        circle.classList.add('progress-circle');
    }
    render() {
        return (
            <div id="div"> 
                    <button id="btn" onClick={this.handleClick}>submit </button>
                    <svg id="cl" className="circle" width="70" height="70">
                        <path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/>
                    </svg>
            </div>
        );    
    }
}

ReactDOM.render(<ButtonAnimation />, document.getElementById('root'));

