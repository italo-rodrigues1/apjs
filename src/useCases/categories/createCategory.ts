import { Request, Response } from "express";
import { Category } from "../../app/models/Category";

export async function createCategories(req: Request, res: Response) {
    const categories = await Category.create();
    res.json({message:'Categoria criado com sucesso'});
}
