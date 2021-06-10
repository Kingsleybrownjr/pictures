import { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };

	onSubmitForm = e => {
		e.preventDefault();
		console.log(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onSubmitForm}>
					<div className="field">
						<label htmlFor="search-bar">Image Search: </label>
						<input
							type="text"
							id="search-bar"
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
