const generateLoveLetter = require("../utils/loveQuotes");

exports.createLoveLetter = async (req, res) => {
  try {
    const { your_name, loved_name, whatsapp, code } = req.body;

    if (!your_name || !loved_name || !whatsapp || !req.file) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const photoUrl = req.file.path; // 🌩 Cloudinary URL
    const loveLetter = generateLoveLetter();

    res.status(200).json({
      your_name,
      loved_name,
      whatsapp,
      photo_link: photoUrl,
      love_letter: loveLetter,
      created_at: new Date(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Love letter creation failed" });
  }
};
