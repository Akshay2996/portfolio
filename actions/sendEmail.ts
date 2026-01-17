"use server";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Here you would typically send the email using an API or email service
  console.log("Email sent from:", senderEmail);
  console.log("Message:", message);
};
