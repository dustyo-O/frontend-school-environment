function mostLikedImage(images) {
  let maxLikes = -1;
  let imageURL;

  for (const image of images) {
    if (image.likes <= maxLikes) {
      continue;
    }

    imageURL = image;
    maxLikes = image.likes;
  }

  return imageURL;
}

export { mostLikedImage };
