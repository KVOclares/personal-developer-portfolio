import { mdToPdf } from 'md-to-pdf';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, writeFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const mdPath = resolve(__dirname, 'KierVincentOclares_Resume.md');
const originalMd = readFileSync(mdPath, 'utf8');
const mdContent = '<!-- -->\n' + originalMd;

try {
    const pdf = await mdToPdf(
        { content: mdContent },
        { as_html: true }
    );
    if (pdf && pdf.content) {
        writeFileSync(resolve(__dirname, 'test.html'), pdf.content);
        console.log("HTML generated successfully!");
    }
} catch (e) {
    console.error(e);
}
