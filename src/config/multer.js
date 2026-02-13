const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

/* ✅ Cloudinary Storage */
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "love_letters",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [
      {
        width: 800,          // slightly larger but safe
        height: 800,
        crop: "limit",       // safer than fill
        quality: "auto:low", // 🔥 compress automatically
        fetch_format: "auto",
      },
    ],
  }),
});

/* ✅ Multer Config with Limits */
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 🔥 5MB max
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/webp"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only image files allowed"), false);
    }
  },
});

module.exports = upload;
