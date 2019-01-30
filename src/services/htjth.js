const atom2html = (atom) => {
  if (!atom.children) return `<li>${atom.value}</li>`;
  return atom.map(child => `<ol><li>${json2html(child)}</li></ol>`);
};

module.exports = json2html;
