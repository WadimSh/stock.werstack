const fs = require("fs");
const path = require("path");

const { IMAGE_PATH } = require("../utils/constants");
const { generateFolder } = require("../utils/generateFolder");
const NotFound = require("../errors/NotFound");

// Контоллер создает паку, самостоятельно генирируя ее имя
const createFolder = (req, res) => {
  const folderName = generateFolder();
  const folderPath = path.join(IMAGE_PATH, folderName);
  fs.mkdirSync(folderPath);
  res.status(200).json({ folderName });
};

// Контроллер удаляет указаную в url папку
const deleteFolder = (req, res, next) => {
  const { folder } = req.params;
  const folderPath = path.join(IMAGE_PATH, folder);

  fs.promises.access(folderPath)
    .then(() => {
      return fs.promises.rm(folderPath, { recursive: true });
    })
    .then(() => {
      res.status(200).json({ message: `Папка ${folder} успешно удалена` });
    })
    .catch((err) => {
      if (err.code === 'ENOENT') {
        throw new NotFound('Папки не существует');
      } 
    })
    .catch(next);
};

// Контроллер возвращает массив наменований имеющихся папок
const getAllFolders = (req, res, next) => {
  fs.promises.readdir(IMAGE_PATH, { withFileTypes: true })
    .then(files => {
      const folders = files
        .filter(file => file.isDirectory())
        .map(file => file.name);
      res.status(200).json(folders);
    })
    .catch((err) => {
      throw new NotFound('Не удалось получить папки');
    })
    .catch(next);
};

module.exports = {
  createFolder,
  deleteFolder,
  getAllFolders,
};