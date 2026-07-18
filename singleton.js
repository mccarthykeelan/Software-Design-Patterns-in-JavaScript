class Database {
  constructor() {
    // Check if an instance already exists.
    // If it does, return that existing instance instead of creating a new object.
    if (Database.instance) {
      return Database.instance;
    }

    // Store database configuration.
    this.connection = "Connected to database";

    // Save this object as the single instance.
    // Future calls will return this same object.
    Database.instance = this;
  }

  // Example method that uses the database connection
  query(sql) {
    console.log(`Running query: ${sql}`);
    console.log(this.connection);
  }
}

// Creating objects
const database1 = new Database();
const database2 = new Database();

console.log(database1 === database2);
// True

database1.query("SELECT * FROM users");
