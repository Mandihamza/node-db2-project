
exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
      table.increments("id").primary()
      table.text("buyerName").notNull()
      table.float("salePrice").notNull()
      table.float("discountAmount")
      table.bigInteger('carId')
        .unsigned()
        .notNull()
        .references('id')
        .inTable('cars')
        .onDelete('CASCADE')
        .index()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales')
};
