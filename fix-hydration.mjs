import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/components', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;
    
    // Add suppressHydrationWarning to <button
    content = content.replace(/<button(?!\s+suppressHydrationWarning)/g, '<button suppressHydrationWarning');
    // Add suppressHydrationWarning to <input
    content = content.replace(/<input(?!\s+suppressHydrationWarning)/g, '<input suppressHydrationWarning');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Added suppressHydrationWarning to ${filePath}`);
    }
  }
});
