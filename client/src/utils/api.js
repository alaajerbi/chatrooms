import axios from 'axios';
import { SERVER_URL } from '../config';

export function createChatRoom() {
  return axios.get(SERVER_URL + '/createChatRoom')
  .then(response => {
    return response.data;
  });
}
