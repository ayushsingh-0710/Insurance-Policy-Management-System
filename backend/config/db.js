const mysql = require('mysql2/promise'); // Promise-based for async/await

const dbConfig = {
    host: 'localhost',
    user: 'root',           // Your MySQL username
    password: '',           // Your MySQL password (usually empty for root)
    database: 'insurance_db',
    port: 3306
};

// Create connection pool (better for Express apps)
const pool = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
