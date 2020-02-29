#!/bin/bash

# https://stackoverflow.com/questions/821396/aborting-a-shell-script-if-any-command-returns-a-non-zero-value
set -e
set -o pipefail

git config gitflow.branch.master "master"
git config gitflow.branch.develop "dev"

git flow init -d -f

git config gitflow.prefix.feature "feature/"
git config gitflow.prefix.versiontag ""
git config gitflow.prefix.release "test/"
git config gitflow.prefix.hotfix "hotfix/"
git config gitflow.prefix.support "support/"
git config gitflow.prefix.bugfix "bugfix/"

