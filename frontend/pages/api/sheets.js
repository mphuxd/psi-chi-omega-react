import { google } from "googleapis";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const request = {
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "A:A",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [[email]],
      },
    };

    try {
      const response = (await sheets.spreadsheets.values.append(request)).data;
      return res.status(201).json({ response });
    } catch (err) {
      console.error(err);
    }
  }
}

export default handler;
