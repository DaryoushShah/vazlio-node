import data from './src/data.js';
import user from './src/user.js';
import ui from './src/ui/ui.js';

/* Check if data file exists */
if(!data.check('data/')){
  data.createFolder('data/');
}

if(!data.check('data/user.json')){
  data.createFile('data/user.json');
  data.save('data/user.json', user.info)
}else {
  data.load('data/user.json', user.info);
}

ui.onStart();



/* Check if file is empty */