export type Quote = {
  content: string;
}

export type QuotesResponse = Quote[];

export type QuoteTag = {
  name: string;
  slug: string;
  quoteCount: number;
}

export type QuotesTagResponse = QuoteTag[];

export type UnsplashImage = {
  color: string;
  likes: number;
  urls: {
    raw: string;
  }
}

export type UnsplashImagesResponse = {
  results: UnsplashImage[];
}
