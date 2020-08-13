#!/usr/bin/env node
import createGame from '../src/index.js';
import gameConfig from '../src/games/brain-gcd.js';

const brainGcd = createGame(gameConfig);
brainGcd();
