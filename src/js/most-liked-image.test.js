import { mostLikedImage } from './most-liked-image';

test('Selects most liked image', () => {
  const image = mostLikedImage([
    {
      id: 'lUaaKCUANVI',
      urls: {
        raw: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3',
        full: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=85',
        regular: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=1080',
        small: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=400',
        thumb: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=200',
        small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1497633762265-9d179a990aa6',
      },
      likes: 1820,
    },
    {
      id: 'Z2ImfOCafFk',
      urls: {
        raw: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3',
        full: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=85',
        regular: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=1080',
        small: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=400',
        thumb: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=200',
        small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516383607781-913a19294fd1',
      },
      likes: 1821,
    },
  ]);

  expect(image.id).toBe('Z2ImfOCafFk');
});

test('If likes are equal, selects first', () => {
  const image = mostLikedImage([
    {
      id: 'lUaaKCUANVI',
      urls: {
        raw: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3',
        full: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=85',
        regular: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=1080',
        small: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=400',
        thumb: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=200',
        small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1497633762265-9d179a990aa6',
      },
      likes: 3527,
    },
    {
      id: 'Z2ImfOCafFk',
      urls: {
        raw: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3',
        full: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=85',
        regular: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=1080',
        small: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=400',
        thumb: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwyfHxEdXN0eSUyMEZyb250ZW5kJTIwU2Nob29sJTIwaXMlMjB0aGUlMjBiZXN0JTIwc2Nob29sfGVufDB8fHx8MTcwMTAyMDQ5N3ww&ixlib=rb-4.0.3&q=80&w=200',
        small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516383607781-913a19294fd1',
      },
      likes: 3527,
    },
  ]);

  expect(image.id).toBe('lUaaKCUANVI');
});
