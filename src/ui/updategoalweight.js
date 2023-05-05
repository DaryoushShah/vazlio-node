import inquirer from "inquirer";
import data from '../data.js';
import user from '../user.js'
import mainMenu from './mainmenu.js';

const updateGoalWeight = () => {
  /* Check if user data is NULL */
  inquirer
  .prompt([
    {
      name: 'updateGoalWeight',
      message: 'What is your new goal weight?',
      type: 'number'
    }
    
  ])
  .then(answers => {

    user.info.goalWeight = Number(answers.updateGoalWeight);

    /* Save to file */
    data.save('data/user.json', user.info);

    console.clear();
    mainMenu();
  });
}

export default updateGoalWeight;