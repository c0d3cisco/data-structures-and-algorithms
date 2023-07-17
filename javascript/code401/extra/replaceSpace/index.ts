function sanitizeURL(inputUrl: string) : (string | null) {
  if(inputUrl === '') return null;
  let outputUrl: string
  outputUrl = inputUrl.split(' ').join('%20');
  return outputUrl;
}

console.log(sanitizeURL('https://www.google.com/search?q=hello world'));
