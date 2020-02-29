
exports.up = async function(knex) {
  await knex.schema.alterTable("cars", (table) => {
    table.text("transmissionType")
    table.text("titleStatus")
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable("cars", (table) => {
      table.dropColumns("transmissionType", "titleStatus")
  }) 
};
