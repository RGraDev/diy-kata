function reachDestination(distance, speed) {
  const estimatedArrival = distance / speed;

  if (distance < 0 || speed < 0) {
    return "Distance and Speed must both be positive";
  }
  if (speed === 0) {
    return "Speed cannot be zero";
  }
  if (distance === 0) {
    return "Distance cannot be zero";
  }
  return `I should be there in ${Math.round(estimatedArrival * 2) / 2} hours`;
}

module.exports = reachDestination;
