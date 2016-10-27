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
    console.log('id in the function', id);
    if(obj.id == id) {
      console.log('in if');
      return true;
    } else {
      console.log('in else');
      return false;
    }
  });
  return filteredCats;
};

module.exports = cats;
