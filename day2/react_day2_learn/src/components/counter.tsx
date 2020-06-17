import React, { Component } from "react";

export class Counter extends Component<{}, {count: number}> {
    state = {
        count: 1
    };

    inc = () => {
        this.setState((preState) => {
            console.log(preState);
            return {
                count: preState.count + 1
            };
        })
    }

    desc = () => {
        this.setState((preState) => {
            console.log(preState);
            return {
                count: preState.count - 1
            };
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.desc}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.inc}>+</button>
            </div>
        );
    }
}