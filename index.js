require("datejs");

function combineUsers(...userArrays) {
  // Initialize combined object
  const combinedObject = {
    users: [],
    merge_date: null,
  };

  // Merge all users
  for (const array of userArrays) {
    combinedObject.users.push(...array);
  }

  // Set current date in M/d/yyyy format
  const currentDate = new Date().toString("M/d/yyyy");
  combinedObject.merge_date = currentDate;

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
