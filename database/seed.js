// this will be where the dummy data goes, to seed db
// "npm run seed" to make it happen

// stretch goal => add url prop to all homes,
// sending to that home's endpoint & rendering in main component

const db = require('mongoose');
const {City, Home, Activity} = require('./index');

const sampleCities = [
  {
    name: 'Seattle, WA',
    url: 'google.com',
  },
  {
    name: 'Oakland, CA',
    url: 'google.com',
  },
  {
    name: 'Hollywood, CA',
    url: 'google.com',
  },
  {
    name: 'Austin, TX',
    url: 'google.com',
  }
];

const sampleHomes = [{
  image: 'https://related-info-images.s3-us-west-2.amazonaws.com/andrea-davis-FHWCM78j66g-unsplash.jpg',
  reviews: 8,
  type: 'Private room',
  beds: 2,
  description: 'Cozy and quaint, but also haunted (by Elon Musk\'s time-travelling ghost)',
  price: 65,
  superhost: true,
  liked: false,
  city: 'Seattle, WA',
  url: 'https://www.google.com',
},
{
  image: 'https://related-info-images.s3-us-west-2.amazonaws.com/andrea-davis-FHWCM78j66g-unsplash.jpg',
  reviews: 0,
  type: 'Private room',
  beds: 2,
  description: 'Cozy and quaint, but also haunted (by Elon Musk\'s time-travelling ghost)',
  price: 65,
  superhost: false,
  liked: true,
  city: 'Seattle, WA',
  url: 'https://www.google.com',
},
{
  image: 'https://related-info-images.s3-us-west-2.amazonaws.com/andrea-davis-FHWCM78j66g-unsplash.jpg',
  reviews: 25,
  type: 'Private room',
  beds: 2,
  description: 'Cozy and quaint, but also haunted (by Elon Musk\'s time-travelling ghost)',
  price: 65,
  superhost: true,
  liked: true,
  city: 'Seattle, WA',
  url: 'https://www.google.com',
},
{
  image: 'https://related-info-images.s3-us-west-2.amazonaws.com/andrea-davis-FHWCM78j66g-unsplash.jpg',
  reviews: 0,
  type: 'Private room',
  beds: 2,
  description: 'Cozy and quaint, but also haunted (by Elon Musk\'s time-travelling ghost)',
  price: 65,
  superhost: false,
  liked: false,
  city: 'Seattle, WA',
  url: 'https://www.google.com',
},
{
  image: "https://unsplash.com/photos/ezRKQQPWJOw",
  reviews: 8,
  type: 'Entire house',
  beds: 4,
  description: 'It\'s definitely a house. Come check it out!',
  price: 235,
  superhost: false,
  liked: false,
  city: 'Oakland, CA',
  url: 'https://www.google.com',
},
{
  image: "https://unsplash.com/photos/ezRKQQPWJOw",
  reviews: 8,
  type: 'Entire house',
  beds: 4,
  description: 'It\'s definitely a house. Come check it out!',
  price: 235,
  superhost: false,
  liked: false,
  city: 'Oakland, CA',
  url: 'https://www.google.com',
},
{
  image: "https://unsplash.com/photos/ezRKQQPWJOw",
  reviews: 8,
  type: 'Entire house',
  beds: 4,
  description: 'It\'s definitely a house. Come check it out!',
  price: 235,
  superhost: false,
  liked: false,
  city: 'Oakland, CA',
  url: 'https://www.google.com',
},
{
  image: "https://unsplash.com/photos/ezRKQQPWJOw",
  reviews: 8,
  type: 'Entire house',
  beds: 4,
  description: 'It\'s definitely a house. Come check it out!',
  price: 235,
  superhost: false,
  liked: false,
  city: 'Oakland, CA',
  url: 'https://www.google.com',
},
{
  image: 'https://unsplash.com/photos/To7GxHUMq6g',
  reviews: 8,
  type: 'Shared room',
  beds: 1,
  description: 'The rats don\'t bite, as long as you\'re awake.',
  price: 115,
  superhost: false,
  liked: true,
  city: 'Hollywood, CA',
  url: 'https://www.google.com',
},
{
  image: 'https://unsplash.com/photos/To7GxHUMq6g',
  reviews: 8,
  type: 'Shared room',
  beds: 1,
  description: 'The rats don\'t bite, as long as you\'re awake.',
  price: 115,
  superhost: false,
  liked: true,
  city: 'Hollywood, CA',
  url: 'https://www.google.com',
},
{
  image: 'https://unsplash.com/photos/To7GxHUMq6g',
  reviews: 8,
  type: 'Shared room',
  beds: 1,
  description: 'The rats don\'t bite, as long as you\'re awake.',
  price: 115,
  superhost: false,
  liked: true,
  city: 'Hollywood, CA',
  url: 'https://www.google.com',
},
{
  image: 'https://unsplash.com/photos/To7GxHUMq6g',
  reviews: 8,
  type: 'Shared room',
  beds: 1,
  description: 'The rats don\'t bite, as long as you\'re awake.',
  price: 115,
  superhost: false,
  liked: true,
  city: 'Hollywood, CA',
  url: 'https://www.google.com',
},
{
  image: 'https://unsplash.com/photos/E9Udq-cPVXs',
  reviews: 0,
  type: 'Living room only',
  beds: 0,
  description: 'The best Des. Cap. experience you\'ll ever have',
  price: 18,
  superhost: false,
  liked: false,
  city: 'Austin, TX',
  url: 'https://www.google.com',
},
{
  image: 'https://unsplash.com/photos/E9Udq-cPVXs',
  reviews: 0,
  type: 'Living room only',
  beds: 0,
  description: 'The best Des. Cap. experience you\'ll ever have',
  price: 18,
  superhost: false,
  liked: false,
  city: 'Austin, TX',
  url: 'https://www.google.com',
},
{
  image: 'https://unsplash.com/photos/E9Udq-cPVXs',
  reviews: 0,
  type: 'Living room only',
  beds: 0,
  description: 'The best Des. Cap. experience you\'ll ever have',
  price: 18,
  superhost: false,
  liked: false,
  city: 'Austin, TX',
  url: 'https://www.google.com',
},
{
  image: 'https://unsplash.com/photos/E9Udq-cPVXs',
  reviews: 0,
  type: 'Living room only',
  beds: 0,
  description: 'The best Des. Cap. experience you\'ll ever have',
  price: 18,
  superhost: false,
  liked: false,
  city: 'Austin, TX',
  url: 'https://www.google.com',
}];

const sampleActivities = [{
  image: "https://unsplash.com/photos/16ziVZtz8vA",
  reviews: 12,
  description: 'An afternoon at the market: Come experience Pike\'s Place!',
  price: 45,
  liked: false,
  location: 'Pike Place Market, Seattle, WA',
  city: 'Seattle, WA',
},
{
  image: "https://unsplash.com/photos/16ziVZtz8vA",
  reviews: 12,
  description: 'An afternoon at the market: Come experience Pike\'s Place!',
  price: 45,
  liked: false,
  location: 'Pike Place Market, Seattle, WA',
  city: 'Seattle, WA',
},
{
  image: "https://unsplash.com/photos/16ziVZtz8vA",
  reviews: 12,
  description: 'An afternoon at the market: Come experience Pike\'s Place!',
  price: 45,
  liked: false,
  location: 'Pike Place Market, Seattle, WA',
  city: 'Seattle, WA',
},
{
  image: "https://unsplash.com/photos/16ziVZtz8vA",
  reviews: 12,
  description: 'An afternoon at the market: Come experience Pike\'s Place!',
  price: 45,
  liked: false,
  location: 'Pike Place Market, Seattle, WA',
  city: 'Seattle, WA',
},
{
  image: 'https://unsplash.com/photos/JDSjHhdgpZY',
  reviews: 1,
  description: 'Come check out this brown wooden dock. A favorite of Oakland locals!',
  price: 765,
  liked: false,
  location: 'Deep in the woods, by the water.',
  city: 'Oakland, CA',
},
{
  image: 'https://unsplash.com/photos/JDSjHhdgpZY',
  reviews: 1,
  description: 'Come check out this brown wooden dock. A favorite of Oakland locals!',
  price: 765,
  liked: false,
  location: 'Deep in the woods, by the water.',
  city: 'Oakland, CA',
},
{
  image: 'https://unsplash.com/photos/JDSjHhdgpZY',
  reviews: 1,
  description: 'Come check out this brown wooden dock. A favorite of Oakland locals!',
  price: 765,
  liked: false,
  location: 'Deep in the woods, by the water.',
  city: 'Oakland, CA',
},
{
  image: 'https://unsplash.com/photos/JDSjHhdgpZY',
  reviews: 1,
  description: 'Come check out this brown wooden dock. A favorite of Oakland locals!',
  price: 765,
  liked: false,
  location: 'Deep in the woods, by the water.',
  city: 'Oakland, CA',
},
{
  image: 'https://unsplash.com/photos/8LlJNFLTEm0',
  reviews: 25,
  description: 'Celebrities nowhere. Tourists everywhere. You\'re gonna love this tour!',
  price: 125,
  liked: true,
  city: 'Hollywood, CA',
},
{
  image: 'https://unsplash.com/photos/8LlJNFLTEm0',
  reviews: 25,
  description: 'Celebrities nowhere. Tourists everywhere. You\'re gonna love this tour!',
  price: 125,
  liked: true,
  city: 'Hollywood, CA',
},
{
  image: 'https://unsplash.com/photos/8LlJNFLTEm0',
  reviews: 25,
  description: 'Celebrities nowhere. Tourists everywhere. You\'re gonna love this tour!',
  price: 125,
  liked: true,
  city: 'Hollywood, CA',
},
{
  image: 'https://unsplash.com/photos/8LlJNFLTEm0',
  reviews: 25,
  description: 'Celebrities nowhere. Tourists everywhere. You\'re gonna love this tour!',
  price: 125,
  liked: true,
  city: 'Hollywood, CA',
},
{
  image: 'https://unsplash.com/photos/HFbzqwfnrsE',
  reviews: 68,
  description: 'Paddleboarding lessons! Just don\'t fall in!',
  price: 70,
  liked: true,
  location: 'Butler Shores at Town Lake Metro Park Trail, Austin, TX',
  city: 'Austin, TX',
},
{
  image: 'https://unsplash.com/photos/HFbzqwfnrsE',
  reviews: 68,
  description: 'Paddleboarding lessons! Just don\'t fall in!',
  price: 70,
  liked: true,
  location: 'Butler Shores at Town Lake Metro Park Trail, Austin, TX',
  city: 'Austin, TX',
},
{
  image: 'https://unsplash.com/photos/HFbzqwfnrsE',
  reviews: 68,
  description: 'Paddleboarding lessons! Just don\'t fall in!',
  price: 70,
  liked: true,
  location: 'Butler Shores at Town Lake Metro Park Trail, Austin, TX',
  city: 'Austin, TX',
},
{
  image: 'https://unsplash.com/photos/HFbzqwfnrsE',
  reviews: 68,
  description: 'Paddleboarding lessons! Just don\'t fall in!',
  price: 70,
  liked: true,
  location: 'Butler Shores at Town Lake Metro Park Trail, Austin, TX',
  city: 'Austin, TX',
}];

const insertSampleCities = () => {
  City.create(sampleCities)
    .then(() => Home.create(sampleHomes))
    .then(() => Activity.create(sampleActivities))
    .then(() => db.disconnect())
    .catch((err) => console.log(err));
};

insertSampleCities();
