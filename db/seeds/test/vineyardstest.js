const vineyardsData = require('../../../seed');

const createVineyard = (knex, vineyard) => {
  return knex('vineyards').insert({
    name: vineyard.name,
    region: vineyard.region,
    website: vineyard.website,
    address: vineyard.address,
    phone: vineyard.phoneNumber
  }, 'id')
    .then(vineyardId => {
      let winePromises = [];

      vineyard.wines.forEach(wine => {
        winePromises.push(
          createWine(knex, {
            name: wine.name,
            color: wine.color,
            type: wine.type,
            vineyard_id: vineyardId[0]
          })
        )
      });
      return Promise.all(winePromises)
    })
}

const createWine = (knex, wine) => {
  return knex('wines').insert(wine)
};

exports.seed = (knex, Promise) => {
  return knex('wines').del()
    .then(() => knex('vineyards').del())
    .then(() => {
      let vineyardPromises = [];
      vineyardsData.forEach(vineyard => {
        vineyardPromises.push(createVineyard(knex, vineyard));
      })
      return Promise.all(vineyardPromises)
    })
    .catch(error => {
      console.log(`Error seeding data: ${error}`)
    })
};