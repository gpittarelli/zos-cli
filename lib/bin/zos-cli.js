#! /usr/bin/env node
'use strict';

require('zos-lib').Logger.silent(false);
require('./program').parse(process.argv);