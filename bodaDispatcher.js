// Mock rider data (later: Firebase/PostgreSQL)
const riders = [
  { id: 1, phone: '254700111222', location: [-1.292, 36.821], rating: 4.5 },
  { id: 2, phone: '254700333444', location: [-1.303, 36.812], rating: 4.2 },
];

function findNearestRider(pickupLocation) {
  return riders.sort((a, b) => {
    const distA = haversineDistance(a.location, pickupLocation);
    const distB = haversineDistance(b.location, pickupLocation);
    return distA - distB;
  })[0];
}

// Example usage
const pickup = [-1.290, 36.820]; // Kibanda ya Chege
const assignedRider = findNearestRider(pickup);
console.log(`Assign to: ${assignedRider.phone}`);
