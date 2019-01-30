class Atom {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}

const atomizer = (quark) => {
  if (typeof quark === 'string' || Array.isArray(quark) || quark === undefined) {
    return new Atom(quark, null);
  }
  return Object.keys(quark).map(cur => new Atom(cur, atomizer(quark[cur])));
};

module.exports = {
  Atom,
  atomizer,
};
