import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';

const prisma = new PrismaClient();
const config = new ConfigService();

const email = config.get('SEED_ADMIN_EMAIL');

const first_name = config.get('SEED_FIRST_NAME');
const last_name = config.get('SEED_LAST_NAME')
const role = config.get('SEED_ROLE')
const hash = async (pass) => {
    return await argon.hash(pass);
};

const password = config.get('SEED_ADMIN_PASSWORD')


async function main() {
    await prisma.user.upsert({
        where: { id: '' },
        update: {},
        create: {
    email,
    password:await hash(password),
    first_name,
    last_name,
    role
}
    });
}

main().catch((err) => err.message);
