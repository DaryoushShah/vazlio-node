import inquirer from "inquirer";
import data from '../data.js';
import user from '../user.js'
import weightloss from '../weightloss.js';
import mainMenu from "./mainmenu.js";

const userSetup = () => {
  /* Check if user data is NULL */
  inquirer
  .prompt([
    {
      name: 'name',
      message: 'What is your name?',
      type: 'input'
    },
    {
      name: 'birthday',
      message: 'What is your birthday? (MM/DD/YYYY)',
      type: 'input'
    },
    {
      name: 'height',
      message: 'What is your height in inches',
      type: 'number'
    },
    {
      name: 'weight',
      message: 'What is your weight in pounds',
      type: 'number',
    },
    {
      name: 'sex',
      message: 'What is your sex?',
      type: 'list',
      choices: ['male', 'female']
    },
    {
      name: 'medicine',
      message: 'What medicine are you on?',
      type: 'list',
      choices: ['respiridone', 'caplyta']
    },
    {
      name: 'goalWeight',
      message: 'What is your goal weight?',
      type: 'number',
    },
    
  ])
  .then(answers => {
    user.info.name = answers.name;
    user.info.birthday = answers.birthday;
    user.info.height = Number(answers.height);
    user.info.weight = Number(answers.weight);
    user.info.sex = answers.sex;
    user.info.goalWeight = Number(answers.goalWeight);
    if(answers.medicine == "respiridone"){
      user.info.isOnRisperidone = true;
      user.info.isOnCaplyta = false;
    }else{
      user.info.isOnRisperidone = false;
      user.info.isOnCaplyta = true;
    }

    /* Calculate BMR */
    user.info.bmr = weightloss.calculateBMR(user, user.info.weight);

    /* Save to file */
    data.save('data/user.json', user.info);
    console.clear();
    mainMenu();
  });
}

export default userSetup;