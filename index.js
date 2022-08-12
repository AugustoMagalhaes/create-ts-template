#!/usr/bin/env node
'use strict';

import { mainInstaller } from './src/installer.js';

// check if file is main module to avoid autorun when importing index.js
if (import.meta.url === `file://${process.argv[1]}`) {
  await mainInstaller();
}
