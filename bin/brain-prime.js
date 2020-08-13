#!/usr/bin/env node
import createGame from '../src/index.js';
import gameConfig from '../src/games/brain-prime.js';

const brainPrime = createGame(gameConfig);
brainPrime();
