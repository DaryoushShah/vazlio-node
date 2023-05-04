import data from '../data.js';
import user from '../user.js';
import userSetup from './usersetup.js'

const ui = (() => {

  /* onStart() */
  const onStart = () => {
    console.clear();
    if(!user.check()){
      userSetup();
      //TODO: main menu
    }else{
      //TODO: main menu
    }
  }

  return {
    onStart,
  }
})();

export default ui;