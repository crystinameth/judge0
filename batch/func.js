const axios = require('axios');

async function submitBatchSubmissions(submissions, baseApiUrl, apiKey) {
  try {
    const url = `${baseApiUrl}/submissions/batch`;
    const response = await axios.post(url, { submissions }, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to submit batch submissions: ${error.message}`);
  }
}

async function getBatchSubmissionResults(tokens, baseApiUrl, apiKey) {
  try {
    const url = `${baseApiUrl}/submissions/batch`;
    const response = await axios.get(url, {
      params: {
        tokens: tokens.join(','),
        base64_encoded: 'false',
        fields: 'stdout,stderr,status,token,time,memory,compile_output',
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get batch submission results: ${error.message}`);
  }
}

module.exports = {
  submitBatchSubmissions,
  getBatchSubmissionResults,
};
