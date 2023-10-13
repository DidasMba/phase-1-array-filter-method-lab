// Code your solution here
// Sample array of drivers
const drivers = [
    'John Smith',
    'Jane Doe',
    'Alice Johnson',
    'Bob Brown',
    'Eve Davis',
  ];
  
  // Function to find exact matches
  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find fuzzy matches (drivers whose names start with provided letters)
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Sample array of driver objects
  const driverObjects = [
    { name: 'John Smith', hometown: 'New York' },
    { name: 'Alice Johnson', hometown: 'Los Angeles' },
    { name: 'Bob Brown', hometown: 'Chicago' },
    { name: 'Eve Davis', hometown: 'Miami' },
  ];
  
  // Function to match by driver's name
  function matchName(driverObjects, name) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  // Testing the functions
  console.log(findMatching(drivers, 'john smith')); // Should return ['John Smith']
  console.log(fuzzyMatch(drivers, 'a')); // Should return ['Alice Johnson']
  console.log(matchName(driverObjects, 'Alice Johnson')); // Should return [{ name: 'Alice Johnson', hometown: 'Los Angeles' }]
  