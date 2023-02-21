const items = new Set([1, 4, 7]);
items.add(1);

// const item = items.filter((id) => id == 1);
const item = items.forEach((nmbr) => {
  if (nmbr === 1) {
    return nmbr;
  }
  return false;
});
console.log(items);
console.log(item);
