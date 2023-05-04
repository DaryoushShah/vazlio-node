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
  user.info = data.load('data/user.json');
}

/* Register save before close */
process.on('exit', () => {
  data.save('data/user.json', user.info);
});

console.clear();
ui.onStart();