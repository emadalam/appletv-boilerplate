import ATV from 'atvjs';
import template from './template.hbs';

import staticData from 'lib/static-data-generator';

var MovieDetailsPage = ATV.Page.create({
	name: 'movie-details',
	template: template,
	ready(options, resolve, reject) {
		// get the unique id of the asset
		/*let movieId = options.id;*/

		// load data and then resolve promise
		/*ATV.Ajax
			.get(API.movieDetails(movieId))
			.then((xhr) => {
				resolve(xhr.response);
			}, (xhr) => {
				// error
				reject();
			});*/

		// for demo using static content
		resolve(staticData());
	}
});

export default MovieDetailsPage;