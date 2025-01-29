import UserMessage from '../lang/messages/en/user.js';

export default function getDate(name) {
  const string = new UserMessage(name).greeting;
  return string;
}
