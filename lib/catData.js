const cats = {};

cats.all = [
  {
    name: 'Baby',
    age: 5,
    id: 0
  },
  {
    name: 'Snowy',
    age: 3,
    id: 1
  },
  {
    name: 'Ellie',
    age: 3,
    id: 2
  },
  {
    name: 'Kitty',
    age: 8,
    id: 3
  }
];

cats.findById = function(id) {
  let filteredCats = this.all.filter(obj => {
    if(obj.id == id) {
      return true;
    } else {
      return false;
    }
  });
  return filteredCats;
};

module.exports = cats;