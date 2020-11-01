import React,{ Component } from 'react';

export default class Counter extends Component {
    state={
        count:5,
        imageurl:'https://i.imgur.com/gf9qMMK.png',
        tags:['tag1','tag2']
    }
    styles={
        fontSize:20
    }
    rendertags(){
        if(this.state.tags.length===0){
            return <p>There are no tags</p>;
        }
        
    return (
    <ul>
        {
        this.state.tags.map(Tag=><li key={Tag}>{Tag}</li>)
        }
    </ul>
    );
    
}
    
    render() {
        return (
            <div>
               <span style={this.styles} className={this.g()}>{this.formatcount()}</span>
               <button className="btn btn-secondary btn-sm" style={{fontSize:20 }}>Increment</button>
               {this.rendertags()};
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