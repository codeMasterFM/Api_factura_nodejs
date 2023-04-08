import { createPool } from "mysql2/promise";
import { Host,user,database, Password, PortDatabase } from "../src/config.js";

export const pool = createPool({
    host:Host,
    user:user,
    password:Password,
    port:PortDatabase,
    database:database

})
console.log(Host)
console.log(user)
console.log(Password)
console.log(PortDatabase)
console.log(Host)
console.log(Host)

;