const db = require('./config/db');

async function testConnection() {
    try {
        const connection = await db.getConnection();
        console.log('✅ MySQL connected successfully!');
        
        // Test query
        const [rows] = await connection.execute('SELECT * FROM policy_types');
        console.log('Policy types:', rows);
        
        connection.release();
    } catch (error) {
        console.error('❌ DB Error:', error.message);
    }
}

testConnection();
