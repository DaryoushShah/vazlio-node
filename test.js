import data from './src/data.js';
import user from './src/user.js';
import weightloss from './src/weightloss.js'

user.info = data.load('data/user.json');

console.log(user.info);
console.log(weightloss.calculateProjectedBMR(user, user.info.weight, 0));

user.info.isOnRisperidone = true
console.log('On Respiridone: ' + weightloss.calculateProjectedBMR(user, user.info.weight, 0));

