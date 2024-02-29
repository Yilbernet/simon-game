
const numRandom = (arr) => {
  const result = arr.slice();
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  result.push(randomNumber);
  return result;
}

export default numRandom;