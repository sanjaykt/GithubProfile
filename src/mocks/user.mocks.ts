import { User } from '../models/user.interface';

const userList: User[] = [
  {
    name: 'sanjay',
    company: 'ST',
    location: 'Amritapuri, India',
    bio: 'I am an Ionic hybrid app developer',
    avatar_url: 'http://i.imgur.com/jav62p6.jpg',
    email: 'sanjay@sanjaytailor.com'
  },

  {
    name: 'JohnDoe',
    company: 'Doe and co.',
    location: 'Kochi, India',
    bio: 'Ionic fac',
    avatar_url: 'http://t.imgur.com/TzWcihb.jpg',
    email: 'me@johndoe.com'
  }
];

export const USER_LIST = userList;
