import React from 'react';
import Logo from '/Logo.png';
import { AiFillGoogleCircle, AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  const iconMap = {
    AiFillGoogleCircle,
    AiFillInstagram,
    AiFillTwitterCircle,
    AiFillLinkedin
  };

  const socialData = [
    {
      platform: "Google",
      url: "https://www.google.com",
      icon: "AiFillGoogleCircle"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com",
      icon: "AiFillInstagram"
    },
    {
      platform: "Twitter",
      url: "https://www.twitter.com",
      icon: "AiFillTwitterCircle"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: "AiFillLinkedin"
    }
  ];

  let footerData = [
    {
      title: "Product",
      links: ["Landingpages", "Pricing", "Benefits", "Features"]
    },
    {
      title: "Company",
      links: ["About", "Privacy Policy", "Terms & Conditions", "Partners", "Contact"]
    },
    {
      title: "Resources",
      links: ["Guides and resources", "Blog", "Tools", "Support"]
    },
    {
      title: "Get Latest Updates",
      links: "Subscribe to our newsletter and get many interesting things every week"
    }
  ];

  // Preprocess footerData to ensure links is always an array
  footerData = footerData.map(item => ({
    ...item,
    links: typeof item.links === 'string' ? [item.links] : item.links
  }));

  return (
    <div className='bg-[#F7F7FC]'>
      <footer className="bg-[#F7F7FC] max-w-[1410px] max-lg:max-w-3xl mx-auto py-12 px-12 font-sans tracking-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
          <div className="max-xl:col-span-full xl:col-span-2">
            <div className="max-xl:max-w-2xl">
              <img src={Logo} alt="Logo" />
              <p className="text-[#645E76] text-sm w-[263px] py-7">Build a modern and creative website with Innovate.</p>
            </div>
            {socialData && socialData.length > 0 && (
              <ul className="flex items-center mt-12 space-x-4">
                {socialData.map(({ platform, url, icon }) => {
                  const IconComponent = iconMap[icon];
                  return (
                    <li className="bg-[#EEEEEE] h-10 w-10 rounded-full flex items-center justify-center shrink-0" key={platform}>
                      <a className='text-[#645E76] p-8' href={url}>
                        <IconComponent size={32} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {footerData && footerData.length > 0 && (
            footerData.map(({ title, links }) => (
              <div className="max-xl:col-span-1 xl:col-span-1" key={title}>
                <h3 className="text-[#645E76] font-semibold mb-6">{title}</h3>
                <ul>
                  {links.map((link) => (
                    <li className="text-[#645E76] text-sm mt-2" key={link}>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
        <hr className='my-8 h-2' />
        <p className="text-sm text-gray-[#645E76] mt-8">© 2024 Innovate - All Right Reserved</p>
      </footer>
    </div>
  );
}
