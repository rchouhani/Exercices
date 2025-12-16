function canDriveCar(user, car) {
  const users = {
    age: user.age,
    name: user.name,
  };
  console.log("user : ", user);

  const voiture = {
    engineSize: car.engineSize,
    name: car.name,
  };
  console.log("car : ", voiture);

  if (user.age < 18 || car.engineSize < 1000) {
    console.log(`Une personne qui a ${user.age} ans ne peut évidemment pas conduire une ${car.name} qui a plus de ${car.engineSize}cc voyons`);
    return false;
  }
  console.log(`Vas-y, fais-toi plaisir ${user.name}`);
  return false;
}
canDriveCar({ age: 18, name: "Bob" }, { engineSize: 2500, name: "Mazda" });

export { canDriveCar };
