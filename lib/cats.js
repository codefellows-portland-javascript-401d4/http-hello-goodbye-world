const cats = {};

cats.all =
[
  {
    name: 'felix',
    age: 3,
    id: 0,
  },
  {
    name: 'silvester',
    age: 27,
    id: 1
  },
  {
    name: 'thomas',
    age: 9,
    id: 2
  }
];

cats.findCatById = function(id) {
  var filteredCats = this.all.filter(obj => {
    if(obj.id == id) {
      return true;
    } else {
      return false;
    }
  });
  return filteredCats;
};

module.exports = cats;
