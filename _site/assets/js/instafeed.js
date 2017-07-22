$(document).foundation();

$(function() {
  var feed = new Instafeed({
	        get: 'user',
	        userId: '4841909653',
	        accessToken: '4841909653.1677ed0.baae871499174b5daac3d28e2e71922e',
	        template: '<div class="column images__image excerpt"><div class="excerpt__image__container"><div class="excerpt__image"><img src="{{image}}" alt="{{caption}}"/><div class="excerpt__image__text">{{caption}}</div></div></div></div>',
	        resolution: 'standard_resolution'
    });
    feed.run();
})