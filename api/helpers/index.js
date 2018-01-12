import fs from 'fs';
// this function handle the returning respose
function loadENV(path) {
  const data = fs.readFileSync(path).toString().split('\n');
  data.forEach((item) => {
    const env = item.split('=');
    const [key, value] = env;
    process.env[key] = value;
  });
}
export { loadENV };

