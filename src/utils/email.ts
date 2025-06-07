import emailjs from 'emailjs-com';

// For demo purposes, we'll simulate the email sending
// In a real application, you would set up EmailJS with your service ID, template ID, and user ID
// emailjs.init("YOUR_USER_ID");

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactForm = async (formData: ContactForm): Promise<void> => {
  // For demo purposes, we're simulating a successful email send
  // In a real application, you would use emailjs.send
  
  console.log('Sending email with data:', formData);
  
  // Simulate API call with a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.email && formData.name && formData.message) {
        resolve();
      } else {
        reject(new Error('Missing required fields'));
      }
    }, 1000);
  });
  
  /*
  // Real implementation would be:
  return emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message
    },
    'YOUR_USER_ID'
  );
  */
};