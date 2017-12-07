# Mongoose CRUD App

In lecture today we went over how we can talk to our MongoDB database from our Node/Express code. Much like `pg` with PostGRES, we use `mongoose` to communicate with MongoDB.

## Base Mode

Add the following fields to our Game Schema:

1. `publishedDate` : a Date field for the games published date
2. `votes` :  a Number field to track votes for this game

Update the entry form to accommodate the new published date information. **BUT**, the votes should default to 0 and should not have an input field. Don't worry about updating existing documents.

Both pieces of data should also show up on the DOM.

## Hard Mode

Add a button to each game listing on the DOM that, when clicked, increases their `vote` by 1 and updates their document in the collection. You should be able to vote for a game as many times as you like. 

## Pro Mode

Implement a search feature. This search should be able to search for documents by `name` and should be implemented on the server using `mongoose` methods.

You'll need to figure out a place on the DOM to show the results.

**NOTE, do not use an Angular filter for this! Use Mongoose!**