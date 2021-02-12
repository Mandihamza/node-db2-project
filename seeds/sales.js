
exports.seed = async function(knex) {
  await knex('sales').insert([
    {
      "id": 1,
      "buyerName": "Aggie Hought",
      "salePrice": 60410.58,
      "discountAmount": 41465.54,
      "carId": 1
    }, {
      "id": 2,
      "buyerName": "Tandi Barrand",
      "salePrice": 25024.61,
      "discountAmount": 76701.08,
      "carId": 10
    }, {
      "id": 3,
      "buyerName": "Carmela Michie",
      "salePrice": 12736.54,
      "discountAmount": 29175.99,
      "carId": 10
    }, {
      "id": 4,
      "buyerName": "Field Hawthorne",
      "salePrice": 37982.87,
      "discountAmount": 19679.87,
      "carId": 5
    }, {
      "id": 5,
      "buyerName": "Laryssa Esslement",
      "salePrice": 47276.06,
      "discountAmount": 6447.05,
      "carId": 5
    }, {
      "id": 6,
      "buyerName": "Clarabelle Caizley",
      "salePrice": 63241.29,
      "discountAmount": 59514.71,
      "carId": 10
    }, {
      "id": 7,
      "buyerName": "Kelsi Duncanson",
      "salePrice": 36647.24,
      "discountAmount": 38910.23,
      "carId": 5
    }, {
      "id": 8,
      "buyerName": "Phebe Tremethack",
      "salePrice": 10612.27,
      "discountAmount": 34219.36,
      "carId": 1
    }, {
      "id": 9,
      "buyerName": "Stanislaus Foale",
      "salePrice": 37339.87,
      "discountAmount": 62593.93,
      "carId": 6
    }, {
      "id": 10,
      "buyerName": "Gregorius Peet",
      "salePrice": 69876.56,
      "discountAmount": 46327.97,
      "carId": 3
    }, {
      "id": 11,
      "buyerName": "Alyson Castanyer",
      "salePrice": 53674.88,
      "discountAmount": 71897.12,
      "carId": 10
    }, {
      "id": 12,
      "buyerName": "Celestina Teresse",
      "salePrice": 1605.34,
      "discountAmount": 64874.49,
      "carId": 4
    }, {
      "id": 13,
      "buyerName": "Claire Woollends",
      "salePrice": 73864.29,
      "discountAmount": 30327.1,
      "carId": 10
    }, {
      "id": 14,
      "buyerName": "Etan Shory",
      "salePrice": 52270.98,
      "discountAmount": 60239.52,
      "carId": 8
    }, {
      "id": 15,
      "buyerName": "Arlin Southouse",
      "salePrice": 74792.54,
      "discountAmount": 41626.04,
      "carId": 7
    }
      ]);
}
