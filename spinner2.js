const spinnerFunction = () => {
  let increaseTimer = 100;
  const spinnerObject = {straightBar: '\r|  ', backwardBar: '\r/  ', dash: '\r-  ', fowardBar: '\r-  '};
  for (const property in spinnerObject) {
    setTimeout(() => {
      process.stdout.write(spinnerObject[property]);
    }, increaseTimer);
    increaseTimer += 200;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, increaseTimer);
};

spinnerFunction();