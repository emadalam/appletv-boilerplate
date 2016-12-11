import ATV from 'atvjs';
import template from './template.hbs';

import staticData from 'lib/static-data-generator';

var MoviesPage = ATV.Page.create({
    name: 'movies',
    // url: API.discoverMovies,
    data() {
    	return {results: staticData(40)};
    },
    template: template
});

export default MoviesPage;