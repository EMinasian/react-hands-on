
export default function BlobDownload() {

  async function handleDownload() {
    const response = await fetch('https://jsonfakery.com/blogs/paginated')
    const blob = await response.blob()
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = 'fileName.xml';
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(blobUrl);
  }

  return (<button onClick={handleDownload} >Download</button>)
}