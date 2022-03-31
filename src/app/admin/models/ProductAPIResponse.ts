export interface ProductAPIResponse {
  products:    Product[];
  totalPages:  number;
  currentPage: number;
}

export interface Product {
  _id:       string;
  name:      string;
  category:  string;
  price:     number;
  imgUrl:    string;
  createdAt: Date;
  updatedAt: Date;
}
