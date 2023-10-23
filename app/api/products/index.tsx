import { createProduct } from "@/prisma/pruduct";

export default async function handler(req : any, res : any) {
    try {
        switch (req.method) {
            case "POST": {
                const { image, title, price, category } = req.body;

                const new_product = await createProduct(image, title, price, category);

                return res.status(200).json(new_product);
            }
        }
    } catch (error) {
        console.log(error);
    }
}