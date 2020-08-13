#!/usr/bin/env node
import createGame from '../src/index.js';
import gameConfig from '../src/games/brain-progression.js';

const brainProgression = createGame(gameConfig);
brainProgression();
