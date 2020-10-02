import React, {Component} from 'react';
import classNames from 'classnames';
import './style.css';

class Modal extends Component{
    constructor(){
        super();
        this.state = {
            isChecked: true
        }

    }
    handleClick = () => {
        this.setState({
            isChecked:!this.state.isChecked
        })
    }
    render(){
        const {children} = this.props;
        return(
            <div className="container">
                <button 
                    className={classNames("open-modal", {display:this.state.isChecked})}
                    onClick={this.handleClick}
                >OPEN MODAL</button>
                <div 
                    className={classNames("content",{display:!this.state.isChecked}) }
                >
                    <i 
                        class="far fa-times-circle"
                        onClick={this.handleClick}
                    ></i>
                    <p>
                        {children}
                    </p>
                    <div className="btn">
                        <button onClick={this.handleClick}>Accept</button>
                        <button onClick={this.handleClick}>Decline</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Modal;