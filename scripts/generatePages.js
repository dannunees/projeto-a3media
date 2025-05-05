import fs from 'fs/promises';
import path from 'path';
import { faker } from '@faker-js/faker';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.resolve(__dirname, '../content/paginatemplate1');

const generate = async () => {
    await fs.mkdir(pagesDir, { recursive: true });

    for (let i = 1; i <= 1000; i++) {
        const slug = `${i}`;
        const paragraphs = Array.from({ length: 5 }, () => faker.lorem.paragraph()).join('\n\n');

        const content = `---
titulo: "Página ${i}"
subtitle_text: "${faker.lorem.sentence()}"
video_url: "${faker.internet.url()}"
image_url: "https://picsum.photos/600/400?random=${i}"
button_text: "Click Here to Watch The Video"
button_text_last: "Click Here to Watch The Video"
slug: "${slug}"
---

${paragraphs}
`;

        await fs.writeFile(path.join(pagesDir, `${i}.md`), content);
    }

    console.log("✅ 1000 páginas criadas com 5 parágrafos cada.");
};

generate();
