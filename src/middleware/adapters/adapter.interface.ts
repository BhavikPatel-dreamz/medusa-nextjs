import { Product, Cart, Order, Customer } from "../types/commerce.types";

export interface ICommerceAdapter {
  // Products
  listProducts(query?: any): Promise<{ products: Product[]; count: number }>;
  getProduct(id: string, query?: any): Promise<Product | null>;

  // Cart
  createCart(data?: any): Promise<Cart>;
  getCart(id: string): Promise<Cart | null>;
  addItemToCart(cartId: string, variantId: string, quantity: number): Promise<Cart>;
  updateItemInCart(cartId: string, itemId: string, quantity: number): Promise<Cart>;
  removeItemFromCart(cartId: string, itemId: string): Promise<Cart>;

  // Orders
  listOrders(customerId: string): Promise<Order[]>;
  getOrder(id: string): Promise<Order | null>;

  // Auth/Customer
  getCustomer(id: string): Promise<Customer | null>;
  // ... more methods as needed
}
