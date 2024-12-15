The solution involves correctly handling the asynchronous operation using promises. Here's how to fix the code:

Using `async/await`:

```javascript
async function getData() {
  const docRef = doc(db, 'collection', 'docID');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data().myField);
  } else {
    console.log('No such document!');
  }
}
getData();
```

Using `.then()`:

```javascript
const docRef = doc(db, 'collection', 'docID');
getDoc(docRef).then((docSnap) => {
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data().myField);
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error fetching document:', error);
});
```
These examples ensure that the code waits for the `getDoc()` promise to resolve before accessing the data, preventing the error.