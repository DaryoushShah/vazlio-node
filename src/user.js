const user = (() => {
  const info = {
    name: null,
    birthday: null,
    height: null,
    weight: null,
    sex: null,
    bmr: null,
    isOnRisperidone: null,
    goalWeight: null,
    eatingSchedule: [],
    exerciseSchedule: [],
  }

  const check = () => {
    if(
      info.name == null ||
      info.birthday == null ||
      info.height == null ||
      info.weight == null ||
      info.sex == null ||
      info.bmr == null ||
      info.isOnRisperidone == null ||
      info.goalWeight == null
    ){
      return false;
    }else {
      return true;
    }
  }

  const calculateDetailedAge = () => {
    const oneYear = 1000 * 60 * 60 * 24 * 365;
    const birthdayDate = new Date(user.info.birthday);
    const currentDate = new Date();

    const differenceInTime = currentDate.getTime() - birthdayDate.getTime();
    return differenceInTime / oneYear;
  };

  return {
    info,
    check,
    calculateDetailedAge,
  }
})();

export default user;