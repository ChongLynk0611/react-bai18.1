import React, {Component} from 'react';
import classNames from 'classnames';
import './style.css';

class SearchBox extends Component{
    constructor(){
        super();
        this.state = {
            isFocused:false,
            content:""
        };
        
    }
    focusInput(){
        this.setState({isFocused:true});
    }
    render(){
        return(
            <div className="SearchBox">
                <input 
                    className = {classNames({boder_input:this.state.content.length > 10 })}
                    placeholder="type something to search..." 
                    onFocus={()=> this.setState({isFocused:true})}
                    onBlur = {()=> this.setState({isFocused:false})}
                    onChange = {(e) => this.setState({content:e.target.value})}
                >
                </input>
                <div className={classNames("container-icon",{active: this.state.isFocused})}>
                    <i class="fas fa-search"></i>
                </div>
            </div>
        );
    }
}

export default SearchBox;