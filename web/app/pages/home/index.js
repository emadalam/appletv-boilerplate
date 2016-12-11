import ATV from 'atvjs';
import template from './template.hbs';

import staticData from 'lib/static-data-generator';

var HomePage = ATV.Page.create({
	name: 'home',
	template: template,
	ready(options, resolve, reject) {
		// get data from multiple requests
		/*let getPopularMovies = ATV.Ajax.get(API.popularMovies);
		let getPopularTvShows = ATV.Ajax.get(API.popularTvShows);*/

		// Then resolve them at once
		/*Promise
			.all([getPopularMovies, getPopularTvShows])
			.then((xhrs) => {
				let movies = xhrs[0].response;
				let tvShows = xhrs[1].response;

				resolve({
					movies: movies.results,
					tvShows: tvShows.results
				});
			}, (xhr) => {
				// error
				reject();
			});*/
		
		// for demo using static content
		resolve({
			movies: staticData(12),
			tvShows: staticData(12)
		});
	}
});

export default HomePage;