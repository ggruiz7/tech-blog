const { User } = require("../models");

const testUsers = [
  {
    name: "Celvin",
    password: "hennygod",
    id: 1,
    email: "celvin@gmail.com",
  },
  {
    name: "Jamal",
    password: "696969",
    id: 2,
    email: "jamal@gmail.com",
  },
  {
    name: "Hyun",
    password: "kzombie",
    id: 3,
    email: "hyun@gmail.com",
  },
];

const seedUsers = () => User.bulkCreate(testUsers);

module.exports = seedUsers;
