import React, {Component} from "react";

class Input extends Component {
	state = {
		text: ""
	}
	render(){
		return(
			<div className="Input">
				<form onSubmit={e => this.onSubmit(e)}>
					<input
						onChange={e=> this.onChange(e)}
						value={this.state.text}
						type="text"
						placeholder="Enter your message and press ENTER"
						autoFocus={true}
						/>
						<button>Send</button>
						</form>
				</div>
			);
	}
	onChange(e){
		this.setState({text: e.target.value});
	}
	onSubmit(e) {
		e.preventDefault();
		this.props.onSendMessage(this.state.text);
		this.setState({text: ""});
		
	}
}

export default Input;