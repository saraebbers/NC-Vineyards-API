
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('wines', (table) => {
      table.dropColumn('abv');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('wines', (table) => {
      table.integer('abv')
    })
  ])
};
