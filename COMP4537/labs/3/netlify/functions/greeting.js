import getDate from "../../modules/get-date.js";
export default function greeting(event) {
  const name = event.queryStringParameters.name || "Anonymous";
  const string = getDate(name);
  return {
    statusCode: 200,
    body:
      `
            <html>
            <head>
                <title>Greeting Page</title>
            </head>
            <body>
                <div style="color:blue">${string}</div>
            </body>
        </html>
            `
  };
}