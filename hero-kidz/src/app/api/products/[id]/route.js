import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    try {
        const collection = await dbConnect(collections.PRODUCTS);
        const product = await collection.findOne({
            _id: new ObjectId(params.id);
        });
        if (!product) {
            return Response.json(
                { success: false, message: "Product not found" },
                { status: 404 }
            );
        }
        return Response.json({
            success: true,
            data: product
        })
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        );
    }
}