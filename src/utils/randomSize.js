function randomSize(sizeRange = 0.1) {
  const size = (Math.random() - 0.5) * sizeRange;

  return size;
}

export default randomSize;