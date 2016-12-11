import ATV from 'atvjs';
import template from './template.hbs';

import staticData from 'lib/static-data-generator';

var TvShowsPage = ATV.Page.create({
    name: 'movies',
    // url: API.discoverTvShows,
   	data() {
    	return {results: staticData(40)};
    },
    template: template
});

export default TvShowsPage;