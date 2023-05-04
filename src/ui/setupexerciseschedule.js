import inquirer from "inquirer";
import data from '../data.js';
import user from '../user.js'
import mainMenu from './mainmenu.js';

const setupExerciseSchedule = () => {
  /* Check if user data is NULL */
  console.log('Answer the following in terms of calories burned through exercies\nYour BMR is already accounted for!');
  inquirer
  .prompt([
    {
      name: 'mondayCalories',
      message: 'How many calories will you burn on monday?',
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
    user.info.exerciseSchedule[0] = (Number(answers.mondayCalories));
    user.info.exerciseSchedule[1] = (Number(answers.tuesdayCalories));
    user.info.exerciseSchedule[2] = (Number(answers.wednesdayCalories));
    user.info.exerciseSchedule[3] = (Number(answers.thursdayCalories));
    user.info.exerciseSchedule[4] = (Number(answers.fridayCalories));
    user.info.exerciseSchedule[5] = (Number(answers.saturdayCalories));
    user.info.exerciseSchedule[6] = (Number(answers.sundayCalories));

    data.save('data/user.json', user.info);
    console.clear();
    mainMenu();
  });
}

export default setupExerciseSchedule;