import { createProduct, deleteProduct, getAllProducts } from "@/prisma/pruduct";

export default async function handler(req : any, res : any) {
    try {
        switch (req.method) {
            case "POST": {
                const { image, title, price, category } = req.body;

                const new_product = await createProduct(image, title, price, category);

                return res.status(201).json(new_product);
            }
            case "GET": {

                const products = await getAllProducts()

                return res.status(200).json(products);
            }
            case "DELETE": {

                const { id } = req.query

                await deleteProduct(id)

                return res.status(200).json({message: "Product deleted successfully"});
            }
        }
    } catch (error) {
        console.log(error);
    }
}