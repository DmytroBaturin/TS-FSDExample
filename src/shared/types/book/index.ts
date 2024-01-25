export interface BookInfo {
  id: string;
  title?: string;
  description?: string;
  authors?: string[];
  imageLinks?: ImagesLinks;
  categories?: string[];
  publishedDate?: string;
  publisher?: string;
  pageCount?: number;
  language?: string;
  previewLink?: string;
  infoLink?: string;
}

export interface Book {
  id: string;
  volumeInfo: BookInfo;
}
interface ImagesLinks {
  smallThumbnail: string;
  thumbnail: string;
  extraLarge: string;
  large: string;
  medium: string;
}
