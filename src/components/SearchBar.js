import { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };

	onSubmitForm = e => {
		e.preventDefault();
		this.props.searchTerm(this.state.term);
		this.setState({ term: '' });
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onSubmitForm}>
					<div className="field ">
						<label className='text-color' htmlFor="search-bar">Image Search: </label>
						<input
							className="text-color"
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
