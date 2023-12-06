import { savePresets } from './save-presets';
import { save } from './saveload';

jest.mock('./saveload');

test('saves stringified object', () => {
  savePresets({
    topic: 'wisdom',
    color: 'red',
  });

  expect(save).toHaveBeenCalledTimes(1);
  expect(save).toHaveBeenCalledWith('presets', '{"topic":"wisdom","color":"red"}');
});
