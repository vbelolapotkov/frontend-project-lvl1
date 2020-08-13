#!/usr/bin/env node
import createGame from '../src/index.js';
import gameConfig from '../src/games/brain-even.js';

const brainEven = createGame(gameConfig);
brainEven();
