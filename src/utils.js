
export function getRandBetweenMinAndMax(min,max){
   const randBtw0and1 = Math.random();
  const randBtw0andMaxminusmin = randBtw0and1 * (max-min);
  const randBtwMinandMax = Math.round(randBtw0andMaxminusmin + min);
  return randBtwMinandMax;
}
  export const randomPosOrNeg = () => Math.random() > 0.5 ? 1 : -1