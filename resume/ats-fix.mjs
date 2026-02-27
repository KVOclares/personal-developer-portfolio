import fs from 'fs';
import path from 'path';

const file = path.resolve('resume/KierVincentOclares_Resume.md');
let content = fs.readFileSync(file, 'utf8');

// 1. Replace the contact block
content = content.replace(
    'KierVOclares@gmail.com &nbsp;|&nbsp; \n+1 (780) 920-8681 &nbsp;|&nbsp;\nlinkedin.com/in/kier-vincent-o-2150051a0 &nbsp;|&nbsp;\ngithub.com/KVOclares',
    'KierVOclares@gmail.com | +1 (780) 920-8681 | linkedin.com/in/kier-vincent-o-2150051a0 | github.com/KVOclares'
);

// 2. Replace the ' · ' separator with ', ' exactly
content = content.split(' &nbsp;·&nbsp; ').join(', ');
content = content.split('\n&nbsp;·&nbsp; ').join(', ');
content = content.split(' \n&nbsp;·&nbsp; ').join(', ');

// 3. Remove any remaining &nbsp;
content = content.split('&nbsp;').join(' ');

fs.writeFileSync(file, content);
console.log('✅ ATS fixes applied');
