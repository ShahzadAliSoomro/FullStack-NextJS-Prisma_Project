import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()

export const createProduct = async (image: string, title: string, price: number, category : string) => {
    const product = await prisma.product.create({
        data: {
            image,
            title,
            price,
            category,
            isAvailable: true,
        }
    });
    return product;
}

export const getAllProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}

export const deleteProduct = async (id: any) => {
    await prisma.product.delete({
        where: {
            id: id
        }
    })
    
}