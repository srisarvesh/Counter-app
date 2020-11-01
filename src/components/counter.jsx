import React,{ Component } from 'react';

export default class Counter extends Component {
    state={
        count:5,
        imageurl:'https://i.imgur.com/gf9qMMK.png'
    }
    styles={
        fontSize:20
    }
    
    render() {
        return (
            <div>
               <span style={this.styles} className={this.g()}>{this.formatcount()}</span>
               <button className="btn btn-secondary btn-sm" style={{fontSize:20 }}>Increment</button>
            </div>
            );
    }
    g()
    {
        let classes="badge m-2 badge-";
        classes+=(this.state.count===0)?"warning":"primary";
        return classes;
 
    } 
    formatcount()
    {
       const{count}=this.state;
       return count===0?"zero":count;
    }

}