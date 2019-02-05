module.exports = (keysToOmit, object) =>
  Object.entries(object).reduce((target, [key, value]) => {
    if (!keysToOmit.includes(key)) return { ...target, [key]: value };
    return target;
  }, {});
