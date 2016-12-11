import ATV from 'atvjs';
import Handlebars from 'handlebars';

const imageBaseUrl = 'https://placehold.it/';

function assetUrl(name) {
    return `${ATV.launchOptions.BASEURL}assets/${name}`;
}

function imageUrl(name) {
    return ((_.startsWith(name, 'http://') || _.startsWith(name, 'https://')) ? name : `${ATV.launchOptions.BASEURL}assets/img/${name}`);
}

function backgroundImage(img = '', className = '') {
    return `<background><img class="${className}" src="${imageUrl(img)}" /></background>`;
}

const helpers = {
	toJSON(obj = {}) {
		let str;
		try {
			str = JSON.stringify(obj);
		} catch (ex) {
			str = "{}"
		}
		return str;
	},
	asset_url(asset) {
		return new Handlebars.SafeString(assetUrl(asset));
	},
	img_url(img) {
		return new Handlebars.SafeString(imageUrl(img));
	},
	background_image(img) {
		return new Handlebars.SafeString(backgroundImage(img));
	},
	poster_url(size) {
		return new Handlebars.SafeString(`${imageBaseUrl}${size}`);
	},
	duration(duration) {
		return new Handlebars.SafeString(formatDuration(duration));
	},
	toFixed(popularity) {
		return Number.prototype.toFixed.call(popularity, 2);
	},
};

// register all helpers
_.each(helpers, (fn, name) => Handlebars.registerHelper(name, fn));

export default helpers;