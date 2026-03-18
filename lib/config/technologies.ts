export interface Technology {
  name: string;
  logo: string;
}

export interface TechnologyGroups {
  software: Technology[];
  payments: Technology[];
  design: Technology[];
  infrastructure: Technology[];
  motion: Technology[];
  productivity: Technology[];
}

export const TECHNOLOGIES: TechnologyGroups = {
  software: [
    { name: "Next.js", logo: "/logos/technologies/nextjs.svg" },
    { name: "React", logo: "/logos/technologies/react.png" },
    { name: "Node.js", logo: "/logos/technologies/nodejs.png" },
    { name: "MongoDB", logo: "/logos/technologies/mongodb.png" },
    { name: "PostgreSQL", logo: "/logos/technologies/postgresql.png" },
    { name: "Docker", logo: "/logos/technologies/docker.png" },
    { name: "AWS", logo: "/logos/technologies/aws.png" },
    { name: "Tailwind CSS", logo: "/logos/technologies/tailwindcss.png" },
    { name: "Webflow", logo: "/logos/technologies/webflow.png" },
    { name: "Framer", logo: "/logos/technologies/framer.png" }
  ],

  payments: [
    { name: "M-Pesa", logo: "/logos/technologies/mpesa.png" },
    { name: "Stripe", logo: "/logos/technologies/stripe.png" },
    { name: "PayPal", logo: "/logos/technologies/paypal.png" }
  ],

  design: [
    { name: "Adobe Photoshop", logo: "/logos/technologies/photoshop.png" },
    { name: "Adobe Illustrator", logo: "/logos/technologies/illustrator.png" },
    { name: "Canva", logo: "/logos/technologies/canva.png" },
    { name: "Adobe Acrobat", logo: "/logos/technologies/acrobat.png" },
    { name: "Figma", logo: "/logos/technologies/figma.png" }
  ],

  infrastructure: [
    { name: "Linux", logo: "/logos/technologies/linux.png" },
    { name: "Windows Server", logo: "/logos/technologies/windows-server.png" },
    { name: "cPanel", logo: "/logos/technologies/cpanel.png" },
    { name: "WHM", logo: "/logos/technologies/whm.svg" },
    { name: "Apache", logo: "/logos/technologies/apache.png" },
    { name: "MySQL", logo: "/logos/technologies/mysql.png" },
    { name: "DNS", logo: "/logos/technologies/dns.png" }
  ],

  motion: [
    { name: "After Effects", logo: "/logos/technologies/after-effects.png" },
    { name: "GSAP", logo: "/logos/technologies/gsap.png" },
    { name: "Lottie", logo: "/logos/technologies/lottie.png" }
  ],

  productivity: [
  ]
};