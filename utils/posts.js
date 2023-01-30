import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import { remark } from 'remark';
// import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'pages/posts');
const staticFileDirectory = path.join(process.cwd(), 'public/data/posts.js');

export function getSortedPostsData() {
  // Get a list of folders under /posts directory
  const folderNames = fs.readdirSync(postsDirectory);

  // Filer out any '.DS_Store' files
  const filteredFolderNames = folderNames.filter(folderName => folderName !== '.DS_Store');

  const allPostsData = filteredFolderNames.map((folderName) => {
    // Remove ".mdx" from file name to get id
    // const id = fileName.replace(/\.mdx$/, '');
    const id = folderName;
    // Get the path to folder where the .mdx file is located
    const folderPath = path.join(postsDirectory, folderName);
    // Add .mdx to the folderName to get the filename with .mdx extension
    const fileName = folderName + '.mdx';
    // Get the path to the file by joining the folder path with the filename.mdx
    const filePath = path.join(folderPath, fileName);
    // Read .mdx file at the filePath as string
    const fileContents = fs.readFileSync(filePath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

const postData = getSortedPostsData();
const data = "const POSTS = " + JSON.stringify(postData) + "; export default POSTS;";
fs.writeFile(staticFileDirectory, data ,(err) => err && console.error(err));
