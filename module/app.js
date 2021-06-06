import log, { getCurrentHour, myLogger } from './myLogger.js'
import _ from './utility.js'

const root = document.querySelector('#root');
root.innerHTML = '<p>Hello Wolrd ! </p>'

log(root);
// log(`getTime is ${getTime()}`);
log(`current hour is ${getCurrentHour()}`);

const logger = new myLogger();

log(`lectures of Codesquad are ${logger.getLectures()}`);
_.log(`lectures of Codesquad are ${logger.getLectures()}`);