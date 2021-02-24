import fs from 'fs';

const config = fs.readFileSync('./dist/icons.json', 'utf8');
const { file, fileExtensions, fileNames } = JSON.parse(config);
const out = './out';

if (!fs.existsSync(out)) fs.mkdirSync(out);

if (file) fs.writeFileSync(`${out}/default`, '');

if (fileExtensions) {
  const extensions = `${out}/extensions`;

  if (!fs.existsSync(extensions)) fs.mkdirSync(extensions);

  Object.keys(fileExtensions).forEach((key) => {
    fs.writeFileSync(`${extensions}/default.${key}`, '');
  });
}

if (fileNames) {
  const names = `${out}/names`;

  if (!fs.existsSync(names)) fs.mkdirSync(names);

  Object.keys(fileNames).forEach((key) => {
    fs.writeFileSync(`${names}/${key}`, '');
  });
}
