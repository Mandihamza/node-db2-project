
exports.seed = async function(knex) {
  await knex('cars').insert([
    {"id":1,"VIN":"JM1CR2W34A0675481","make":"Lexus","model":"IS-F","mileage":142801,"transmissionType":"manual","titleStatus":"salvage"},
{"id":2,"VIN":"4JGDF2EE3FA301473","make":"Chevrolet","model":"Equinox","mileage":80493,"transmissionType":"manual","titleStatus":"salvage"},
{"id":3,"VIN":"WAUXF98K09A552674","make":"Mazda","model":"MPV","mileage":68614,"transmissionType":"manual","titleStatus":"irreparable"},
{"id":4,"VIN":"JN1AZ4EH8AM511016","make":"Mitsubishi","model":"Galant","mileage":92061,"transmissionType":"manual","titleStatus":"irreparable"},
{"id":5,"VIN":"3GTXKYEJ1AG361811","make":"Dodge","model":"Ram 2500","mileage":129938,"transmissionType":"automatic","titleStatus":"rebuilt"},
{"id":6,"VIN":"WBADT63401C599358","make":"Chevrolet","model":"Corvette","mileage":137838,"transmissionType":"manual","titleStatus":"salvage"},
{"id":7,"VIN":"WA1LGBFEXFD436373","make":"Chevrolet","model":"Camaro","mileage":187363,"transmissionType":"manual","titleStatus":"rebuilt"},
{"id":8,"VIN":"1G4GB5GRXEF187919","make":"Mazda","model":"B-Series","mileage":149294,"transmissionType":"manual","titleStatus":"irreparable"},
{"id":9,"VIN":"1GYS3DEF1ER416012","make":"Mercury","model":"Mountaineer","mileage":135020,"transmissionType":"manual","titleStatus":"rebuilt"},
{"id":10,"VIN":"JTHBK1EG5C2126991","make":"Studebaker","model":"Avanti","mileage":189571,"transmissionType":"manual","titleStatus":"clean"}
      ]);
}
