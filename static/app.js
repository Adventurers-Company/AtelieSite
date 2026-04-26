// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to sections and cards
document.querySelectorAll('.section, .product-card, .price-card, .tile, article, blockquote').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Parallax effect on hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < 800) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = `${1 - scrolled / 800}`;
    }
});

// WhatsApp form submission
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const button = form.querySelector("button");
        const originalText = button.textContent;
        const data = new FormData(form);
        const name = data.get("nome") || "";
        const whatsapp = data.get("whatsapp") || "";
        const service = data.get("servico") || "";
        const details = data.get("detalhes") || "";
        const phone = (form.dataset.whatsapp || "").replace(/\D/g, "");
        const isDemo = form.dataset.demo === "true";

        const messageLines = [
            "🧵 Ola! Gostaria de um orcamento.",
            `👤 Nome: ${name}`,
            `📱 WhatsApp: ${whatsapp}`,
            `✨ Servico: ${service}`,
            `📝 Detalhes: ${details}`,
        ];

        if (isDemo) {
            messageLines.push("📌 Demonstracao de portfolio.");
        }

        const message = encodeURIComponent(messageLines.join("\n"));
        let url;
        if (phone) {
            url = `https://wa.me/${phone}?text=${message}`;
        } else {
            const mailtoBody = encodeURIComponent(messageLines.join("\n"));
            url = `mailto:contato@example.com?subject=${encodeURIComponent('Pedido de orçamento')}&body=${mailtoBody}`;
        }

        button.textContent = "Abrindo contato...";
        button.disabled = true;
        window.open(url, "_blank", "noopener,noreferrer");

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            form.reset();
        }, 2000);
    });
}

// Form input focus styling
const inputs = document.querySelectorAll(".contact-form input, .contact-form select, .contact-form textarea");
inputs.forEach(input => {
    input.addEventListener("focus", function () {
        this.parentElement.style.opacity = "1";
    });
});

// Product size selection
document.querySelectorAll('.product-sizes span').forEach(size => {
    size.addEventListener('click', function () {
        // Remove active from siblings
        this.parentElement.querySelectorAll('span').forEach(s => s.classList.remove('active'));
        // Add active to clicked
        this.classList.add('active');
    });
});
