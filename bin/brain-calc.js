#!/usr/bin/env node
import createGame from '../src/index.js';
import gameConfig from '../src/games/brain-calc.js';

const brainCalc = createGame(gameConfig);
brainCalc();
