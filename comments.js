//Create web server
//Create a web server that listens for requests on port 3000.
//When a request is made to the path /comments, it should return an array of comments.
//The array of comments can be hard-coded in the server file. The comments should have an author and a message property.

const express = require('express');
const app = express();
const port = 3000;

const comments = [
    {