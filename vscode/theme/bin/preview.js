import fs from 'fs';

const config = fs.readFileSync('./dist/icons.json', 'utf8');
const { file, fileExtensions, fileNames } = JSON.parse(config);
const out = './preview';

if (!fs.existsSync(out)) fs.mkdirSync(out);

if (file) fs.writeFileSync(`${out}/default`, '');

if (fileExtensions) {
  const extensionsPath = `${out}/extensions`;

  if (!fs.existsSync(extensionsPath)) fs.mkdirSync(extensionsPath);

  Object.keys(fileExtensions).forEach((key) => {
    fs.writeFileSync(`${extensionsPath}/default.${key}`, '');
  });
}

if (fileNames) {
  const filesPath = `${out}/files`;

  if (!fs.existsSync(filesPath)) fs.mkdirSync(filesPath);

  Object.keys(fileNames).forEach((key) => {
    const lastIndex = key.lastIndexOf('/');
    let file = key;
    let relativePath = filesPath;

    if (lastIndex > -1) {
      file = key.slice(lastIndex + 1);
      relativePath = `${filesPath}/${key.slice(0, lastIndex)}`;

      if (!fs.existsSync(relativePath)) fs.mkdirSync(relativePath, { recursive: true });
    }

    fs.writeFileSync(`${relativePath}/${file}`, '');
  });
}
