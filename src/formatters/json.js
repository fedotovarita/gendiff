const json = (tree) => {
  const mapping = tree.flatMap((node) => JSON.stringify(node));
  return `[${mapping.join('')}]`;
};
export default json;
