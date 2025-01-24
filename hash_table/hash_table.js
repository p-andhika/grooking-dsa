class Record {
  constructor(key = -1, title = "", placement_info = "") {
    this.key = key;
    this.title = title;
    this.placementInfo = placement_info;
  }
}

class HashTable {
  constructor(size) {
    // arrray to store records
    this.hashArray = new Array(size).fill(new Record());

    // max number of elements a hash table can  store
    this.maxLength = size;

    // to keep track of total records present in the hash table
    this.length = 0;
  }

  // hash function
  hash(key) {
    return key % this.maxLength;
  }

  insert(item) {
    // insert record into the hash table
    if (this.length == this.maxLength) {
      console.error("Hash table is full");
      return fale;
    }

    const index = this.hash(item.key);
    this.hashArray[index] = item;
    this.length++;
    return true;
  }

  search(key, returnedItem) {
    const index = this.hash(key);

    if (this.hashArray[index] == null || this.hashArray[index].key == -1) {
      return false;
    }

    returnedItem.key = this.hashArray[index].key;
    returnedItem.title = this.hashArray[index].title;
    returnedItem.placementInfo = this.hashArray[index].placementInfo;
    return true;
  }

  delete(key) {
    const index = this.hash(key);

    if (this.hashArray[index] != null && this.hashArray[index].key == key) {
      this.hashArray[index].key = -1;
      this.length--;
      return true;
    }

    return false;
  }
}

const hashTable = new HashTable(10);

// Insert book information
hashTable.insert(new Record(1001, "Introduction to Programming", "A2 Shelf"));
hashTable.insert(
  new Record(1002, "Data Structures and Algorithms", "B1 Shelf"),
);
hashTable.insert(new Record(1003, "Database Management Systems", "C3 Shelf"));

console.log(hashTable);

// Retrieve book information
const book = new Record();
if (hashTable.search(1001, book)) {
  console.log("Book Information for Key " + book.Key + ":");
  console.log("Title: " + book.Title);
  console.log("Placement Info: " + book.PlacementInfo);
} else {
  console.log("No book information found for Key 1001");
}

// Delete a book information
hashTable.delete(1001);

// Retrieve the book status after deletion
const bookAfterDeletion = new Record();
if (hashTable.search(1001, bookAfterDeletion)) {
  console.log("Book Information for Key " + bookAfterDeletion.Key + ":");
  console.log("Title: " + bookAfterDeletion.Title);
  console.log("Placement Info: " + bookAfterDeletion.PlacementInfo);
} else {
  console.log("No book information found for Key 1001");
}
