#!/bin/bash

set -e # exit with nonzero exit code if anything fails

# run build
npm run build

# just to be sure we exit cleanly
exit 0;