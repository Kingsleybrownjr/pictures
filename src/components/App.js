import { Component } from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends Component {
	state = { images: [] };

	onSearchSubmit = async term => {
		const res = await unsplash.get(`/search/photos`, {
			params: {
				query: term,
			},
		});

		this.setState({ images: res.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '1rem' }}>
				<SearchBar searchTerm={this.onSearchSubmit} />
				<p className="text-color">Found: {this.state.images.length} images</p>

				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;

//S-BZDRvOUnIUjbaWwgfLJ2cGVFFDbZPFcx7IrX3nrb4
