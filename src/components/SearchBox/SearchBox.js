import React, {Component} from 'react';
import classNames from 'classnames';
import './style.css';

class SearchBox extends Component{
    constructor(){
        super();
        this.state = {
            isFocused:false
        };
        
    }
    focusInput(){
        this.setState({isFocused:true});
    }
    render(){
        return(
            <div className="SearchBox">
                <input 
                    placeholder="type something to search..." 
                    onFocus={()=> this.setState({isFocused:true})}
                    onBlur = {()=> this.setState({isFocused:false})}
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