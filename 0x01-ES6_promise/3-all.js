import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup(body, firstName, lastName) {
  return Promise.all([uploadPhoto(), createUser()])
    .then(() => {
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
