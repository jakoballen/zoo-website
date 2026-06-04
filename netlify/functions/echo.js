exports.handler = async function(event) {
  const params = new URLSearchParams(event.body);

  let rows = "";

  for (const [key, value] of params.entries()) {
    rows += `
      <tr>
        <th>${key}</th>
        <td>${value}</td>
      </tr>
    `;
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Submitted</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #1a1a1a;
      color: #e5e5e5;
      margin: 0;
      padding: 2rem;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background: #2b2b2b;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }

    h1 {
      color: #c76b29;
      margin-top: 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
      background: #333;
    }

    th,
    td {
      border: 1px solid #555;
      padding: 0.75rem;
      text-align: left;
    }

    th {
      background: #3a2a1f;
      width: 35%;
    }
    td {
      background: #333;
    }

    .button {
      display: inline-block;
      margin-top: 1.5rem;
      background: #c76b29;
      color: white;
      text-decoration: none;
      padding: 0.75rem 1.25rem;
      border-radius: 5px;
    }

    .button:hover {
      background: #a95820;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Form Submitted Successfully</h1>
    <p>Your information has been received.</p>

    <table>
      ${rows}
    </table>

    <a class="button" href="/">Return to Home Page</a>
  </div>
</body>
</html>
    `
  };
};