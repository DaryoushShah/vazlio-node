import user from '../user.js';
import inquirer from 'inquirer';
import data from '../data.js';
import updateWeight from './updateweight.js';
import setupEatingSchedule from './setupeatingschedule.js';
import setupExerciseSchedule from './setupexerciseschedule.js';
import projection from './projection.js';
import updateGoalWeight from './updategoalweight.js';

const mainMenu = () => {
  /* Check if user data is NULL */
  inquirer
  .prompt([
    {
      name: 'option',
      message:  `Welcome ${user.info.name}!`,
      type: 'list',
      choices: ['Update weight', 'Update goal weight', 'Setup eating schedule', 'Setup exercise schedule', 'Generate weightloss projection', 'exit']
    }
  ])
  .then(answers => {
    if(answers.option == 'Update weight'){
      updateWeight();
    }else if(answers.option == 'Update goal weight') {
      updateGoalWeight();
    }else if(answers.option == 'Setup eating schedule'){
      setupEatingSchedule();
    }else if(answers.option == 'Setup exercise schedule') {
      setupExerciseSchedule();
    }else if(answers.option == 'Generate weightloss projection'){
      projection();
    }else if(answers.option == 'exit'){
      data.save('data/user.json', user.info);
      process.exit(0);
    }
  })
}

export default mainMenu;