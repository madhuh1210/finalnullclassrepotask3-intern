const translations = {
  en: {
    heading: "Welcome to Our Website",
    content: `Thank you for visiting our platform.
We aim to bring innovation closer to everyone.
Our services are designed to empower users globally.
Explore the features and stay connected.
Have a great experience ahead!`
  },
  fr: {
    heading: "Bienvenue sur notre site Web",
    content: `Merci de visiter notre plateforme.
Nous visons à rapprocher l'innovation de tous.
Nos services sont conçus pour autonomiser les utilisateurs du monde entier.
Explorez les fonctionnalités et restez connecté.
Passez une excellente expérience !`
  },
  es: {
    heading: "Bienvenido a nuestro sitio web",
    content: `Gracias por visitar nuestra plataforma.
Nuestro objetivo es acercar la innovación a todos.
Nuestros servicios están diseñados para empoderar a los usuarios a nivel mundial.
Explora las funciones y mantente conectado.
¡Que tengas una gran experiencia!`
  },
  hi: {
    heading: "हमारी वेबसाइट पर आपका स्वागत है",
    content: `हमारे प्लेटफ़ॉर्म पर आने के लिए धन्यवाद।
हम सबके लिए नवाचार को करीब लाने का प्रयास करते हैं।
हमारी सेवाएं दुनिया भर के उपयोगकर्ताओं को सशक्त बनाने के लिए हैं।
फीचर्स को एक्सप्लोर करें और जुड़े रहें।
आपका अनुभव शानदार हो!`
  },
  pt: {
    heading: "Bem-vindo ao nosso site",
    content: `Obrigado por visitar nossa plataforma.
Queremos trazer inovação para todos.
Nossos serviços são feitos para empoderar usuários no mundo inteiro.
Explore os recursos e mantenha-se conectado.
Tenha uma ótima experiência!`
  },
  zh: {
    heading: "欢迎来到我们的网站",
    content: `感谢您访问我们的平台。
我们致力于将创新带给每一个人。
我们的服务旨在赋能全球用户。
探索功能并保持联系。
祝您体验愉快！`
  }
};

let selectedLang = "";
let generatedOTP = "";

document.getElementById("language").addEventListener("change", function () {
  selectedLang = this.value;

  if (selectedLang) {
    document.getElementById("contactDiv").classList.remove("hidden");
    const label = selectedLang === "fr" ? "Enter your email address:" : "Enter your mobile number:";
    document.getElementById("askContact").textContent = label;
    document.getElementById("contactInput").placeholder = label;
  } else {
    document.getElementById("contactDiv").classList.add("hidden");
  }

  document.getElementById("otpDiv").classList.add("hidden");
  document.getElementById("contentDiv").classList.add("hidden");
});

function generateOTP() {
  const contact = document.getElementById("contactInput").value.trim();
  if (!contact) {
    alert("Please enter your " + (selectedLang === "fr" ? "email address." : "mobile number."));
    return;
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  // Show toast with OTP
  showToast(`OTP sent to your ${selectedLang === "fr" ? "email" : "mobile"}: ${generatedOTP}`);

  // Show OTP input
  document.getElementById("otpDiv").classList.remove("hidden");
}

function verifyOTP() {
  const enteredOTP = document.getElementById("otpInput").value.trim();
  if (enteredOTP === generatedOTP) {
    const trans = translations[selectedLang];
    document.getElementById("heading").textContent = trans.heading;
    document.getElementById("translatedContent").value = trans.content;
    document.getElementById("contentDiv").classList.remove("hidden");
  } else {
    alert("Invalid OTP. Try again.");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

