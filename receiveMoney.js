// Assuming you have an object representing the existing resource
let existingResource = {
    id: 1,
    name: 'John Doe',
    age: 30,
  };
  
  // Patch function to update the existing resource
  function patchResource(existingResource, updates) {
    // Merge the existing resource with the updates
    const patchedResource = { ...existingResource, ...updates };
    
    // Return the updated resource
    return patchedResource;
  }

  
  
  // Example updates
  const updates = {
    name: 'Updated Name',
    age: 31,
  };
  
  // Apply the patch function
  const updatedResource = patchResource(existingResource, updates);
  
  // Log the updated resource
  console.log(updatedResource);
  