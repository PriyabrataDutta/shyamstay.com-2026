const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const blogDir = path.join(rootDir, 'blog');

// 1. Read index.html to extract header and footer
const indexHtmlObj = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

// Use regex to get <header class="tp-header-height">...</header>
const headerMatch = indexHtmlObj.match(/<header class="tp-header-height">[\s\S]*?<\/header>/i);
const footerMatch = indexHtmlObj.match(/<footer>[\s\S]*?<\/footer>/i);

if (!headerMatch || !footerMatch) {
    console.error('Could not find header or footer in index.html');
    process.exit(1);
}

let newHeader = headerMatch[0];
let newFooter = footerMatch[0];

// 2. Fix paths in header and footer to be relative to blog/
function fixPaths(htmlBlock) {
    // Replace assets paths that start with 'assets/' or '"assets/' 
    // Examples: src="assets/..." -> src="../assets/..."
    let fixed = htmlBlock.replace(/(href|src)=["'](?:(?!\/|http|mailto|tel|\#|ftp))([^"']+)["']/g, (match, attr, val) => {
        // If it already starts with ../, don't change
        if (val.startsWith('../')) return match;
        // If it starts with a component like assets/, index.html, about.html, etc.
        // We add ../
        return `${attr}="../${val}"`;
    });
    return fixed;
}

newHeader = fixPaths(newHeader);
newFooter = fixPaths(newFooter);

// 3. Loop through blog files
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html'));

for (let file of files) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace header
    content = content.replace(/<header class="tp-header-height">[\s\S]*?<\/header>/i, newHeader);
    
    // Replace footer
    content = content.replace(/<footer>[\s\S]*?<\/footer>/i, newFooter);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
}
console.log('Done!');
