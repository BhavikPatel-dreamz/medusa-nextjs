import BillingPage from "@/components/billing/BillingPage";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Billing({ searchParams }: Props) {
  const sp = await searchParams
  return <BillingPage searchParams={sp} />;
}