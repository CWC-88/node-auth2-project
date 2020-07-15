
exports.up = function(knex) {
    return knex.schema.createTable('user', table => {
        table.increments()
        table.string('username').notNullable().unique().index()
        table.string('password').notNullable()
        table.string('department').notNullable()
    })
  }
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user')
  }
  