import { collections, dbConnect } from "@/lib/dbConnect";
import { Collection } from "mongodb";

export async function GET() {
    try {
        const productCollection = await dbConnect(collections.PRODUCTS);
        const products = await productCollection.find({}).toArray();
        return Response.json({
          success: true,
          data: products,
        });
    } catch (error) {
        return Response.json(
          {
            success: false,
            message: error.message,
          },
          {
            status: 500,
          },
        );
    }
}