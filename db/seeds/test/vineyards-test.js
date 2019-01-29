const seedData = require('../../../seed');
const createVineyard = (knex, vineyard) => {
  return knex('vineyard').insert({
    name: seedData.vineyard.name,
    region: seedData.vineyard.region,
    website: seedData.vineyard.website,
    address: seedData.vineyard.address,
    phone: seedData.vineyard.phoneNumber
  }, 'id')
}

const createWine = (knex, wine) => {
  return knex('wine').insert({
    
  })
}
exports.seed = function(knex, Promise) {
  return knex('wines').del()
    .then(() => knex('vineyards').del())
    .then(() => {
      return Promise.all([
        knex('vineyards').insert({
        name: 'Raffaldini VineYards & Winery',
        region: 'Piedmont',
        website: 'www.raffaldini.com',
        address: '450 Groce Road, Ronda, NC 28670',
        phone: '(336) 835-9463',
        }, 'id')
        .then(vineyard => {
          return knex('wines').insert([
            {vineyard_id: vineyard[0],
              name: 'Something Red',
              abv: 4,
              color: 'red',
              type: 'cabernet sauvignon'}, 
            {vineyard_id: vineyard[0],
            name: 'Something White',
            abv: 4,
            color: 'white',
            type: 'Pino Gris'}
          ])
        })
        .then(() => console.log('Seeding Complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`)),
        knex('vineyards').insert({
          name: 'Raffaldini VineYards & Winery',
          region: 'Piedmont',
          website: 'www.raffaldini.com',
          address: '450 Groce Road, Ronda, NC 28670',
          phone: '(336) 835-9463',
          }, 'id')
        
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};