const weightloss = (() => {
  /* Calculate bmr with Mifflin St. Jeor equation */
  const calculateBMR = (user) => {
    let bmr;
    /* Calculate BMR */
    if(user.info.sex == "male") {
      bmr = (4.5359237 * user.info.weight) + (15.8750317501 * user.info.height) - (5 * user.calculateDetailedAge()) + 5
      if(user.info.isOnRisperidone == true){
        bmr = bmr * (1 - 0.16);
      }
    }else if (user.info.sex == "female"){
      bmr = (4.5359237 * user.info.weight) + (15.8750317501 * user.info.height) - (5 * user.calculateDetailedAge()) - 161
      if(user.info.isOnRisperidone == true){
        bmr = bmr * (1 - 0.16);
      }
    }
    return bmr;
  }
  
  return {
    calculateBMR,
  }
})();

export default weightloss;