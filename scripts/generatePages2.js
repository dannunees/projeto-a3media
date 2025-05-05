import fs from 'fs/promises';
import path from 'path';
import { faker } from '@faker-js/faker';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.resolve(__dirname, '../content/paginatemplate2');

const generatePages2 = async () => {
    await fs.mkdir(pagesDir, { recursive: true });

    for (let i = 1; i <= 1000; i++) {
        const slug = `${i}`;
        const content = `---
titulo: "${faker.lorem.paragraph()}"
titulo_imagem: 'Scientific References:'
url_imagem: 'https://glucosecontrolguide.com/fb/sgs/vsl3/prn-ca1/h1l1//images/refs.webp'
slug: "${slug}"
---
`;

        await fs.writeFile(path.join(pagesDir, `${slug}.md`), content);
    }

    console.log('✅ 1000 páginas do Template 2 criadas com sucesso!');
};

generatePages2();
