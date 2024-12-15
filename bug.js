The Firebase SDK might throw an error if you try to access a property of a document snapshot before the promise returned by `get()` resolves.  This often happens when you attempt to access data synchronously. For example:

```javascript
const docRef = doc(db, 'collection', 'docID');
const docSnap = await getDoc(docRef); // Asynchronous operation
console.log(docSnap.data().myField); // Error if getDoc hasn't completed
```
This will fail because `getDoc` is an asynchronous function and `docSnap.data()` might not be populated yet when the `console.log` line executes.  The asynchronous nature of Firebase operations is often overlooked, leading to this type of error.