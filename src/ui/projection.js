import user from '../user.js';
import inquirer from 'inquirer';
import weightloss from '../weightloss.js';
import chalk from 'chalk';

/* UI's */


const projection = () => {
  let verbose = false; 
  inquirer
  .prompt([
    {
      name: 'verbose',
      message:  `Would you like your weightloss projection to be verbose?`,
      type: 'list',
      choices: ['yes', 'no']
    }
  ])
  .then(answers => {
    if(answers.verbose == 'yes'){
      verbose = true;
      console.clear();
    }
    /* Project the weightloss */
    let daysPassed = 0;
    let weightLostPerWeek = []
    let projectedWeight = user.info.weight;
    let projectedBMR = user.info.bmr;
    let planWorks = true;
    while (projectedWeight > user.info.goalWeight) {
      if(daysPassed > 3650){
        planWorks = false;
        break;
      }
      let weightLostInWeek = 0;
      for(let i = 0; i < user.info.eatingSchedule.length; i++) {
        if(projectedWeight <= user.info.goalWeight){
          continue;
        }else{
          let totalCalorieDiff = projectedBMR - user.info.eatingSchedule[i];
          weightLostInWeek += totalCalorieDiff/weightloss.CALORIES_PER_POUND;
          if(verbose == true){
            console.log(`Day ${daysPassed}: You expended ${projectedBMR} calories and consumed ${user.info.eatingSchedule[i]} calories resulting in ${totalCalorieDiff/weightloss.CALORIES_PER_POUND} lbs lost`)
          }
          projectedWeight -= totalCalorieDiff/weightloss.CALORIES_PER_POUND;
          projectedBMR = weightloss.calculateBMR(user, projectedWeight);
          daysPassed++;
        }
      }
      weightLostPerWeek.push(weightLostInWeek);
    }

    if(!planWorks){
      console.log(chalk.red('Your weightloss plan results in weight being gained'));
    }else{
      let averageWeeklyWeightLoss = 0;
      for(let i = 0; i < weightLostPerWeek.length; i++){
        averageWeeklyWeightLoss += weightLostPerWeek[i]
      }
      averageWeeklyWeightLoss /= weightLostPerWeek.length
      
      
      let date = new Date();
      date.setDate(date.getDate() + daysPassed);
      
      console.log(chalk.red(`will lose around ${averageWeeklyWeightLoss} lbs per week`))
      console.log(chalk.red(`You will reach ${user.info.goalWeight} lbs by ${date.toLocaleDateString()}`));
    }
  })
}

export default projection;