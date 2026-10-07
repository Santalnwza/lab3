import Product from "better-sqlite3"

export abstract class BaseDAO{
    protected db : Product.Database;

    constructor(pdPath: string = 'inventory.db'){
        this.db = new Product(pdPath);
        this.iniTable();
    }
    protected abstract iniTable():void;
}