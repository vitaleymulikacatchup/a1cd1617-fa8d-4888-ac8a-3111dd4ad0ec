"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Calendar, ChefHat, Flame, Heart, Instagram, Facebook, Quote, Sparkles, Star, Wheat, Wine } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Specials", id: "specials" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Nonna's Kitchen"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Italian Flavors"
          description="Experience the warmth of Italy with our traditional recipes, fresh ingredients, and family atmosphere. From handmade pasta to wood-fired pizzas, every dish tells a story."
          tag="Benvenuti"
          tagIcon={Heart}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Make Reservation", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/g7505777a8cbf23a13e961e0631a5fc9c3ed9595fbe894750eb8b177307b2a69181778bcc42ff8ca5bc246e68fb7f58d335bc0d4fccca669901503ab315339031_1280.jpg"
          imageAlt="Elegant Italian restaurant interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Nonna's Kitchen, we bring generations of Italian culinary tradition to your table. Founded by the Rossi family in 1985, our restaurant has been serving authentic Italian cuisine made with love, passion, and the finest imported ingredients from Italy."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Nonna's Kitchen"
          description="Discover what makes our Italian dining experience truly special"
          tag="Our Specialties"
          tagIcon={Star}
          features={[
            {
              title: "Fresh Handmade Pasta",
              description: "Our pasta is made fresh daily using traditional Italian techniques and imported semolina flour",
              icon: Wheat,
              button: { text: "See Menu", href: "menu" }
            },
            {
              title: "Wood-Fired Pizza Oven",
              description: "Authentic Neapolitan pizzas cooked at 900°F in our imported Italian wood-fired oven",
              icon: Flame,
              button: { text: "Pizza Menu", href: "menu" }
            },
            {
              title: "Family Recipes",
              description: "Time-honored recipes passed down through four generations of Italian grandmothers",
              icon: Heart,
              button: { text: "Our Story", href: "about" }
            },
            {
              title: "Wine Selection",
              description: "Carefully curated collection of Italian wines from renowned regions like Tuscany and Piedmont",
              icon: Wine,
              button: { text: "Wine List", href: "menu" }
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Signature Dishes"
          description="Our most beloved Italian classics, crafted with authentic techniques and premium ingredients"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              name: "Spaghetti Carbonara",
              price: "$24",
              imageSrc: "https://pixabay.com/get/gd491338119fc2587042d234f5c806b3d2c3259e0ff7c2d4f7e02d47962a8b26dd99ca7611bfd2a2b1334dd58751a4049849089f709f8916179bacb9dd79ba667_1280.jpg",
              imageAlt: "Creamy spaghetti carbonara with pancetta"
            },
            {
              id: "2",
              name: "Pizza Margherita",
              price: "$22",
              imageSrc: "https://pixabay.com/get/g525a994266250257c95b33448918b2f20dd7c67319dbba75a150d8e346a1b846042b56858bd5f1a758c0332ab89a34aba6782b573a28541047bf760e96b532d2_1280.jpg",
              imageAlt: "Classic margherita pizza with fresh basil"
            },
            {
              id: "3",
              name: "Risotto ai Funghi",
              price: "$26",
              imageSrc: "https://pixabay.com/get/g3c1c712b6873d0db332f50a6c7fd54795fd798d99f622e92ee4d1e73d7454991d378d0c0d16b23bacb8e018bcac454d037ceabe5894f5c7c9fa7ce21c9f64384_1280.jpg",
              imageAlt: "Creamy mushroom risotto with parmesan"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Dining Experiences"
          description="Choose the perfect dining experience for any occasion"
          tag="Special Offers"
          tagIcon={Sparkles}
          plans={[
            {
              id: "lunch",
              badge: "Popular",
              badgeIcon: Star,
              price: "$35",
              subtitle: "Perfect for a midday escape",
              features: [
                "Choice of appetizer",
                "Main course selection",
                "Fresh bread & olive oil",
                "Coffee or tea"
              ]
            },
            {
              id: "dinner",
              badge: "Recommended",
              badgeIcon: Heart,
              price: "$65",
              subtitle: "Complete Italian dining experience",
              features: [
                "Antipasti selection",
                "Three-course meal",
                "Wine pairing included",
                "Limoncello digestif",
                "Live Italian music"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Real experiences from our valued customers"
          tag="Reviews"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Maria Johnson",
              role: "Food Blogger",
              testimonial: "The most authentic Italian experience I've had outside of Italy. The carbonara was perfection and the service made us feel like family.",
              imageSrc: "https://pixabay.com/get/ga3abd92ee280c57d213a738c941f85a787c97585dcea080d89690e51814aadaaa0515bbbb255ff996af380616bf444d773e9133779d4360a1bbfcc0f44fdbc81_1280.jpg",
              imageAlt: "Happy customer Maria Johnson"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Local Resident",
              testimonial: "Nonna's Kitchen has been our go-to restaurant for special occasions for years. The quality never disappoints and the atmosphere is always warm.",
              imageSrc: "https://pixabay.com/get/g08f6bcb3e3fd3c1e02d1aeeb58555b2431dcfb3472d8fd44821fa1af44a25cfb69f9e8ed8a28c4e957f0d4ece746e41b14b33c49208aa6130bca3329583bcea4_1280.jpg",
              imageAlt: "Satisfied customer David Chen"
            },
            {
              id: "3",
              name: "Sarah & Tom Williams",
              role: "Anniversary Diners",
              testimonial: "We celebrated our 10th anniversary here and it was magical. The tiramisu was divine and the staff made our evening unforgettable.",
              imageSrc: "https://pixabay.com/get/g271285ad8bed2c963afdac8d0d98d0799b24eadbdaa707d7425f51af2d4f396065d9909720d18c9c48a381c7567a91c89be3fd8d89db22cdfb8ed44dca9b3e4b_1280.jpg",
              imageAlt: "Happy couple Sarah and Tom Williams"
            },
            {
              id: "4",
              name: "The Martinez Family",
              role: "Regular Customers",
              testimonial: "This is our family's favorite restaurant. The kids love the pizza and we adults appreciate the authentic flavors and excellent wine selection.",
              imageSrc: "https://pixabay.com/get/g683e3cb6f5a2cdd027ce4fa63138b7ab58ae063befa51c413017b77c09a6098a8a6e38b18c27cb9211db8b4565bdd1c28fa90ca27698952f135feb91923169a9_1280.jpg",
              imageAlt: "Martinez family dining together"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          tagIcon={Calendar}
          title="Reserve Your Table"
          description="Join us for an unforgettable Italian dining experience. Book your table today and let us take care of the rest."
          inputPlaceholder="Your email for confirmation"
          buttonText="Reserve Now"
          termsText="By reserving, you agree to our cancellation policy. We'll send confirmation details to your email."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Nonna's Kitchen"
          copyrightText="© 2025 Nonna's Kitchen. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Antipasti", href: "menu" },
                { label: "Pasta", href: "menu" },
                { label: "Pizza", href: "menu" },
                { label: "Wine", href: "menu" }
              ]
            },
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Events", href: "contact" },
                { label: "Private Dining", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Catering", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/nonnaskitchen",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/nonnaskitchen",
              ariaLabel: "Like us on Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}