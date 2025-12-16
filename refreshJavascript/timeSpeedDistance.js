const cities = {
  Montmorency: { lat: 48.989778, lon: 2.321878 },
  Dieppe: { lat: 49.93333, lon: 1.08333 },
  Orleans: { lat: 47.902964, lon: 1.909251 },
  Blois: { lat: 47.593899, lon: 1.3281 },
  laRochelle: { lat: 46.1591, lon: 1.1517 },
  Biscarosse: { lat: 44.3942, lon: 1.1628 },
};

function distance(villeA, villeB) {
  const R = 6371; // rayon de la Terre en km
  const toRad = (value) => (value * Math.PI) / 180;

  const dLat = toRad(villeB.lat - villeA.lat);
  const dLon = toRad(villeB.lon - villeA.lon);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(villeA.lat)) *
      Math.cos(toRad(villeB.lat)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // distance en km
}

// ✅ Cette fonction te permet de faire distance entre 2 villes par leur nom
function getDistance(cityA, cityB) {
  return distance(cities[cityA], cities[cityB]);
}

// ✅ On fait une fonction road() plus flexible
function road(cityA, cityB, speed) {
  const d = getDistance(cityA, cityB);
  const time = d / speed; // en heures

  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);

  return `Pour aller de ${cityA} à ${cityB} (${d.toFixed(2)} km) à ${speed} km/h, 
il faut environ ${hours}h ${minutes}min.`;
}

// 🔥 Exemple d'utilisation :
console.log(road("Montmorency", "Blois", 80));
console.log(road("Montmorency", "Biscarosse", 100));
