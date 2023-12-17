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
    let projectedBMR = weightloss.calculateBMR(user, user.info.weight);
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
          let totalCalorieDiff = projectedBMR + user.info.exerciseSchedule[i] - user.info.eatingSchedule[i];
          weightLostInWeek += totalCalorieDiff/weightloss.CALORIES_PER_POUND;
          if(verbose == true){
            const projectedDate = new Date();
            projectedDate.setDate(projectedDate.getDate() + daysPassed);
            let totalCaloriesExpended = projectedBMR + user.info.exerciseSchedule[i];
            let weightLost = totalCalorieDiff/weightloss.CALORIES_PER_POUND;
            if(weightLost > 0) {
              console.log(chalk.yellow(`${projectedDate.toLocaleDateString()} [${projectedWeight.toFixed(2)} lbs]: `) + 'You expended ' + chalk.cyanBright(`${totalCaloriesExpended} calories`) + ' and consumed ' + chalk.redBright(`${user.info.eatingSchedule[i]} calories`) + ` resulting in ${weightLost} lbs lost`);
            }else if(weightLost < 0){
              console.log(chalk.yellow(`${projectedDate.toLocaleDateString()} [${projectedWeight.toFixed(2)} lbs]: `) + 'You expended ' + chalk.cyanBright(`${totalCaloriesExpended} calories`) + ' and consumed ' + chalk.redBright(`${user.info.eatingSchedule[i]} calories`) + ` resulting in ${weightLost * -1} lbs gained`);
            }else{
              console.log(chalk.yellow(`${projectedDate.toLocaleDateString()} [${projectedWeight.toFixed(2)} lbs]: `) + 'You expended ' + chalk.cyanBright(`${totalCaloriesExpended} calories`) + ' and consumed ' + chalk.redBright(`${user.info.eatingSchedule[i]} calories`) + ` resulting in no change to your weight`);
            }
          }
          projectedWeight -= totalCalorieDiff/weightloss.CALORIES_PER_POUND;
          projectedBMR = weightloss.calculateProjectedBMR(user, projectedWeight, daysPassed);
          daysPassed++;
        }
      }
      weightLostPerWeek.push(weightLostInWeek);
    }

    if(!planWorks){
      const projectedDate = new Date();
      projectedDate.setDate(projectedDate.getDate() + daysPassed);

      console.log(chalk.red('Your weightloss plan results in weight being gained.' + `You would possibly be ${projectedWeight} lbs by ${projectedDate.toLocaleDateString()}`));
    }else{
      let averageWeeklyWeightLoss = 0;
      for(let i = 0; i < weightLostPerWeek.length; i++){
        averageWeeklyWeightLoss += weightLostPerWeek[i]
      }
      averageWeeklyWeightLoss /= weightLostPerWeek.length
      
      
      let date = new Date();
      date.setDate(date.getDate() + daysPassed);
      if(verbose == true){
        console.log('\n')
      }
      console.log(chalk.cyanBright(`You will lose around ${averageWeeklyWeightLoss} lbs per week`))
      console.log(chalk.cyanBright(`You will reach ${user.info.goalWeight} lbs by ${date.toLocaleDateString()}`));
    }
  })
}

export default projection;