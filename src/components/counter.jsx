import React,{ Component } from 'react';

export default class Counter extends Component {
    state={
        count:0
    }
    render() {
        return (
            <div>
               <span>{this.formatcount()}</span>
               <button>Increment</button>
            </div>
            );
    }
    formatcount()
    {
       const{count}=this.state;
       return count===0?"zero":count;
    }

}