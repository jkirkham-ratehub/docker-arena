const Arena = require('bull-arena');

const ARENA_CONFIG_FILE = process.env.ARENA_CONFIG_FILE || './index.json'

let config;
try {
  config = require(ARENA_CONFIG_FILE);
} catch (err) {
  if (err.code !== 'MODULE_NOT_FOUND') {
    throw err;
  }
}

let Bull, Bee, BullMQ;

Arena({
  ...config,
  get Bull() {
    return Bull || (Bull = require('bull'));
  },
  get Bee() {
    return Bee || (Bee = require('bee-queue'));
  },
  get BullMQ() {
    return BullMQ || (BullMQ = require('bullmq'));
  },
});
