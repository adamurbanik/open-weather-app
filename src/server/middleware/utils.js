export const calculateAverage = () => (req, res, next) => {

  let data = req.locals;
  let sum = data.list
    .map(element => element.main.pressure)
    .reduce((a, b) => a + b);

  let average = {
    average: `${sum/data.list.length}`
  };

  res.send(average);
};
