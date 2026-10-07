import { BaseDAO } from "./BaseDAO";
import { Product } from "./Product";

export class ProductDao extends BaseDAO{
    protected iniTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS products(
            id integer primary key autoincrement,
            name text not null,
            price real not null,
            stock integer not null)
        
        `);
    }
    public addProduct(name:string,price:number,stock: number):boolean{
        const stmt = this.db.prepare(
            'insert into products (name,price,stock) VALUES (?,?,?)'
        );
        const result = stmt.run(name,price,stock);
        return result.changes > 0;
    }
    public findProductById(id:number):Product | null{
        const stmt = this.db.prepare('SELECT * FROM products WHERE id = ?');
        const row = stmt.get(id) as {id:number,name:string,price:number,stock:number} |undefined;

        if (!row) return null;
        return new Product(row.id,row.name,row.price,row.stock);
    }
    public reduceStock(id:number,newStock:number): boolean{
        const stmt = this.db.prepare('UPDATE products SET stock = ? WHERE id = ?');
        const result = stmt.run(newStock, id);
        return result.changes >0;
    }
}