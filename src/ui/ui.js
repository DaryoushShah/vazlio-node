import data from '../data.js';
import user from '../user.js';
import userSetup from './usersetup.js';
import mainMenu from './mainmenu.js';

const ui = (() => {

  /* onStart() */
  const onStart = () => {
    if(user.check(user.info) == false){
      userSetup();
    }else{
      mainMenu();
    }
  }

  return {
    onStart,
  }
})();

export default ui;