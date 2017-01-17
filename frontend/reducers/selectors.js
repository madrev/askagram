export const likersAsArray = answer => (
  Object.keys(answer.likers || {} ).reverse().map( id => answer.likers[id])
);
