'use strict';

angular.module('jacksonSierra.version', [
  'jacksonSierra.version.interpolate-filter',
  'jacksonSierra.version.version-directive'
])

.value('version', '0.1');
