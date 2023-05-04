import inquirer from "inquirer";
import data from '../data.js';
import user from '../user.js'
import weightloss from '../weightloss.js';
import mainMenu from './mainmenu.js';

const updateWeight = () => {
  /* Check if user data is NULL */
  inquirer
  .prompt([
    {
      name: 'updateWeight',
      message: 'What is your current weight?',
      type: 'number'
    }
    
  ])
  .then(answers => {

    user.info.weight = Number(answers.updateWeight);

    /* Calculate BMR */
    user.info.bmr = weightloss.calculateBMR(user);

    /* Save to file */
    data.save('data/user.json', user.info);

    console.clear();
    mainMenu();
  });
}

export default updateWeight;