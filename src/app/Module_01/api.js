

export const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Date.now()), 1000);
  })
}