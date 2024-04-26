function measureMemory() {
  const usage1 = process.memoryUsage();
  const clc = require('../src/index.js');
  clc.green('hello word');

  const usage2 = process.memoryUsage();
  const mb = 1024 * 1024;

  console.log(`Memory Useage（MB）：`);
  console.log(`  RSS：${(usage2.rss - usage1.rss) / mb}`);
  console.log(`  heapTotal：${(usage2.heapTotal - usage1.heapTotal) / mb}`);
  console.log(`  heapUsed：${(usage2.heapUsed - usage1.heapUsed) / mb}`);
}

const argv = process.argv.slice(2);
process.env.CLC_LOW_MEMORY = argv.includes('speed') ? '0' : '1';
process.env.CLC_C256 = argv.includes('c256') ? '1' : '0';

measureMemory();
