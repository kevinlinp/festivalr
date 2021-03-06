import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { initCollection } from './common.js'

export const MusicResults = initCollection('musicResults')

if (Meteor.isServer) {
  Meteor.publish('musicResults', () => MusicResults.find())
}
