const axios = require('axios');
require('dotenv').config();

//const baseApiUrl = 'https://judge0.ronit.live';
const baseApiUrl = 'https://judge0-ce.p.rapidapi.com';
const apiKey = process.env.API_KEY; 

async function submitCode(sourceCode, languageId, stdin, expectedOutput, timeLimit) {
  const url = `${baseApiUrl}/submissions`;
  const headers = {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
  };
  const data = {
    source_code: sourceCode,
    language_id: languageId,
    stdin: stdin,
    expected_output: expectedOutput,
    cpu_time_limit: timeLimit,
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to submit code: ${error.message}`);
  }
}

async function getSubmissionDetails(submissionId) {
  const url = `${baseApiUrl}/submissions/${submissionId}`;
  const headers = {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get submission details: ${error.message}`);
  }
}

module.exports = { submitCode, getSubmissionDetails };
