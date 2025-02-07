import axios from "axios";

// Menggunakan siteKey dan secretKey langsung dalam kode (tidak menggunakan .env)
const SITE_KEY = "6LfRuL8qAAAAAKyMIXTGO2h70-yKLBBd7C50pA1g";
const SECRET_KEY = "6LfRuL8qAAAAABb0xoXTzUnCnC-CNqP07GaTTDup"; // Gantilah dengan secret key Anda

// Fungsi untuk verifikasi reCAPTCHA di server
const verifyRecaptcha = async (recaptchaToken: string) => {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: SECRET_KEY,
          response: recaptchaToken,
        },
      }
    );

    if (response.data.success) {
      console.log("reCAPTCHA verified successfully");
      return true;
    } else {
      console.error("reCAPTCHA verification failed", response.data);
      return false;
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
};

export { verifyRecaptcha };
