import {RepositoryInterface} from "../models/repository.interface";
import {USER_LIST} from "./user.mocks";

const repoistoryList: RepositoryInterface[] = [
  {
    name: 'Ionic 3 camera',
    description: 'This repo shows the usage of the camera functionality',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 SMS',
    description: 'This repo shows the usage of the SMS functionality',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 Geolocation',
    description: 'This repo shows the usage of the Geolocation functionality',
    owner: USER_LIST[1]
  },
  {
    name: 'Ionic 3 Vibration',
    description: 'This repo shows the usage of the Vibration functionality',
    owner: USER_LIST[1]
  }
];

export const REPOSITORY_LIST = repoistoryList;
