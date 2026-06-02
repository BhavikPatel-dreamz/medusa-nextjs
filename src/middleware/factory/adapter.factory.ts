import { ICommerceAdapter } from "../adapters/adapter.interface";
import { MedusaAdapter } from "../adapters/medusa.adapter";
import { ShopifyAdapter } from "../adapters/shopify.adapter";
import { WooCommerceAdapter } from "../adapters/woocommerce.adapter";

export type CommerceProvider = "medusa" | "shopify" | "woocommerce";

export class AdapterFactory {
  private static instance: ICommerceAdapter;

  static getAdapter(): ICommerceAdapter {
    if (this.instance) {
      return this.instance;
    }

    const provider = (process.env.NEXT_PUBLIC_COMMERCE_PROVIDER || "medusa") as CommerceProvider;

    switch (provider) {
      case "medusa":
        this.instance = new MedusaAdapter();
        break;
      case "shopify":
        this.instance = new ShopifyAdapter();
        break;
      case "woocommerce":
        this.instance = new WooCommerceAdapter();
        break;
      default:
        this.instance = new MedusaAdapter();
    }

    return this.instance;
  }
}
