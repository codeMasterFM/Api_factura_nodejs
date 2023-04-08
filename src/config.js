import {config } from "dotenv";

config()

export const user = process.env.User || 'root'
export const Host = process.env.Host || 'localhost'
export const Password = process.env.Password || ''
export const Port = process.env.Port || '3000'
export const PortDatabase = process.env.PortDatabase || '3306'
export const database = process.env.Database || 'Factura'

