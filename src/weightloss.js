const weightloss = (() => {
  const CALORIES_PER_POUND = 3500;
  /* Calculate bmr with Mifflin St. Jeor equation */
  const calculateBMR = (user, weight) => {
    let bmr;
    /* Calculate BMR */
    if(user.info.sex == "male") {
      bmr = (4.5359237 * weight) + (15.8750317501 * user.info.height) - (5 * user.calculateDetailedAge()) + 5
      if(user.info.isOnRisperidone == true){
        bmr = bmr * (1 - 0.16);
      }
    }else if (user.info.sex == "female"){
      bmr = (4.5359237 * weight) + (15.8750317501 * user.info.height) - (5 * user.calculateDetailedAge()) - 161
      if(user.info.isOnRisperidone == true){
        bmr = bmr * (1 - 0.16);
      }
    }
    return bmr;
  }

  const calculateProjectedBMR = (user, weight, days) => {
    let bmr;
    /* Calculate BMR */
    if(user.info.sex == "male") {
      bmr = (4.5359237 * weight) + (15.8750317501 * user.info.height) - (5 * user.calculateDetailedProjectedAge(days)) + 5
      if(user.info.isOnRisperidone == true){
        bmr = bmr * (1 - 0.16);
      }
    }else if (user.info.sex == "female"){
      bmr = (4.5359237 * weight) + (15.8750317501 * user.info.height) - (5 * user.calculateDetailedProjectedAge(days)) - 161
      if(user.info.isOnRisperidone == true){
        bmr = bmr * (1 - 0.16);
      }
    }
    return bmr;
  }
  
  return {
    calculateBMR,
    calculateProjectedBMR,
    CALORIES_PER_POUND,
  }
})();

export default weightloss;