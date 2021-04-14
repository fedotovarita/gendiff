// import _ from 'lodash';

const flatRender = (array) => {
  const renderedArray = array.map((elem) => {
    if (elem.status === 'unchanged') {
      return `    ${ elem.key }: ${ elem.value }`;
    }
    if (elem.status === 'deleted') {
      return `  - ${ elem.key }: ${ elem.value }`;
    }
    if (elem.status === 'added') {
      return `  + ${ elem.key }: ${ elem.value }`;
    }
    if (elem.status === 'updated') {
      return `  - ${ elem.key }: ${ elem.oldValue }\n  + ${ elem.key }: ${ elem.value }`;
    }
    if (elem.status === 'nested') {
      return `    ${ elem.key }: \n ${flatRender(elem.children)}`;
    }
    return '';
  });
  console.log(array);
  return `{\n${renderedArray.join('\n')}\n}`;
};

export default flatRender;
