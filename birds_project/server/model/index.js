const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, 'birds.json');
const data = fs.readFileSync(file);
const birds = JSON.parse(data);

const getBirds = () => birds;

const patchBird = (id, name) => {
  const bird = birds.find((el) => el.id === Number(id));
  bird.observer.push(name);
  bird.count += 1;

  console.log('observed bird:', bird);
  console.log('observed by:', name);

  return bird.id;
};

module.exports = { getBirds, patchBird };
