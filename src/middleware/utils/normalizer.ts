/**
 * Shared data normalization helpers
 */

export const normalizePrice = (amount: number, currencyCode: string) => {
  return {
    amount,
    currency_code: currencyCode.toUpperCase(),
  };
};

export const formatHandle = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};
