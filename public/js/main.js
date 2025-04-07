// animation starts 
function getRandomColor() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomSymbol() {
    const symbols = [
        "0", "1", "/>", "<", "{}", "&", "|", "^", "=>", "<=", "var", "let", "const", 
        "function", "return", "if", "else", "while", "do", "elif", "select", "*", "where"
    ];
    return Math.random() < 0.2 ? "0" : Math.random() < 0.4 ? "1" : symbols[Math.floor(Math.random() * symbols.length)];
}

function createSymbol() {
    const symbol = document.createElement("span");
    symbol.classList.add("code-symbol");
    symbol.innerText = getRandomSymbol();
    symbol.style.color = getRandomColor();
    document.body.appendChild(symbol);
    
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;
    
    symbol.style.left = Math.random() * window.innerWidth + "px";
    symbol.style.top = Math.random() * totalHeight + "px";
    symbol.style.animationDuration = (Math.random() * 3 + 2) + "s";
    
    setTimeout(() => {
        symbol.remove();
    }, 5000);
}

setInterval(createSymbol, 100);
// animation ends

const messageButton = document.getElementById('submit-message-button');
let whatsappLink = "";
let skypeLink="";

document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('popupModal').style.display = 'none';
});

messageButton.addEventListener('click', () => {
    const name = document.getElementById('personName').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const email = document.getElementById('personEmail').value.trim();
    const subject = document.getElementById('messageSubject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !email || !subject || !message) {
        window.alert("Please provide a value for all required fields.");
    } else {
        // Use template literals without manually adding %0A
        let rawMessage = `Subject: ${subject}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
        
        // Encode the entire message properly
        let encodedMessage = encodeURIComponent(rawMessage);
        
        // Generate WhatsApp link
        whatsappLink = `https://wa.me/8801309099327?text=${encodedMessage}`;
        skypeLink = `skype:live:.cid.267df40789da45e3?chat&message=${encodedMessage}`;
        document.getElementById('popupModal').style.display = 'block';
        
        
    }
});
// WhatsApp Button click event
document.getElementById('whatsappBtn').addEventListener('click', () => {
    window.location = whatsappLink; // Opens WhatsApp with the message
});

// Skype Button click event
document.getElementById('skypeBtn').addEventListener('click', () => {
   
    window.location = skypeLink; // Opens Skype with the message
});


// social site redirection
document.getElementById('linkedin-logo').addEventListener('click',()=>{
    window.location='https://www.linkedin.com/in/suvoislam123/';
});
document.getElementById('github-logo').addEventListener('click',()=>{
    window.location='https://github.com/suvoislam123';
});
document.getElementById('facebook-logo').addEventListener('click',()=>{
    window.location='https://www.facebook.com/suvoislam123';
});
// social site redirection


// bolg starts
function closePopup() {
    document.getElementById("blog-popup").style.display = "none";
}

document.getElementById('b1').addEventListener('click',()=>{
    document.getElementById('blog-main-content').innerHTML=`<h2>Fintech Market in Bangladesh</h2>
            <p>Bangladesh’s fintech sector is experiencing rapid growth, driven by increasing smartphone penetration and a rising demand for digital financial services. The country’s digital payment ecosystem has expanded significantly with the rise of mobile financial services (MFS) like bKash, Nagad, Rocket, and MYCash, which is a product of Mercantile Bank. These platforms have revolutionized transactions, allowing millions of unbanked individuals to access financial services.</p>
            <p>The government and regulatory authorities, such as Bangladesh Bank, have been actively promoting digital finance by implementing supportive policies. The launch of the interoperable digital transaction platform (IDTP) is expected to further streamline digital payments and enhance financial inclusion.</p>
            <p>Despite its progress, the fintech industry in Bangladesh faces challenges, including cybersecurity risks, regulatory hurdles, and limited financial literacy among rural populations. Addressing these issues through enhanced regulations, education, and innovation will be crucial for the sector’s sustainable growth.</p>
            <p>The increasing adoption of fintech solutions in Bangladesh is also transforming the traditional banking sector. Banks are now integrating fintech solutions such as digital wallets, mobile banking apps, and automated payment gateways. The rise of digital lending platforms is helping small businesses and individuals gain access to credit, bypassing traditional financial institutions.</p>
            <p>One of the key drivers of fintech adoption in Bangladesh is the expansion of e-commerce. Digital payments have become an integral part of online shopping, with consumers relying on MFS and debit/credit cards for transactions. The introduction of QR code-based payments and contactless transactions is further streamlining the digital payment experience.</p>
            <p>Remittance is another critical area where fintech is making a difference. With millions of Bangladeshi expatriates sending money home, digital remittance services have made cross-border transactions faster, more affordable, and more accessible. Fintech companies are partnering with international money transfer operators to facilitate seamless fund transfers.</p>
            <p>The regulatory framework for fintech in Bangladesh is evolving. Bangladesh Bank has introduced guidelines for digital financial services, ensuring transparency and security for consumers. However, more needs to be done to foster innovation while maintaining regulatory compliance. Striking a balance between regulation and innovation will be crucial in attracting more investment into the fintech sector.</p>
            <p>Cybersecurity remains a major concern for the fintech industry. As digital transactions increase, so do the risks associated with fraud, data breaches, and hacking attempts. Fintech companies are investing heavily in security measures such as biometric authentication, encryption, and AI-driven fraud detection to enhance user trust.</p>
            <p>Financial literacy is another challenge that needs to be addressed. Many people, especially in rural areas, are still unfamiliar with digital financial services. Educational campaigns and awareness programs are essential to ensure that all citizens can safely and confidently use fintech solutions.</p>
            <p>Looking ahead, the future of fintech in Bangladesh is promising. Emerging technologies such as artificial intelligence, blockchain, and big data analytics are expected to reshape the financial landscape. AI-powered chatbots, robo-advisors, and predictive analytics will provide personalized financial services, enhancing user experience.</p>
            <p>Bangladesh’s fintech startups are gaining recognition on a global scale. Local companies are attracting investment from international venture capital firms, signaling confidence in the country’s fintech potential. Collaborations between startups and traditional financial institutions will likely accelerate innovation and expand fintech adoption.</p>
            <p>With the growing emphasis on financial inclusion, Bangladesh has the opportunity to become a fintech hub in South Asia. By leveraging technology, fostering collaboration, and ensuring a conducive regulatory environment, the country can unlock new economic opportunities and empower millions through digital financial services.</p>`;
            document.getElementById("blog-popup").style.display = "flex";
})

document.getElementById('b2').addEventListener('click',()=>{
    document.getElementById('blog-main-content').innerHTML=`   <h2>The CSE Graduate Disaster in Bangladesh</h2>
            <p>Bangladesh is experiencing a crisis in the field of Computer Science and Engineering (CSE) education. Thousands of graduates with exceptionally high CGPAs are struggling to secure jobs in the software industry. The primary reason? A severe lack of practical learning and industry-ready skills. This issue is exacerbated by many private universities that hand out high CGPAs without properly evaluating students' capabilities, creating a disastrous situation for both job seekers and employers.</p>
            <h3>The Problem with CSE Education in Bangladesh</h3>
            <p>Many universities in Bangladesh, especially private institutions, focus more on theoretical knowledge than hands-on experience. Students often memorize algorithms and coding theories but lack real-world problem-solving skills. Additionally, outdated curricula, inefficient teaching methods, and a lack of proper industry collaboration contribute to graduates being unprepared for actual software engineering jobs.</p>
            <p>Several private universities are notorious for inflating CGPAs, making it appear as though their students are excelling. In reality, these graduates often lack the ability to write efficient code, debug software, or develop real applications. As a result, when they enter the job market, they struggle to compete with candidates who have practical experience, regardless of their CGPA.</p>
            <h3>The Job Market Reality</h3>
            <p>Software companies in Bangladesh and abroad prioritize practical skills over academic scores. Employers often complain that CSE graduates lack fundamental programming knowledge, problem-solving abilities, and hands-on experience with modern software development tools. Many hiring managers now look beyond CGPA and focus on a candidate’s portfolio, real-world projects, and problem-solving capabilities.</p>
            <h3>How to Become a Skilled Software Engineer Without Relying on CGPA</h3>
            <p>For students who truly want to succeed in the tech industry, CGPA alone will not secure a job. Here’s what aspiring software engineers should do:</p>
            <ul>
                <li><strong>Focus on Practical Learning:</strong> Work on real projects, contribute to open-source platforms, and develop applications to strengthen coding skills.</li>
                <li><strong>Master Data Structures and Algorithms:</strong> Participate in coding competitions and practice problem-solving on platforms like LeetCode, Codeforces, and HackerRank.</li>
                <li><strong>Build a Strong Portfolio:</strong> Employers prefer candidates who can showcase practical work through GitHub repositories and personal projects.</li>
                <li><strong>Internships and Freelancing:</strong> Gaining real-world experience through internships, freelance projects, and open-source contributions is crucial for career growth.</li>
                <li><strong>Networking and Learning from Industry Experts:</strong> Engaging with tech communities, attending hackathons, and learning from experienced professionals can open up job opportunities.</li>
                <li><strong>Stay Updated with Industry Trends:</strong> Software development is constantly evolving. Keeping up with new technologies, frameworks, and methodologies is essential.</li>
            </ul>
            <p>By following these strategies, CSE students in Bangladesh can overcome the limitations of their academic programs and become job-ready professionals.</p>`;
            document.getElementById("blog-popup").style.display = "flex";
})

document.getElementById('b3').addEventListener('click',()=>{
    document.getElementById('blog-main-content').innerHTML=`<h2>The Importance of Being a Good Person in the Corporate Environment</h2>
            <p>In today’s corporate world, being a good person is more than just a moral choice—it is a crucial factor in professional success and workplace harmony. Employees and leaders who demonstrate integrity, respect, and empathy foster a positive work environment, build strong relationships, and gain the trust of their colleagues. Ethical behavior and kindness in the corporate sphere contribute to long-term career growth and a company’s overall success.</p>
            <h3>Building Strong Workplace Relationships</h3>
            <p>In a corporate setting, teamwork is essential. Employees who treat their colleagues with kindness and respect create a collaborative atmosphere where ideas are freely shared and innovation thrives. Good interpersonal relationships lead to increased productivity, as employees feel valued and motivated to contribute effectively to their teams.</p>
            <h3>The Role of Ethics and Integrity</h3>
            <p>Integrity is a fundamental pillar of success in the corporate world. Professionals who uphold ethical standards earn the trust of their peers, supervisors, and clients. Honesty in communication, transparency in decision-making, and accountability for one’s actions strengthen a company’s reputation and create a trustworthy business environment.</p>
            <h3>Enhancing Leadership Qualities</h3>
            <p>Great leaders are not only knowledgeable and skilled but also compassionate and fair. A good leader listens to their team, supports their growth, and ensures that employees feel valued. Leaders who prioritize ethical leadership foster loyalty and drive better results, as employees are more likely to be engaged and dedicated to their work.</p>
            <h3>Reducing Workplace Conflicts</h3>
            <p>Conflicts in the workplace can arise due to misunderstandings, competition, or misaligned goals. However, individuals who practice patience, empathy, and open communication can resolve disputes effectively. A workplace that encourages kindness and professionalism experiences fewer conflicts and maintains a healthy, productive environment.</p>
            <h3>Long-Term Career Growth</h3>
            <p>Being a good person in a corporate setting not only benefits the organization but also enhances an individual’s career prospects. Employees with strong ethical values and positive attitudes are more likely to be promoted, receive mentorship opportunities, and gain the trust of senior management. Networking opportunities also increase when professionals are known for their integrity and respect toward others.</p>
            <h3>Conclusion</h3>
            <p>Success in the corporate world is not just about skills and technical expertise—it is also about how one interacts with others. By maintaining ethical behavior, treating colleagues with respect, and promoting a positive work culture, professionals can ensure both personal and organizational growth. In an era where professionalism and integrity define long-term success, being a good person in the workplace is more important than ever.</p>`;
            document.getElementById("blog-popup").style.display = "flex";
})
// blog ends
