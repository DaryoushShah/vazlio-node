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
    eatingSchedule: [0, 0, 0, 0, 0, 0, 0],
    exerciseSchedule: [0, 0, 0, 0, 0, 0, 0],
  }

  const check = (obj) => {
    if(
      obj.name === null ||
      obj.birthday === null ||
      obj.height === null ||
      obj.weight === null ||
      obj.sex === null ||
      obj.bmr === null ||
      obj.isOnRisperidone == null ||
      obj.goalWeight == null
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