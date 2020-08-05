#!/usr/bin/env node
import { askName, greet } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();
greet(name);
