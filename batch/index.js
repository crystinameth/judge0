require('dotenv').config();

const { submitBatchSubmissions, getBatchSubmissionResults } = require('./func');

const submissions = [
  {
    "language_id": 71,
    "source_code": "n = int(input())\nnumbers = list(map(int, input().split()))\ntotal_sum = sum(numbers)\nprint(total_sum)\n",
    "stdin": "4\n1 2 3 4 \n",
    "expected_output": "10\n",
    "cpu_time_limit": 1,
  },
  {
    "language_id": 71,
    "source_code": "n = int(input())\nnumbers = list(map(int, input().split()))\ntotal_sum = sum(numbers)\nprint(total_sum)\n",
    "stdin": "3\n1 2 3\n",
    "expected_output": "6\n",
    "cpu_time_limit": 1,
},
{
    "language_id": 71,
    "source_code": "n = int(input())\nnumbers = list(map(int, input().split()))\ntotal_sum = sum(numbers)\nprint(total_sum)\n",
    "stdin": "2\n1 2\n",
    "expected_output": "3\n",
    "cpu_time_limit": 1,
}
  // Add more submissions as needed
];

//const baseApiUrl = 'https://judge0.ronit.live';
const baseApiUrl = 'https://judge0-ce.p.rapidapi.com';
const apiKey = process.env.API_KEY;

async function submitAndFetchResults() {
  try {
    // Submit batch submissions
    const submissionResponse = await submitBatchSubmissions(submissions, baseApiUrl, apiKey);
    console.log('Batch submission response:', submissionResponse);

    // Extract tokens from the submission response
    const tokens = submissionResponse.map(sub => sub.token);

    // Get batch submission results using tokens
    const results = await getBatchSubmissionResults(tokens, baseApiUrl, apiKey);
    console.log('Batch submission results:', results);
   
    if (results && results.submissions) {
        results.submissions.forEach(submission => {
          console.log('Status Description:', submission.status.description);
        });
      } else {
        console.log('No submission results found.');
      }

    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

submitAndFetchResults();
