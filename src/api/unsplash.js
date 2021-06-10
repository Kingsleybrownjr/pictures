import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID S-BZDRvOUnIUjbaWwgfLJ2cGVFFDbZPFcx7IrX3nrb4',
	},
});