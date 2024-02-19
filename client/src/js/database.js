import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Done: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Database and version
  const jateDb = await openDB('jate', 1);
   // New transaction specifying db and privileges
  const tx = jateDb.transaction('jate', 'readwrite');
    // Open desired object store
  const store = tx.objectStore('jate');
    // Pass in content
  const request = store.put({id: 1, value: content});
   // Confirmation
  const result = await request;
  console.log('updated text entry has been saved to the database!', result)
};

// Done: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
    // Database and version
  const jateDb = await openDB('jate', 1);
  // New transaction specifying db and privileges
  const tx = jateDb.transaction('jate', 'readonly');
   // Open desired object store
  const store = tx.objectStore('jate');
    // Get all request
  const request = store.getAll();
   // Confirmation and return
  const result = await request;
  console.log('result.value', result);
  return result.value;
};

initdb();
