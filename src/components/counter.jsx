import React,{ Component } from 'react';

export default class Counter extends Component {
    state={
        count:1,
        imageurl:'https://i.imgur.com/gf9qMMK.png'
    }
    render() {
        return (
            <div>
               <img src={this.state.imageurl} alt='' />
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