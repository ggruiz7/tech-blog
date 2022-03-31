const { Comment } = require("../models");

const testComments = [
  {
    body: "when youre sober",
    user_id: 1,
    id: 1,
  },
  {
    body: "More than I would like to",
    user_id: 2,
    id: 2,
  },
  {
    body: "...",
    user_id: 3,
    id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(testComments);

module.exports = seedComments;
