import { savePresets } from './save-presets';
import { save } from './saveload';

jest.mock('./saveload');

test('saves stringified object', () => {
  savePresets({
    topic: 'wisdom',
    color: 'red',
  });

  expect(save).toBeCalledTimes(1);
  expect(save).toBeCalledWith('presets', '{"topic":"wisdom","color":"red"}');
});
