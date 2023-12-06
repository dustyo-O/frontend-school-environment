import { UnsplashImage } from '../types/api';

function mostLikedImage(images: UnsplashImage[]): UnsplashImage | undefined {
  let maxLikes = -1;
  let imageResult;

  for (const image of images) {
    if (image.likes <= maxLikes) {
      continue;
    }

    imageResult = image;
    maxLikes = image.likes;
  }

  return imageResult;
}

export { mostLikedImage };
