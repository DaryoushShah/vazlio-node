import inquirer from "inquirer";
import data from '../data.js';
import user from '../user.js'
import mainMenu from './mainmenu.js';

const setupEatingSchedule = () => {
  /* Check if user data is NULL */
  console.log(`You burn around ${user.info.bmr} calories per day weighing ${user.info.weight}`);
  inquirer
  .prompt([
    {
      name: 'mondayCalories',
      message: 'How many calories will you eat on monday?',
      type: 'number'
    },
    {
      name: 'tuesdayCalories',
      message: 'How many calories will you eat on tuesday?',
      type: 'number'
    },
    {
      name: 'wednesdayCalories',
      message: 'How many calories will you eat on Wednesday?',
      type: 'number'
    },
    {
      name: 'thursdayCalories',
      message: 'How many calories will you eat on Thursday?',
      type: 'number'
    },
    {
      name: 'fridayCalories',
      message: 'How many calories will you eat on Friday?',
      type: 'number'
    },
    {
      name: 'saturdayCalories',
      message: 'How many calories will you eat on Saturday?',
      type: 'number'
    },
    {
      name: 'sundayCalories',
      message: 'How many calories will you eat on Sunday?',
      type: 'number'
    },
    
  ])
  .then(answers => {
    user.info.eatingSchedule[0] = (Number(answers.mondayCalories));
    user.info.eatingSchedule[1] = (Number(answers.tuesdayCalories));
    user.info.eatingSchedule[2] = (Number(answers.wednesdayCalories));
    user.info.eatingSchedule[3] = (Number(answers.thursdayCalories));
    user.info.eatingSchedule[4] = (Number(answers.fridayCalories));
    user.info.eatingSchedule[5] = (Number(answers.saturdayCalories));
    user.info.eatingSchedule[6] = (Number(answers.sundayCalories));

    data.save('data/user.json', user.info);
    console.clear();
    mainMenu();
  });
}

export default setupEatingSchedule;