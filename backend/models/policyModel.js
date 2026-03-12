const db = require('../config/db');

// Fetch all policies
exports.getAllPolicies = async () => {
  const [rows] = await db.query('SELECT * FROM policies');
  return rows;
};

// Fetch single policy by ID
exports.getPolicyById = async (id) => {
  const [rows] = await db.query('SELECT * FROM policies WHERE id = ?', [id]);
  return rows[0];
};

// Create new policy
exports.createPolicy = async (policy) => {
  const [result] = await db.query(
    'INSERT INTO policies (policy_name, premium, coverage, duration) VALUES (?, ?, ?, ?)',
    [policy.policy_name, policy.premium, policy.coverage, policy.duration]
  );
  return { id: result.insertId, ...policy };
};