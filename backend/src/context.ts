import { PrismaClient } from "@prisma/client"
import { User } from "./modules/auth"

export type DataSourceContext = {
    dataSources: {
        db: PrismaClient
    },
    user : User | null
}