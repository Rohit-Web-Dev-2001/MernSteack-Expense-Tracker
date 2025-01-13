const express = require("express");
const { default: mongoose } = require("mongoose");
const AuthSchema = mongoose.Schema({

  Username: {
    type: "string",
    required: true,
  },
  Email: {
    type: "string",
    required: true,
  },
  Password: {
    type: "string",
    required: true,
  },
});

const AuthModel = mongoose.model("ETrackerAuth",AuthSchema) 
module.exports =AuthModel