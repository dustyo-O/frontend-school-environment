import { save } from './saveload';

function savePresets(choice) {
  save('presets', JSON.stringify(choice));
}

export { savePresets };
