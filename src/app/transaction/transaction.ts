import {Category} from "../category/category";

export interface Transaction {
  tx_id: number;
  number: string;
  amount: number;
  sign: string;
  date: string;
  comment: string;
  originalComment: string;
  category: Category;
}
