App = Ember.Application.create({});

App.Author = DS.Model.extend({
  name: DS.attr('string'),
  biography: DS.attr('string'),
  book_ids: DS.hasMany('book', { async: true })
});

App.Book = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  author_ids: DS.hasMany('author', { async: true })
});

App.Router.map(function() {
  this.resource('about');
  this.resource('books', function() {
    this.resource('book', { path: '/:book_id' });
  });
  this.resource('authors', function() {
    this.resource('author', { path: '/:author_id' });
  });
});
App.BooksRoute = Ember.Route.extend({
  model: function() {
   return this.store.find('book');
 }
});


App.AuthorsRoute = Ember.Route.extend({
   model: function() {
     return this.store.find('author');
   }
 });

App.ApplicationAdapter= DS.RESTAdapter.extend({
  host:'json',
  pathForType: function(type) {
    return Ember.String.pluralize(type) + '.json';
  }
}) ;
