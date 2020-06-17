import React, { Component } from "react";

export class CountDown extends Component<{}, {countDownFrom: number, happyNewYear: string}> {
    state = {
        countDownFrom: 10,
        happyNewYear: ''
    };

    counter?: number;

    start = () => {
        this.counter = window.setInterval(() => { 
            if(this.state.countDownFrom >= 0) {
                this.setState((preState) => {
                    if(this.state.countDownFrom == 0)
                    {
                        this.state.happyNewYear = 'Happy New Year';
                        return {
                            countDownFrom: 0
                        }           
                    }
                    return {
                        countDownFrom: preState.countDownFrom - 1     
                    };
                });
            }

        }, 1000);
    }

    stop = () => {
        clearInterval(this.counter);
    }

    reset = () => {
        clearInterval(this.counter);
        this.setState(() => {
            return {
                countDownFrom: 10,
                happyNewYear: ''
            }
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <div>
                    <button className='button' onClick={this.start}>Start</button>
                    <button className='button' onClick={this.stop}> Stop</button>
                    <button className='button' onClick={this.reset}>Reset</button>
                </div>
                <span>{this.state.countDownFrom}</span>
                <br/>
                <span>{this.state.happyNewYear}</span>
            </React.Fragment>
        );
    }

}