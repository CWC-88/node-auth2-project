
exports.seed = function(knex) {
  return knex('user').del()
  
    .then(function () {
      return knex('user').insert([
        {username: "A", password: 'B', department: "fingerpainting"},
        {username: "JC", password: 'Denton', department: "M&A"},
        {username: "Bob", password: 'Page', department: "Plague distribution"}
      ]);
    });
};
