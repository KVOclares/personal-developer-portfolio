import { mdToPdf } from 'md-to-pdf';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync, writeFileSync, mkdirSync, readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const mdPath = resolve(__dirname, 'KierVincentOclares_Resume.md');
const originalMd = readFileSync(mdPath, 'utf8');
// Prepend an HTML comment to prevent md-to-pdf from parsing the top '---' block as YAML frontmatter
const mdContent = '<!-- -->\n' + originalMd;

const pdf = await mdToPdf(
    { content: mdContent },
    {
        stylesheet: resolve(__dirname, 'resume-style.css'),
        pdf_options: {
            format: 'Letter',
            margin: {
                top: '0.6in',
                right: '0.65in',
                bottom: '0.6in',
                left: '0.65in'
            },
            printBackground: false,
        },
        launch_options: {
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        },
    }
);

if (pdf && (pdf.filename || pdf.content)) {
    const outputDir = resolve(__dirname, '../public/assets/resume');
    mkdirSync(outputDir, { recursive: true });

    if (pdf.content) {
        writeFileSync(resolve(outputDir, 'KierVincentOclares_Resume.pdf'), pdf.content);
    } else {
        copyFileSync(
            pdf.filename,
            resolve(outputDir, 'KierVincentOclares_Resume.pdf')
        );
    }

    console.log('✅ Resume PDF generated successfully');
} else {
    console.error('❌ PDF generation failed');
    process.exit(1);
}
