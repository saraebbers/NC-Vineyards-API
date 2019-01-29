const vineyards = [
  {
    name: 'Addison Farms Vineyard',
    region: 'Mountains',
    website: 'www.addisohttp://www.addisonfarms.net/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstreamnfarms.net',
    address: '4005 NEW LEICESTER HWY LEICESTER, NC',
    phoneNumber: '(828) 581-9463',
    id: 1
  },
  {
    name: 'Banner Elk Winery',
    region: 'Mountains',
    website: 'http://www.bannerelkwinery.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream',
    address: '60 Deer Run Lane, Banner Elk, NC 28604',
    phoneNumber: '(828) 898-9090',
    id: 2
  },
  {
    name: 'Belle Nicho Winery',
    region: 'Mountains',
    website: 'http://www.bellenichowinery.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream#wines-section',
    address: '525 Patton Valley Drive, Nebo, NC 28761',
    phoneNumber: '(828) 659-3168',
    id: 3
  },
  {
    name: 'Biltmore',
    region: 'Mountains',
    website: 'https://www.biltmore.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream',
    address: 'One Approach Road, Asheville, NC 28803',
    phoneNumber: '(828) 225-1333',
    id: 4
  },
  {
    name: 'Burntshirt Vineyards',
    region: 'Mountains',
    website: 'https://www.burntshirtvineyards.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream',
    address: '2695 Sugarloaf Rd., Hendersonville, NC 28792',
    phoneNumber: '(828) 685-2402',
    id: 5
  },
  {
    name: 'Deep Creek Winery',
    region: 'Mountains',
    website: 'https://www.deepcreekwinery.com/',
    address: '405 Jonathan Walk, Bryson City, NC 28713',
    phoneNumber: '(828) 506-0133',
    id: 6
  },
  {
    name: 'FernCrest Winery',
    region: 'Mountains',
    website: 'http://www.ferncrestwinery.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream',
    address: '1060 Main Street, Andrews, NC 28901',
    phoneNumber: '(828) 321-1600',
    id: 7
  },
  {
    name: 'Grandfather Vineyard',
    region: 'Mountains',
    website: 'https://www.grandfathervineyard.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream',
    address: '225 Vineyard Lane, Banner Elk, NC 28604',
    phoneNumber: '(828) 963-2400',
    id: 8
  },
  {
    name: 'Jones vonDrehle Vineyards & Winery',
    region: 'Mountains',
    website: 'https://www.jonesvondrehle.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream',
    address: '964 Old Railroad Grade Road, Thurmond, NC 28683',
    phoneNumber: '(336) 874-2800',
    id: 9
  },
  {
    name: 'Silver Fork',
    region: 'Mountains',
    website: 'https://www.silverforkwinery.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream',
    address: '5000 Patton Road, Morganton, NC 28655',
    phoneNumber: '(828) 391-8783',
    id: 10
  },
  {
    name: 'A Secret Garden Winery',
    region: 'Coast',
    website: 'www.asecretgardenwinery.com',
    address: '1008 Airport Road, Pikeville, NC 27863-9130',
    phoneNumber: '(919) 734-0260',
    id: 11
  },
  {
    name: 'Duplin Winery',
    region: 'Coast',
    website: 'www.duplinwinery.com',
    address: '505 N. Sycamore Street, Rose Hill, NC 28458',
    phoneNumber: '(910) 289-3888',
   id: 12
  },
  {
    name: 'Huffman Vineyards Winery & Mirey Creek Gifts',
    region: 'Coast',
    website: 'www.huffmanvineyards.com',
    address: '221 Haw Branch Road, Richlands, NC 28574',
    phoneNumber: '(910) 324-3997',
    id: 13
  },
  {
    name: 'Lu Mil Vineyard',
    region: 'Coast',
    website: 'www.lumilvineyard.com',
    address: '474 Suggs-Taylor Rd., Dublin, NC 28332',
    phoneNumber: '(910) 866-5819',
    id: 14
  },
  {
    name: 'Sanctuary Vineyards',
    region: 'Coast',
    website: 'www.sanctuaryvineyards.com',
    address: '6957 Caratoke Hwy, Jarvisburg, NC 27947',
    phoneNumber: '(252) 491-2387',
    id: 15
  },
  {
    name: 'The Country Squire Winery',
    region: 'Coast',
    website: 'www.countrysquireinn.com',
    address: '748 NC 24 & 50, Warsaw, NC 28398',
    phoneNumber: '(910) 296-1727',
    id: 16
  },
  {
    name: 'Grapefull Sisters Vineyard',
    region: 'Coast',
    website: 'www.grapefullsistersvineyard.com',
    address: '4903 Ramsey Ford Road, Tabor City, NC 28463',
    phoneNumber: '(910) 653-2944',
    id: 17
  },
  {
    name: 'Lake Road Winery',
    region: 'Coast',
    website: 'www.lakeroadwinery.com',
    address: '1120 Lake Road, Newport, NC 28570',
    phoneNumber: '(252) 622-0930',
    id: 18
  },
  {
    name: 'Silver Coast Winery',
    region: 'Coast',
    website: 'www.silvercoastwinery.com',
    address: '6680 Barbeque Rd., Ocean Isle Beach, NC 28469',
    phoneNumber: '(910) 287-2800',
    id: 19
  },
  {
    name: 'Vineyards on the Scuppernong',
    region: 'Coast',
    website: 'www.vineyardsonthescuppernong.com',
    address: '117 Elm St, Columbia, NC 27925',
    phoneNumber: '(252) 796-4727',
    id: 20
  },
  {
    name: 'RagApple Lassie Vineyards',
    region: 'Piedmont',
    website: 'www.ragapplelassie.com',
    address: '3724 RagApple Lassie Lane, Boonville, NC 27011',
    phoneNumber: '(336) 367-6000',
    id: 21
  },
  {
    name: 'Baker Buffalo Creek Vineyard & Winery',
    region: 'Piedmont',
    website: 'www.bakerbuffalocreek.com',
    address: '3521 Fallston-Waco Road, Lawndale, NC 28090',
    phoneNumber: '(704) 538-9927',
    id: 22
  },
  {
    name: 'RayLen Vineyards & Winery',
    region: 'Piedmont',
    website: 'www.raylenvineyards.com',
    address: '3577 US Hwy 158, Mocksville, NC 27028',
    phoneNumber: '(336) 998-3100',
    id: 23
  },
  {
    name: 'Germanton Vineyard & Winery',
    region: 'Piedmont',
    website: 'www.germantongallery.com',
    address: '3530 NC Hwys. 8 and 65, Germanton, NC 27019',
    phoneNumber: '(336) 969-6121',
    id: 24
  },
  {
    name: 'Honeygirl Meadery',
    region: 'Piedmont',
    website: 'honeygirlmeadery.com',
    address: '105 Hood Street, #6, Durham, NC 27701',
    phoneNumber: '(919) 399-3056'
    id: 25
  },
  {
    name: 'Sweet Home Carolina Vineyard & Winery',
    region: 'Piedmont',
    website: 'www.sweethomecarolinawinery.com',
    address: '3423 Old US 421 Hwy E., Yadkinville, NC 27055',
    phoneNumber: '(336) 469-9905',
    id: 26
  },
  {
    name: 'Childress Vineyards',
    region: 'Piedmont',
    website: 'www.childressvineyards.com',
    address: '2 N. Main Street, Lexington, NC 27292',
    phoneNumber: '(336) 236-9463',
    id: 27
  },
  {
    name: 'Cougar Run Winery ',
    region: 'Piedmont',
    website: 'www.cougarrunwinery.com',
    address: '363 N. Church Street, Concord, NC 28025',
    phoneNumber: '(704) 788-2746',
    id: 28
  },
  {
    name: 'Zimmerman Vineyards',
    region: 'Piedmont',
    website: 'www.zimmermanvineyards.net',
    address: '1428 Tabernacle Church Rd, Trinity, NC 27370',
    phoneNumber: '(336) 861-1414',
    id: 29
  },
  {
    name: 'SilkHope Winery',
    region: 'Piedmont',
    website: 'www.silkhopewinery.com',
    address: '2601 Silk Hope Gum Springs Rd, Pittsboro, NC 27312',
    phoneNumber: '(919) 545-5696',
    id: 30
  }
]


const wines = [
  {
    name: 'Gratitude',
    abv: '',
    color: 'Red',
    type: 'Chambourcin',
    vineyard_id: 1
  },
  {
    name: 'Vitalita Reserve',
    abv: '',
    color: 'Red',
    type: 'Sangiovese',
    vineyard_id: 1
  },
  {
    name: 'Coming Home',
    abv: '',
    color: '',
    type: 'Cabernet Sauvignon',
    vineyard_id: 1
  },
  {
    name: 'Cabernet Sauvignon',
    abv: '',
    color: 'Red',
    type: 'Cabernet Sauvignon',
    vineyard_id: 2
  },
  {
    name: 'Seyval Blanc Reserve (Estate)',
    abv: '',
    color: 'White',
    type: 'Seyval Blanc',
    vineyard_id: 2
  },
  {
    name: 'Marechal Foch Reserve (Estate)',
    abv: '',
    color: 'Red',
    type: 'Marechal Foch',
    vineyard_id: 2
  },
  {
    name: 'Chambourcin',
    abv: '',
    color: 'Red',
    type: 'Chambourcin',
    vineyard_id: 3
  },
  {
    name: 'Rose',
    abv: '',
    color: 'Rose',
    type: 'Cabernet Franc',
    vineyard_id: 3
  },
  {
    name: 'Strawberry-Rhubarb',
    abv: '',
    color: 'Rose',
    type: 'Strawberry-Rhubarb',
    vineyard_id: 3
  },
  {
    name: 'Antler Hill Chardonnay Carneros',
    abv: '',
    color: 'White',
    type: 'Chardonnay',
    vineyard_id: 4
  },
  {
    name: 'Antler Hill Pinot Noir Russian River Valley 2015',
    abv: '',
    color: 'Red',
    type: 'Pinot Noir',
    vineyard_id: 4
  },
  {
    name: 'Antler Hill Cabernet Sauvignon Napa Valley 2015',
    abv: '',
    color: 'Red',
    type: 'Cabernet Sauvignon',
    vineyard_id: 4
  },
  {
    name: 'Harvest Moon',
    abv: '',
    color: 'White',
    type: 'Chardonnay',
    vineyard_id: 5
  },
  {
    name: '2014 O Cellars Reserve Chardonnay',
    abv: '',
    color: 'White',
    type: 'Chardonnay',
    vineyard_id: 5
  },
  {
    name: '2015 Riesling',
    abv: '',
    color: 'White',
    type: 'Riesling',
    vineyard_id: 5
  },
  {
    name: 'Southern Hospitality',
    abv: '',
    color: 'White',
    type: 'Chardonnay',
    vineyard_id: 6
  },
  {
    name: 'Sweet Summer Bliss',
    abv: '',
    color: 'Rose',
    type: 'Strawberry infused White Zinfandel',
    vineyard_id: 6
  },
  {
    name: 'Fire Side Red',
    abv: '',
    color: 'Red',
    type: 'Pinot Noir',
    vineyard_id: 6
  },
  {
    name: 'Southern White Lady',
    abv: '',
    color: 'White',
    type: 'Chardonel',
    vineyard_id: 7
  },
  {
    name: 'Mountain Wood Red',
    abv: '',
    color: 'Red',
    type: 'Norton Blend',
    vineyard_id: 7
  },
  {
    name: 'Mountain Sweet Red',
    abv: '',
    color: 'Red',
    type: 'Lando Noir',
    vineyard_id: 7
  },
  {
    name: '2016 Cabernet Franc',
    abv: '',
    color: 'Red',
    type: 'Cabernet Franc',
    vineyard_id: 8
  },
  {
    name: '2017 Appalachia Bubbles',
    abv: '',
    color: 'White',
    type: 'Sparkling blend',
    vineyard_id: 8
  },
  {
    name: '2017 Sparkling Rose',
    abv: '',
    color: 'Rose',
    type: 'Rose',
    vineyard_id: 8
  },
  {
    name: '2014 Merlot',
    abv: '',
    color: 'Red',
    type: 'Merlot',
    vineyard_id: 9
  },
  {
    name: '2012 Merlot Reserve',
    abv: '',
    color: 'Red',
    type: 'Merlot',
    vineyard_id: 9
  },
  {
    name: '2015 Tempranillo',
    abv: '',
    color: 'Red',
    type: 'Tempranillo',
    vineyard_id: 9
  },
  {
    name: 'Chardonnay',
    abv: '',
    color: 'White',
    type: 'Chardonnay',
    vineyard_id: 10
  },
  {
    name: 'Cabernet Franc',
    abv: '',
    color: 'Rosc',
    type: 'Cabernet Franc',
    vineyard_id: 10
  },
  {
    name: 'Merlot',
    abv: '',
    color: 'Red',
    type: 'Merlot',
    vineyard_id: 10
  },
  {
    name: 'Mary Rose Red',
    abv: '',
    color: 'Red',
    type: 'Dry',
    vineyard_id: '11'
  },
  {
    name: 'Hush-Hush Blush',
    abv: '',
    color: 'Blush',
    type: 'Sweet',
    vineyard_id: '11'
  },
  {
    name: 'Strawberry Squeeze',
    abv: '',
    color: 'Blush',
    type: 'Semi-dry',
    vineyard_id: '11'
  },
  {
    name: 'Hatteras Red',
    abv: '',
    color: 'Red',
    type: 'Sweet Muscadine',
    vineyard_id: '12'
  },
  {
    name: 'Carolina Red',
    abv: '',
    color: 'Red',
    type: 'Sweet',
    vineyard_id: '12'
  },
  {
    name: 'Costal Shag',
    abv: '',
    color: 'Red',
    type: 'Fruity',
    vineyard_id: '12'
  },
  {
    name: 'Fire Side Red',
    abv: '',
    color: 'Red',
    type: 'Dry',
    vineyard_id: '13'
  },
  {
    name: 'Carolina Sunshine',
    abv: '',
    color: 'white',
    type: 'Riesling',
    vineyard_id: '13'
  },
  {
    name: 'Strawberry',
    abv: '',
    color: 'Blush',
    type: 'Sweet',
    vineyard_id: '13'
  },
  {
    name: 'Old Cumberland',
    abv: '',
    color: 'White',
    type: 'Muscadine',
    vineyard_id: '14'
  },
  {
    name: 'Bladen Blush',
    abv: '',
    color: 'white',
    type: 'Muscadine',
    vineyard_id: '14'
  },
  {
    name: 'Cape Owen Red',
    abv: '',
    color: 'Red',
    type: 'Muscadine',
    vineyard_id: '14'
  },
  {
    name: 'Wild Pony White',
    abv: '',
    color: 'White',
    type: 'Dry',
    vineyard_id: '15'
  },
  {
    name: 'Morton',
    abv: '',
    color: 'Red',
    type: 'Blend',
    vineyard_id: '15'
  },
  {
    name: 'OBX Ice',
    abv: '',
    color: 'White',
    type: 'Dessert',
    vineyard_id: '15'
  },
  {
    name: 'Pride of Scotland',
    abv: '',
    color: 'White',
    type: 'Chardonnay',
    vineyard_id: '16'
  },
  {
    name: 'Sunken Garden Thistle',
    abv: '',
    color: 'White',
    type: 'Strawberry',
    vineyard_id: '16'
  },
  {
    name: 'Highlander',
    abv: '',
    color: 'Red',
    type: 'Cabernet Sauvignon',
    vineyard_id: '16'
  },
  {
    name: 'Waccamaw White',
    abv: '',
    color: 'White',
    type: 'Fruity',
    vineyard_id: '17'
  },
  {
    name: 'Sunset Blush',
    abv: '',
    color: 'Blush',
    type: 'Fruity',
    vineyard_id: '17'
  },
  {
    name: 'Picnic Red',
    abv: '',
    color: 'Red',
    type: 'Cooking',
    vineyard_id: '17'
  },
  {
    name: 'After Dark',
    abv: '',
    color: 'Red',
    type: 'Sweet',
    vineyard_id: '18'
  },
  {
    name: 'Doreen',
    abv: '',
    color: 'White',
    type: 'Muscadine',
    vineyard_id: '18'
  },
  {
    name: 'Strawberry Patch',
    abv: '',
    color: 'Pink',
    type: 'Sweet',
    vineyard_id: '18'
  },
  {
    name: 'Calabash White',
    abv: '',
    color: 'White',
    type: 'Refreshing',
    vineyard_id: '19'
  },
  {
    name: 'Bella Rosa Dry Rose',
    abv: '',
    color: 'Pink',
    type: 'Blush',
    vineyard_id: '19'
  },
  {
    name: 'Touriga (Cape Fear Blood Wine)',
    abv: '',
    color: 'Red',
    type: 'Complex',
    vineyard_id: '19'
  },
  {
    name: 'Catawba',
    abv: '',
    color: 'White',
    type: 'Semi-sweet',
    vineyard_id: '20'
  },
  {
    name: '',
    abv: '',
    color: 'Red',
    type: '',
    vineyard_id: '20'
  },
  {
    name: 'Somerset (Tangerine)',
    abv: '',
    color: 'White',
    type: 'Sweet',
    vineyard_id: '20'
  },
  {
    name: 'Boonville Blanc',
    abv: '',
    color: 'White',
    type: 'Semi-Sweet',
    vineyard_id: '21'
  },
  {
    name: 'Kaleidoscope Gold',
    abv: '',
    color: 'White',
    type: 'Table',
    vineyard_id: '21'
  },
  {
    name: 'Rockford Red',
    abv: '',
    color: 'Red',
    type: 'Sweet',
    vineyard_id: '21'
  },
  {
    name: 'Granda Red Table Wine',
    abv: '',
    color: 'Red',
    type: 'Blend',
    vineyard_id: '22'
  },
  {
    name: 'Between the Rivers Reserve',
    abv: '',
    color: 'Red',
    type: 'Blend',
    vineyard_id: '22'
  },
  {
    name: 'Milk House White',
    abv: '',
    color: 'White',
    type: 'Dessert',
    vineyard_id: '22'
  },
  {
    name: 'Petit Verdot',
    abv: '',
    color: 'Red',
    type: 'Rose',
    vineyard_id: '23'
  },
  {
    name: 'Sauvignon Blanc ',
    abv: '',
    color: 'White',
    type: 'Semi-sweet',
    vineyard_id: '23'
  },
  {
    name: 'Caravel',
    abv: '',
    color: 'Red',
    type: 'Blend',
    vineyard_id: '23'
  },
  {
    name: 'Autumn Blush',
    abv: '',
    color: 'Blush',
    type: 'Dry',
    vineyard_id: '24'
  },
  {
    name: 'Chambourcin',
    abv: '',
    color: 'Red',
    type: 'Cabernet Sauvignon',
    vineyard_id: '24'
  },
  {
    name: 'Niagara',
    abv: '',
    color: 'White',
    type: 'Sweet',
    vineyard_id: '24'
  },
  {
    name: '2018 Honey Chai Mead',
    abv: '',
    color: '',
    type: 'Mead',
    vineyard_id: '25'
  },
  {
    name: 'Orange Blossom Mead',
    abv: '',
    color: '',
    type: 'Mead',
    vineyard_id: '25'
  },
  {
    name: '2019 Hibiscus Lemonthyme',
    abv: '',
    color: '',
    type: 'Mead',
    vineyard_id: '25'
  },
  {
    name: 'Homeward Bound',
    abv: '',
    color: 'Red',
    type: 'Pinot Noir',
    vineyard_id: '26'
  },
  {
    name: 'Legend',
    abv: '',
    color: 'Red',
    type: 'Petite Syrah',
    vineyard_id: '26'
  },
  {
    name: 'Sweet Dreams',
    abv: '',
    color: 'White',
    type: 'Semi-sweet',
    vineyard_id: '26'
  },
  {
    name: '2014 Reserve Chardonnay',
    abv: '',
    color: 'White',
    type: 'Chardonnay',
    vineyard_id: '27'
  },
  {
    name: 'Victory Cuvee',
    abv: '',
    color: 'White',
    type: 'Sparkling',
    vineyard_id: '27'
  },
  {
    name: 'Finish Line',
    abv: '',
    color: 'Red',
    type: 'Port',
    vineyard_id: '27'
  },
  {
    name: 'Moonlight & Shadows',
    abv: '',
    color: 'White',
    type: 'Sauvignon Blanc',
    vineyard_id: '28'
  },
  {
    name: 'Cool Breeze',
    abv: '',
    color: 'White',
    type: 'Pinot Grigio',
    vineyard_id: '28'
  },
  {
    name: 'Afternoon Delight',
    abv: '',
    color: 'White',
    type: 'Sweet',
    vineyard_id: '28'
  },
  {
    name: 'White Sisyphus',
    abv: '',
    color: 'White',
    type: 'Bordeaux Blanc',
    vineyard_id: '29'
  },
  {
    name: '2016 White Merlot',
    abv: '',
    color: 'Blush',
    type: 'Dry',
    vineyard_id: '29'
  },
  {
    name: 'White Persephone',
    abv: '',
    color: 'White',
    type: 'Sweet',
    vineyard_id: '29'
  },
  {
    name: 'Grand Vista',
    abv: '',
    color: 'Red',
    type: 'Cabernet Franc Blend',
    vineyard_id: '30'
  },
  {
    name: 'Cabernet Franc 2009',
    abv: '',
    color: 'Red',
    type: 'Cabernet Franc Blend',
    vineyard_id: '30'
  },
  {
    name: 'Traminette',
    abv: '',
    color: 'White',
    type: 'Dry',
    vineyard_id: '30'
  },
]