import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../imports/api/collections';
import { LinksCollection } from '/imports/api/collections';

/*
// normal function
function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}
*/

// arrow function
//const insertTask = taskText => TasksCollection.insert({text:taskText});

Meteor.startup(() => {
  /*
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });
  }
  */
});
