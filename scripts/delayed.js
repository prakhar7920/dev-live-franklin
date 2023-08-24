// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
var script1 = document.createElement('script');
script1.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
document.getElementsByTagName('head')[0].appendChild(script1);

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);
