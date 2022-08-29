import state from './state.js';
import engine from './engine.js';
import options from './options/options.js';
import dom from './utilities/dom/index.js';
import ns from './utilities/namespace.js';
import support from './utilities/support/index.js';
import motion from './utilities/motion/index.js';
import property from './utilities/property/index.js';

const internals = {};
const legacy = {};

Object.defineProperty(legacy, 'isLegacy', {
  get: () => state.isLegacy
});

legacy.setLegacy = () => {
  state.isLegacy = true;
};

internals.legacy = legacy;
internals.dom = dom;
internals.support = support;
internals.motion = motion;
internals.property = property;
internals.ns = ns;
internals.register = engine.register;
internals.state = state;

Object.defineProperty(internals, 'preventManipulation', {
  get: () => options.preventManipulation
});
Object.defineProperty(internals, 'stage', {
  get: () => state.getModule('stage')
});

export default internals;