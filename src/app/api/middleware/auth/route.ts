import { NextRequest, NextResponse } from "next/server";
import { AdapterFactory } from "@/middleware/factory/adapter.factory";
import { handleError } from "@/middleware/utils/error-handler";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const customerId = searchParams.get("customerId") || "me";
    
    const adapter = AdapterFactory.getAdapter();
    const customer = await adapter.getCustomer(customerId);
    
    return NextResponse.json(customer);
  } catch (error) {
    return handleError(error);
  }
}
