import { save } from './saveload';

function savePresets(choice: unknown) {
  save('presets', JSON.stringify(choice));
}

export { savePresets };
