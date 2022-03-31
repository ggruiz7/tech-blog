const { Post } = require("../models");

const testPosts = [
  {
    title: "Home Alone",
    body: "come over?",
    user_id: 1,
  },
  {
    title: "Halloween Night",
    body: "How much do you remember about that night?",
    user_id: 2,
  },
  {
    title: "3s a Party",
    body: "I wish it was you who stayed.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(testPosts);

module.exports = seedPosts;
