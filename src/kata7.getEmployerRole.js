const getEmployerRole = (employeeName, employees) =>
  employees.find((e) => e.name === employeeName).role;

module.exports = getEmployerRole;
