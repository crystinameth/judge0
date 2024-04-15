const { submitCode, getSubmissionDetails } = require("./func");

async function testJudge0Requests() {
  try {
    // Submit code for testing
    const submissionResponse = await submitCode(
      "n = int(input())\nnumbers = list(map(int, input().split()))\ntotal_sum = sum(numbers)\nprint(total_sum)\n", // Sample Python code
      71, // Language ID for Python
      "4\n1 2 3 4 \n", // No standard input for this example
      "10\n", // Expected output
      1 // Time limit in seconds
    );
    console.log("Submission response:", submissionResponse);

    // Get submission details
    const submissionId = submissionResponse.token;
    const submissionDetails = await getSubmissionDetails(submissionId);
    console.log("Submission details:", submissionDetails);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

testJudge0Requests();

// multiple test
async function testMultipleCases(testCases) {
  try {
    for (const testCase of testCases) {
      console.log(`Running test case for input: ${testCase.input}`);

      const submissionResponse = await submitCode(
        "n = int(input())\nnumbers = list(map(int, input().split()))\ntotal_sum = sum(numbers)\nprint(total_sum)\n", // Sample Python code
        71, // Language ID for Python
        testCase.input, // Input data for this test case
        testCase.expectedOutput, // Expected output for this test case
        1 // Time limit in seconds
      );

      console.log("Submission response:", submissionResponse);

      const submissionId = submissionResponse.token;
      const submissionDetails = await getSubmissionDetails(submissionId);

      console.log("Submission details:", submissionDetails);

      if (submissionDetails.status.id !== 3) {
        // Status other than "Accepted"
        console.log(`Test case failed for input: ${testCase.input}`);
        console.log(`Expected output: ${testCase.expectedOutput}`);
        console.log(`Output: ${submissionDetails.stdout}`);
        console.log(`Status: ${submissionDetails.status.description}`);
        return testCase.input;
      }
    }

    console.log("All test cases passed!");
    return null;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

// Define test cases as an array
const testCases = [
  { input: "9\n68 41 39 77 99 31 83 25 97\n", output: "560\n" },
  { input: "9\n88 18 98 33 12 15 19 25 40\n", output: "348\n" },
  { input: "5\n20 36 88 78 81\n", output: "303\n" },
  { input: "4\n2 78 61 70\n", output: "211\n" },
  { input: "3\n84 30 82\n", output: "196\n" },
  { input: "5\n25 84 100 96 80\n", output: "385\n" },
  { input: "8\n75 75 17 30 90 50 21 62\n", output: "420\n" },
  { input: "8\n27 19 88 62 5 2 87 77\n", output: "367\n" },
  { input: "9\n59 40 16 99 77 83 89 52 81\n", output: "596\n" },
  { input: "3\n31 67 98\n", output: "196\n" },
  { input: "6\n68 58 94 68 88 54\n", output: "430\n" },
  { input: "1\n15\n", output: "15\n" },
  { input: "9\n99 72 3 45 95 92 6 12 21\n", output: "445\n" },
  { input: "7\n92 63 33 25 33 72 98\n", output: "416\n" },
  { input: "2\n32 32\n", output: "64\n" },
  { input: "9\n22 31 73 93 37 2 24 11 31\n", output: "324\n" },
  { input: "8\n80 41 5 5 28 81 74 15\n", output: "329\n" },
  { input: "8\n21 43 55 67 10 97 82 22\n", output: "397\n" },
  { input: "9\n60 95 4 87 82 85 77 9 60\n", output: "559\n" },
  { input: "10\n44 55 32 68 100 96 79 85 52 6\n", output: "617\n" },
  { input: "4\n27 72 96 58\n", output: "253\n" },
  { input: "4\n97 58 24 15\n", output: "194\n" },
  { input: "9\n55 99 32 33 67 34 42 35 45\n", output: "442\n" },
  { input: "9\n42 9 99 72 64 3 42 37 98\n", output: "466\n" },
  { input: "4\n96 58 25 58\n", output: "237\n" },
  { input: "5\n32 61 31 58 69\n", output: "251\n" },
  { input: "9\n52 54 15 17 6 87 34 14 32\n", output: "311\n" },
  { input: "3\n17 79 88\n", output: "184\n" },
  { input: "1\n19\n", output: "19\n" },
  { input: "6\n16 29 45 95 88 78\n", output: "351\n" },
  { input: "6\n100 43 96 54 26 11\n", output: "330\n" },
  { input: "3\n76 41 60\n", output: "177\n" },
  { input: "6\n25 74 37 79 16 39\n", output: "270\n" },
  { input: "1\n39\n", output: "39\n" },
  { input: "2\n26 60\n", output: "86\n" },
  { input: "6\n46 56 68 43 81 84\n", output: "378\n" },
  { input: "10\n62 47 49 48 99 26 67 39 88 51\n", output: "576\n" },
  { input: "5\n65 71 39 19 15\n", output: "209\n" },
  { input: "10\n40 28 77 95 60 88 43 36 75 24\n", output: "566\n" },
  { input: "4\n12 84 92 68\n", output: "256\n" },
  { input: "8\n96 28 45 32 73 85 64 78\n", output: "501\n" },
  { input: "10\n51 53 94 62 57 60 39 31 48 91\n", output: "586\n" },
  { input: "6\n19 80 56 51 61 16\n", output: "283\n" },
  { input: "7\n81 75 34 33 70 97 13\n", output: "403\n" },
  { input: "8\n77 53 28 84 11 67 62 52\n", output: "434\n" },
  { input: "3\n18 26 54\n", output: "98\n" },
  { input: "9\n64 13 39 26 67 80 84 95 75\n", output: "543\n" },
  { input: "3\n39 86 99\n", output: "224\n" },
  { input: "9\n68 84 93 46 30 32 23 15 75\n", output: "466\n" },
  { input: "3\n54 63 30\n", output: "147\n" },
  { input: "2\n48 90\n", output: "138\n" },
  { input: "4\n77 35 25 83\n", output: "220\n" },
  { input: "9\n94 65 22 75 86 37 3 69 88\n", output: "539\n" },
  { input: "1\n50\n", output: "50\n" },
  { input: "4\n33 44 78 89\n", output: "244\n" },
  { input: "7\n38 43 11 15 56 31 93\n", output: "287\n" },
  { input: "8\n86 64 61 69 10 12 81 13\n", output: "426\n" },
  { input: "10\n80 33 55 16 75 77 36 97 86 82\n", output: "657\n" },
  { input: "3\n22 14 55\n", output: "91\n" },
  { input: "1\n73\n", output: "73\n" },
  { input: "6\n91 19 11 42 73 95\n", output: "331\n" },
  { input: "8\n35 91 75 15 51 68 46 81\n", output: "462\n" },
  { input: "6\n60 59 81 91 89 75\n", output: "455\n" },
  { input: "10\n33 57 45 91 12 43 78 40 89 76\n", output: "564\n" },
  { input: "10\n68 48 27 84 36 85 25 53 57 44\n", output: "487\n" },
  { input: "6\n15 55 50 42 53 93\n", output: "308\n" },
  { input: "1\n11\n", output: "11\n" },
  { input: "9\n81 40 87 84 52 45 23 31 39\n", output: "482\n" },
  { input: "2\n57 16\n", output: "73\n" },
  { input: "8\n50 42 84 38 68 21 59 75\n", output: "437\n" },
  { input: "9\n36 32 99 35 12 95 74 48 17\n", output: "448\n" },
  { input: "10\n84 35 54 92 86 26 56 49 11 44\n", output: "503\n" },
  { input: "7\n32 59 14 95 65 19 66\n", output: "350\n" },
  { input: "6\n14 21 68 27 59 91\n", output: "280\n" }
];

testMultipleCases(testCases).then((failedInput) => {
  if (failedInput !== null) {
    console.log(`Test failed for input: ${failedInput}`);
  } else {
    console.log("All tests passed!");
  }
});
