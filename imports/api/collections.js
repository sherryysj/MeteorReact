import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('links');
export const TasksCollection = new Mongo.Collection('tasks');