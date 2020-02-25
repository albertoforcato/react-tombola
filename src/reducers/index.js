import {combineReducers} from 'redux';
import drewNumbers from './drewNumbers';
import managePrizesSettings from './managePrizesSettings';

const tombolaApp = combineReducers({
    drewNumbers,
    managePrizesSettings
})

export default tombolaApp;