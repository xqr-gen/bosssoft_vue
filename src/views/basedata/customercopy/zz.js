//var reg = /^\d+$|^\d+[.]?\d+$/;

export function validateAccountNumber(str) {
  const reg = /^\d+$|^\d+[.]?\d+$/;
  return reg.test(str)
}