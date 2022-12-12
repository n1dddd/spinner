//loading bar animation wrote out to the terminal (completes roughly 2 cycles)

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\  ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r\|  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r\/  ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r\-  ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r\\  ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r|  \n');
}, 1500);