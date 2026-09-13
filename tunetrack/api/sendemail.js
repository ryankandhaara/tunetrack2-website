export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    return res.status(200).json({
      success: true,
      message: "Message received"
    });

  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong"
    });
  }
}
