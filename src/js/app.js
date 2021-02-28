/* eslint-disable no-unused-vars */

export default function chooseAttack(character) {
  if (!Object.is(undefined, character)) {
    const newArr = [];
    const {
      special: [...rest],
    } = character;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rest.length; i++) {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = rest[i];
      newArr.push({
        id, name, icon, description,
      });
    }
    return newArr;
  }
  return null;
}
