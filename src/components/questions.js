const EasyQbank = [
    {
        question: "What is the most common method to secure passwords?",
        answers: ["Plaintext", "Hashing", "Storing in Excel", "Emailing them"],
        correct: "Hashing",
        questionId: "001",
    },
    {
        question: "What does HTTPS stand for?",
        answers: [
            "Hypertext Transfer Protocol Secure",
            "Hypertext Transfer Protocol Standard",
            "High-Tech Protocol Secure",
            "Hypertext Transfer Public Secure",
        ],
        correct: "Hypertext Transfer Protocol Secure",
        questionId: "002",
    },
    {
        question: "Which of the following is a common multi-factor authentication method?",
        answers: ["Password and PIN", "Password and OTP", "OTP only", "PIN only"],
        correct: "Password and OTP",
        questionId: "003",
    },
    {
        question: "What does a firewall do?",
        answers: [
            "Stops all network traffic",
            "Blocks unauthorized access",
            "Slows down the internet",
            "Encrypts data",
        ],
        correct: "Blocks unauthorized access",
        questionId: "004",
    },
    {
        question: "Which of the following is a strong password?",
        answers: [
            "password123",
            "admin",
            "A$tr0n0my!2023",
            "qwerty",
        ],
        correct: "A$tr0n0my!2023",
        questionId: "005",
    },
    {
        question: "What is the purpose of an antivirus program?",
        answers: [
            "Delete all files",
            "Scan and remove malware",
            "Encrypt data",
            "Monitor user activity",
        ],
        correct: "Scan and remove malware",
        questionId: "006",
    },
    {
        question: "What does the term 'phishing' mean?",
        answers: [
            "A type of fishing sport",
            "Stealing sensitive information via fake websites",
            "Encrypting files for security",
            "Monitoring network traffic",
        ],
        correct: "Stealing sensitive information via fake websites",
        questionId: "007",
    },
    {
        question: "Which of these is a safe way to store sensitive information?",
        answers: ["Plaintext files", "Encrypted databases", "USB drives", "Cloud sharing links"],
        correct: "Encrypted databases",
        questionId: "008",
    },
    {
        question: "What does the padlock symbol in a browser indicate?",
        answers: [
            "The site is safe",
            "A secure connection (SSL/TLS)",
            "The site is free",
            "A blocked site",
        ],
        correct: "A secure connection (SSL/TLS)",
        questionId: "009",
    },
    {
        question: "Which is an example of social engineering?",
        answers: [
            "Using a firewall",
            "Tricking someone into giving a password",
            "Encrypting sensitive data",
            "Using multi-factor authentication",
        ],
        correct: "Tricking someone into giving a password",
        questionId: "010",
    },
];

const MediumQbank = [
    {
        question: "What does XSS stand for in cybersecurity?",
        answers: [
            "Cross-Site Scripting",
            "Cross Server Security",
            "XML Secure Sockets",
            "Extra Secure Sockets",
        ],
        correct: "Cross-Site Scripting",
        questionId: "101",
    },
    {
        question: "Which one is an asymmetric encryption algorithm?",
        answers: ["RSA", "AES", "SHA", "MD5"],
        correct: "RSA",
        questionId: "102",
    },
    {
        question: "Which is an example of a SQL Injection attack?",
        answers: [
            "Tricking a user into revealing their password",
            "Injecting malicious SQL statements into a database query",
            "Overloading a server with traffic",
            "Encrypting sensitive data with incorrect keys",
        ],
        correct: "Injecting malicious SQL statements into a database query",
        questionId: "103",
    },
    {
        question: "What is the primary use of a VPN?",
        answers: [
            "Encrypting emails",
            "Securing internet traffic and masking the IP address",
            "Protecting against viruses",
            "Blocking phishing attempts",
        ],
        correct: "Securing internet traffic and masking the IP address",
        questionId: "104",
    },
    {
        question: "What is a zero-day vulnerability?",
        answers: [
            "A vulnerability discovered on the first day of software release",
            "A vulnerability that has been known but unpatched",
            "A vulnerability discovered and exploited before a patch is available",
            "A vulnerability in outdated hardware",
        ],
        correct: "A vulnerability discovered and exploited before a patch is available",
        questionId: "105",
    },
    {
        question: "What does the principle of 'least privilege' mean?",
        answers: [
            "Users should only have the access necessary to perform their job",
            "Users should have admin privileges to all systems",
            "All users must share the same level of access",
            "Access should be granted based on user requests",
        ],
        correct: "Users should only have the access necessary to perform their job",
        questionId: "106",
    },
    {
        question: "Which is a common characteristic of a brute-force attack?",
        answers: [
            "Guessing passwords using every possible combination",
            "Phishing emails sent to users",
            "Using encrypted connections to secure data",
            "Hijacking user sessions on a browser",
        ],
        correct: "Guessing passwords using every possible combination",
        questionId: "107",
    },
    {
        question: "Which protocol is commonly used for secure file transfer?",
        answers: ["FTP", "HTTP", "SFTP", "SMTP"],
        correct: "SFTP",
        questionId: "108",
    },
    {
        question: "What does a penetration test (pentest) simulate?",
        answers: [
            "A user logging into a system",
            "An attacker attempting to exploit vulnerabilities",
            "A security team scanning for viruses",
            "A software engineer reviewing code",
        ],
        correct: "An attacker attempting to exploit vulnerabilities",
        questionId: "109",
    },
    {
        question: "Which of these is considered a strong security practice?",
        answers: [
            "Using the same password across all accounts",
            "Changing passwords frequently and using unique passwords",
            "Saving passwords in plaintext files",
            "Disabling multi-factor authentication for convenience",
        ],
        correct: "Changing passwords frequently and using unique passwords",
        questionId: "110",
    },
];

const HardQbank = [
    {
        question: "What is the main purpose of the OWASP Top 10?",
        answers: [
            "To list the top 10 programming languages",
            "To identify critical web application vulnerabilities",
            "To rank security software",
            "To define password policies",
        ],
        correct: "To identify critical web application vulnerabilities",
        questionId: "201",
    },
    {
        question: "What does the acronym CSRF stand for?",
        answers: [
            "Cross-Site Request Forgery",
            "Cyber Security Rapid Function",
            "Content Secure Request Form",
            "Critical Security Random Factor",
        ],
        correct: "Cross-Site Request Forgery",
        questionId: "202",
    },
    {
        question: "Which is a characteristic of a Man-in-the-Middle (MITM) attack?",
        answers: [
            "Intercepting and altering communication between two parties",
            "Using malware to encrypt user files",
            "Guessing passwords using brute force",
            "Sending phishing emails to users",
        ],
        correct: "Intercepting and altering communication between two parties",
        questionId: "203",
    },
    {
        question: "Which algorithm is considered secure for hashing passwords?",
        answers: ["MD5", "SHA-256", "SHA-1", "Base64"],
        correct: "SHA-256",
        questionId: "204",
    },
    {
        question: "What is the primary purpose of a Security Information and Event Management (SIEM) system?",
        answers: [
            "To monitor and analyze security logs in real-time",
            "To encrypt data during transmission",
            "To block phishing websites",
            "To provide cloud storage for sensitive data",
        ],
        correct: "To monitor and analyze security logs in real-time",
        questionId: "205",
    },
    {
        question: "What is a 'honeypot' in cybersecurity?",
        answers: [
            "A secure storage for encryption keys",
            "A decoy system to attract attackers",
            "A phishing attempt targeting sensitive data",
            "A cloud-based backup solution",
        ],
        correct: "A decoy system to attract attackers",
        questionId: "206",
    },
    {
        question: "Which of these is an example of an Advanced Persistent Threat (APT)?",
        answers: [
            "A phishing email campaign",
            "A state-sponsored hacking group infiltrating a network over time",
            "A brute-force attack on passwords",
            "An SQL Injection exploit",
        ],
        correct: "A state-sponsored hacking group infiltrating a network over time",
        questionId: "207",
    },
    {
        question: "What is the main benefit of using a Public Key Infrastructure (PKI)?",
        answers: [
            "Encrypting large amounts of data quickly",
            "Providing a framework for secure key exchange and identity verification",
            "Blocking spam emails",
            "Optimizing server performance",
        ],
        correct: "Providing a framework for secure key exchange and identity verification",
        questionId: "208",
    },
    {
        question: "Which of the following best describes a 'buffer overflow' attack?",
        answers: [
            "Exploiting the excess memory allocated to a program",
            "Filling up a server's storage capacity",
            "Flooding a network with traffic",
            "Injecting additional data into memory to overwrite adjacent values",
        ],
        correct: "Injecting additional data into memory to overwrite adjacent values",
        questionId: "209",
    },
    {
        question: "What is the purpose of a Digital Signature?",
        answers: [
            "To encrypt sensitive information",
            "To verify the integrity and authenticity of a message",
            "To block unauthorized users",
            "To monitor network activity",
        ],
        correct: "To verify the integrity and authenticity of a message",
        questionId: "210",
    },
];

export { EasyQbank, MediumQbank, HardQbank };
