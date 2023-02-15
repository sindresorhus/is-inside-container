import {expectType} from 'tsd';
import isInsideContainer from './index.js';

expectType<boolean>(isInsideContainer());
