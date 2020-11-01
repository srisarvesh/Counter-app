import React,{ Component } from 'react';

export default class Counter extends Component {
    state={
        count:1,
        imageurl:'https://i.imgur.com/gf9qMMK.png'
    }
    styles={
     fontSize:30,
     fontWeight:20
    }
    render() {
        return (
            <div>
               
               <span className="badge badge-primary m-2" style={this.styles}>{this.formatcount()}</span>
               <button className="btn btn-secomdary btn-sm" style={{fontSize:20 }}>Increment</button>
            </div>
            );
    }
    formatcount()
    {
       const{count}=this.state;
       return count===0?"zero":count;
    }

}