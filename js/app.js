App = Ember.Application.create({});


    App.ApplicationAdapter = DS.FixtureAdapter.extend();

    App.Author = DS.Model.extend({
      name: DS.attr('string'),
      biography: DS.attr('string'),
      books: DS.hasMany('book', { async: true })
    });

    App.Book = DS.Model.extend({
      name: DS.attr('string'),
      description: DS.attr('string'),
      image: DS.attr('string'),
      author: DS.belongsTo('author', { async: true })
    });




    App.Router.map(function() {
      this.resource('about');
      this.resource('books', function() {
        this.resource('book', { path: ':book_id' });
      });
      this.resource('authors', function() {
        this.resource('author', { path: ':author' });
      });
    });

    App.BooksRoute = Ember.Route.extend({
      model: function(params) {
        return this.store.find('book');
      }
    });

    App.BookRoute = Ember.Route.extend({
      model: function(params) {
        return this.get('store').find('book', params.book_id);
      }
    });


    App.AuthorsRoute = Ember.Route.extend({
      model: function(params) {
        return this.store.find('author');
      }
    });

    App.AuthorRoute = Ember.Route.extend({
      model: function(params) {
        return this.get('store').find('author', params.author);
      }
    });




App.Book.FIXTURES = [{
  "id": 1,
  "name": "Finnegans Wake",
  "image": "http://parallelpress.library.wisc.edu/books/images/finnegans-wake-large.jpg",
  "description": "<p><b>Finnegans Wake</b> comprises seventeen chapters, divided into four Books. Book I contains eight chapters, Books II and III contain four, and Book IV only consists of one short chapter.</p> <p>The chapters appear without titles, and while Joyce never provided possible chapter titles as he had done for Ulysses, he did title various sections published separately (see Publication history below). The standard critical practice, however, is to indicate book number in Roman numerals, and chapter title in Arabic, so that III.2, for example, indicates the second chapter of the third book.</p>",
  "author": 1
},
  {
    "id": 2,
    "name": "Ulysses",
    "image": "http://upload.wikimedia.org/wikipedia/commons/c/c0/UlyssesCover.jpg",
    "description": "<p><b>Ulysses</b> records events in the lives of two central characters--Leopold Bloom and Stephen Dedalus--on a single day in Dublin. With its depth and complexities, Ulysses completely changed our understanding of literature and language.</p>",
    "author": 1
  },
  {
    "id": 3,
    "name": "Tender Is the Night ",
    "image": "http://upload.wikimedia.org/wikipedia/en/d/d2/TenderIsTheNight_%28Novel%29_1st_edition_cover.jpg",
    "description": "<p>It is the French Riviera in the 1920s. <i>Nicole</i> and <i>Dick Diver</i> are a wealthy, elegant, magnetic couple. A coterie of admirers are drawn to them, none more so than the blooming young starlet Rosemary Hoyt. When Rosemary falls for Dick, the Diver's calculated perfection begins to crack. As dark truths emerge, Fitzgerald shows both the disintegration of a marriage and the failure of idealism. <b>Tender is the Night</b> is as sad as it is beautiful.</p>",
    "author": 2
  },
  {
    "id": 4,
    "name": "The Great Gatsby",
    "image": "http://upload.wikimedia.org/wikipedia/en/b/b0/Gatsby_1925_jacket.gif",
    "description": "<p><b>The Great Gatsby</b> is a 1925 novel written by American author <i>F. Scott Fitzgerald</i> that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.</p> <p>The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion for the beautiful Daisy Buchanan. Considered to be Fitzgerald's magnum opus, The Great Gatsby explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age that has been described as a cautionary tale regarding the American Dream.</p>",
    "author": 2
  },
  {
    "id": 5,
    "name": "Anna Karenina",
    "image": "http://upload.wikimedia.org/wikipedia/commons/c/c7/AnnaKareninaTitle.jpg",
    "description": "<p><i>Leo Tolstoy</i>’s classic story of doomed love is one of the most admired novels in world literature. Generations of readers have been enthralled by his magnificent heroine, the unhappily married <i>Anna Karenina</i>, and her tragic affair with dashing <i>Count Vronsky</i>.</p><p>In their world frivolous liaisons are commonplace, but Anna and Vronsky’s consuming passion makes them a target for scorn and leads to Anna’s increasing isolation. The heartbreaking trajectory of their relationship contrasts sharply with the colorful swirl of friends and family members who surround them, especially the newlyweds Kitty and Levin, who forge a touching bond as they struggle to make a life together. <b>Anna Karenina</b> is a masterpiece not only because of the unforgettable woman at its core and the stark drama of her fate, but also because it explores and illuminates the deepest questions about how to live a fulfilled life.</p>",
    "author": 3
  },
  {
    "id": 6,
    "name": "War and Peace",
    "image": "http://bestlittlebookshelf.files.wordpress.com/2010/03/6a00d4141aa2f0685e00fa968f44670003-500pi.jpg",
    "description": "<p><b>War and Peace</b> is a massive, sprawling novel that chronicles events in Russia during the Napoleonic Wars, when the French emperor Napoleon Bonaparte conquered much of Europe during the first few years of the 19th century. Bonaparte unsuccessfully tried to expand his dominion into Russia, only to be turned back in 1812. The novel opens in July of 1805, with Russia allied with England, Austria, and Sweden to stave off Bonaparte’s aggressive expansion.</p>",
    "author": 3
  }];

App.Author.FIXTURES = [{
  "id": 1,
  "name": "James Joyce",
  "biography": "<p><b>James Joyce</b> <small>(February 2, 1882 - January 13, 1941)</small> was one of the most preeminent Irish authors of the twentieth century. He is known for his literary innovation such as a strictly focused narrative and indirect style. Although not strictly originally, James Joyce brought the aforementioned writing methods were to an unparalleled height.</p>",    
  "book_ids": ["1", "2"]
},
  {
    "id": 2,
    "name": "F. Scott Fitzgerald",
    "biography": "<p><b>Francis Scott Key Fitzgerald</b> <small>(September 24, 1896 – December 21, 1940)</small> was an American author of novels and short stories, whose works are the paradigmatic writings of the Jazz Age, a term he coined. He is widely regarded as one of the greatest American writers of the 20th century. Fitzgerald is considered a member of the 'Lost Generation' of the 1920s. He finished four novels: This Side of Paradise, The Beautiful and Damned, The Great Gatsby (his most famous), and Tender Is the Night. A fifth, unfinished novel, The Love of the Last Tycoon, was published posthumously. Fitzgerald also wrote many short stories that treat themes of youth and promise along with age and despair.</p>",
    "book_ids": ["3", "4"]
  },
  {
    "id": 3,
    "name": "Leo Tolstoy",
    "biography": "<p>After reading Schopenhauer's The World as Will and Representation, <b>Tolstoy</b> gradually became converted to the ascetic morality upheld in that work as the proper spiritual path for the upper classes: 'Do you know what this summer has meant for me? Constant raptures over Schopenhauer and a whole series of spiritual delights which I've never experienced before. ... no student has ever studied so much on his course, and learned so much, as I have this summer.'</p>",
    "book_ids": ["5", "6"]
  }];
