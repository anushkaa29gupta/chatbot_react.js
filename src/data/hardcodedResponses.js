const hardcodedResponses = [
  { pattern: /hod.*(cs|computer)/i, response: "The HOD of Computer Science at Banasthali Vidyapith is Dr. XYZ." },
  { pattern: /(hello|hi|hey)/i, response: "Hi there! How can I assist you today?" },
  { pattern: /introduce.*yourself/i, response: "I'm a personalized Banasthali Campus Bot built to assist students like you!" },
  { pattern: /admission.*process/i, response: "You can check the official admission process at https://banasthali.org/admissions." },
  { pattern: /mess.*timing/i, response: "Mess timings are: BREAKFAST(8–9 AM), LUNCH(12–2 PM), SNACKS(5–6 PM), DINNER(8–9 PM)." },
  { pattern: /who.*you|what.*name/i, response: "I'm your friendly campus assistant chatbot!" },
  { pattern: /who.*director.*banasthali/i, response: "The Director of Banasthali Vidyapith is Anshuman Shastri." },
  { pattern: /who.*founder.*banasthali/i, response: "The founder of Banasthali Vidyapith is Shri. Hiralal Shastri." },
  { pattern: /faculty.*(computer science|cs) department/i, response: "There are 48+ faculties in the CS department at Banasthali. You can ask about any by name!" },
  { pattern: /abha purohit/i, response: "Smt. Abha Purohit is an Assistant Professor with an MCA." },
  { pattern: /abhay kumar rai/i, response: "Dr. Abhay Kumar Rai is an Assistant Professor with M.Sc. (CS), M.Tech. (Software Engg.), NET, and Ph.D." },
  { pattern: /aditi paul/i, response: "Dr. Aditi Paul is an Assistant Professor with MCA, M.Tech. (OR), and Ph.D." },
  { pattern: /ajay kumar yadav/i, response: "Dr. Ajay Kumar Yadav is an Assistant Professor with MCA, NET, and Ph.D." },
  { pattern: /ajit kumar jain/i, response: "Dr. Ajit Kumar Jain is an Associate Professor with MCA, SLET, M.Tech. (CS), and Ph.D." },
  { pattern: /amrita/i, response: "Dr. Amrita is an Assistant Professor with M.Tech. (Software Engg.), GATE, and Ph.D." },
  { pattern: /anoop kumar bhola/i, response: "Dr. Anoop Kumar Bhola is an Assistant Professor with MCA and Ph.D." },
  { pattern: /archana mangal/i, response: "Dr. Archana Mangal is an Assistant Professor with M.Sc. (CS), NET, and Ph.D." },
  { pattern: /ashok kumar/i, response: "Dr. Ashok Kumar is an Assistant Professor with MCA, M.Phil., and Ph.D." },
  { pattern: /bharti nathani/i, response: "Dr. Bharti Nathani is an Assistant Professor with M.Sc. (CS), M.Tech. (CS), and Ph.D." },
  { pattern: /is.*khadi.*compulsory|khadi.*mandatory|khadi.*uniform/i, response: "Yes, it is; wearing uniform on Wednesday and Sunday is compulsory, and for other days, you can wear coloured khadi." }
];

export default hardcodedResponses;
