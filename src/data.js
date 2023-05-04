import fs from 'fs';

const data = (() => {
  const load = (filepath, data) => {
    try {
      data = JSON.parse(fs.readFileSync(filepath))
    } catch (err) {
      console.log(err);
    }
  }

  const save = (filepath, data) => {
    try {
      fs.writeFileSync(filepath, JSON.stringify(data))
    } catch (err) {
      console.error(err)
    }
  }

  const check = (filepath) => {
    if(fs.existsSync(filepath)){
      return true;
    }else {
      return false;
    }
  }

  const createFolder = (filepath) => {
    try {
      fs.mkdirSync(filepath);
    } catch (err) {
      console.error(err);
    }
  }

  const createFile = (filepath) => {
    try {
      /* Create the file */
      fs.writeFileSync(filepath, '');
      return true;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    load,
    save,
    check,
    createFolder,
    createFile,
  }

})();

export default data;