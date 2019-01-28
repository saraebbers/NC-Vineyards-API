
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('vineyards', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('region');
      table.string('website');
      table.string('address');
      table.string('phone');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('wines', function(table) {
      table.increments('id').primary();
      table.integer('vineyard_id').unsigned()
      table.foreign('vineyard_id')
        .references('vineyards.id');
      table.string('name');
      table.integer('abv');
      table.string('color');
      table.string('type');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('wines'),
    knex.schema.dropTable('vineyards')
  ])
};
