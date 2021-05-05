// Write your solution in this file!
const employee = {
    name: 'yourName',
    streetAddress: 'Brighton'
};
function updateEmployeeWithKeyAndValue(obj, key, val){
    const newObject = {... obj};
    newObject [key] = val;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj;
}
function deleteFromEmployeeByKey(obj, key) {
    const newObj = {... obj};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}