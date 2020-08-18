#!/usr/bin/env node
import { requestInput, print } from '../src/cli.js';

print('Welcome to the Brain Games!');
const name = requestInput('May I have your name? ');
print(`Hello, ${name}!`);