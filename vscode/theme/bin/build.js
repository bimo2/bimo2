import path from 'path';
import fs from 'fs';
import map from '../assets.map.js';

const dir = path.resolve('assets', 'svg');
const dist = './dist';
const assets = fs.readdirSync(dir);

const iconDefinitions = assets.reduce((defs, asset) => {
  const token = asset.split('.')[0];
  const iconPath = `../assets/svg/${asset}`

  return {
    ...defs,
    [`_${token}`]: { iconPath },
  };
}, {});

if (!fs.existsSync(dist)) fs.mkdirSync(dist);

fs.writeFileSync(
  `${dist}/icons.json`,
  JSON.stringify({ ...map, iconDefinitions })
);
