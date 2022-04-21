export async function loadDB() {
  const handle = await window.showOpenFilePicker();   
  const fsHandle = handle[0];
  const fileData = await fsHandle.getFile();

  // TODO: Load file data

  console.log(fileData);
}

export async function saveDB() {
  const newHandle = await window.showSaveFilePicker();
  const writableStream = await newHandle.createWritable();
  await writableStream.write("Hello world!");  // TODO: Contents of DB
  await writableStream.close();
}
