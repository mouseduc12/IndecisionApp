const isAdult = age => {
  return age >= 18 ? true : false;
};

const canDrink = age => {
  return age >= 21 ? true : false;
};

export { isAdult, canDrink };
