<%= collection_namespace %> = Backbone.Collection.extend({

  model: <%= model_namespace %>,
	url: '/<%= collection_name %>',

});