import Player from '@vimeo/player';
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
console.log(iframe)
  const player = new Vimeo.Player(iframe);