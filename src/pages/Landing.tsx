// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Code, 
  Globe, 
  Users, 
  User, 
  Play, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Mail,
  Calendar,
  Target,
  Lightbulb,
  Rocket,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, H3, P, Div, Footer, Input } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentDemo, setCurrentDemo] = useState('');
  const [typingText, setTypingText] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);
  const [email, setEmail] = useState('');
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const demoTexts = [
      "I need a restaurant menu app with online ordering",
      "Create a doctor appointment booking system",
      "Build a legal document management platform",
      "Make a retail inventory tracking app"
    ];
    
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    
    const typeWriter = () => {
      const fullText = demoTexts[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }
      
      setTypingText(currentText);
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % demoTexts.length;
        typeSpeed = 500;
      }
      
      setTimeout(typeWriter, typeSpeed);
    };
    
    if (mounted) {
      typeWriter();
    }
  }, [mounted]);

  const problems = [
    {
      title: "Small Business Owners",
      pain: "Need custom apps but can't afford $50K+ development costs",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Service Professionals", 
      pain: "Struggle with 6-12 month development timelines",
      image: "https://images.pexels.com/photos/4021258/pexels-photo-4021258.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Entrepreneurs",
      pain: "Technical complexity blocks their business ideas",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const solutionSteps = [
    {
      step: 1,
      title: "Tell us what you need",
      description: "Simply describe your business app in plain English",
      icon: <User className="w-8 h-8 text-blue-500" />
    },
    {
      step: 2,
      title: "AI selects best tools",
      description: "Our AI chooses the perfect templates and plugins",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />
    },
    {
      step: 3,
      title: "App builds automatically",
      description: "Watch your app come to life in real-time",
      icon: <Settings className="w-8 h-8 text-green-500" />
    },
    {
      step: 4,
      title: "Your app is live",
      description: "Deploy instantly with hosting, database, and domain included",
      icon: <Rocket className="w-8 h-8 text-purple-500" />
    }
  ];

  const features = [
    {
      title: "Simple Creation",
      description: "Type what you need, get a working app",
      demo: "Try typing: 'Restaurant ordering system'",
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Smart Updates",
      description: "Click any element to request changes instantly",
      demo: "Click, describe, update - it's that simple",
      icon: <Code className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Everything Included",
      description: "Database, hosting, domains, and support included",
      demo: "No hidden costs or technical setup required",
      icon: <Globe className="w-8 h-8 text-green-500" />
    }
  ];

  const components = [
    {
      name: "Templates",
      count: "500+",
      description: "Pre-built app templates for every industry"
    },
    {
      name: "Plugins", 
      count: "200+",
      description: "Integrations and functionality modules"
    },
    {
      name: "Features",
      count: "1000+",
      description: "Ready-to-use app features and components"
    },
    {
      name: "Integrations",
      count: "100+",
      description: "Connect with popular business tools"
    }
  ];

  const industries = [
    {
      name: "Restaurant",
      useCase: "Menu management, online ordering, table reservations",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      marketSize: "2.3M businesses"
    },
    {
      name: "Medical",
      useCase: "Appointment booking, patient records, telehealth",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400",
      marketSize: "800K practices"
    },
    {
      name: "Legal",
      useCase: "Case management, document storage, client portal",
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400",
      marketSize: "450K firms"
    },
    {
      name: "Retail",
      useCase: "Inventory tracking, POS systems, customer management",
      image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=400",
      marketSize: "1.8M stores"
    },
    {
      name: "Services",
      useCase: "Booking systems, customer portals, payment processing",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      marketSize: "3.2M businesses"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      features: ["1 App", "Basic Templates", "Email Support", "5GB Storage"],
      popular: false
    },
    {
      name: "Professional", 
      price: isAnnual ? 79 : 99,
      features: ["5 Apps", "All Templates", "Priority Support", "50GB Storage", "Custom Domain"],
      popular: true
    },
    {
      name: "Enterprise",
      price: isAnnual ? 199 : 249,
      features: ["Unlimited Apps", "White Label", "24/7 Support", "500GB Storage", "API Access"],
      popular: false
    }
  ];

  const metrics = [
    { label: "Apps Created", value: "50,000+", growth: "+300%" },
    { label: "Time Saved", value: "2M hours", growth: "+250%" },
    { label: "Customer Satisfaction", value: "98%", growth: "+15%" },
    { label: "Monthly Revenue", value: "$2.3M", growth: "+180%" }
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder", 
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#"
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#"
    }
  ];

  return (
    <Container componentId="hero-section">
      <Div devId="main-wrapper" devName="Landing Wrapper" devDescription="Main landing page wrapper" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        {/* Header */}
        <Header 
          devId="main-header" 
          devName="Landing Header" 
          devDescription="Main header with navigation and progress indicator"
          className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10"
        >
          <Nav devId="nav-dashboard-button" devName="Landing Navigation" devDescription="Main navigation bar" className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Div devId="nav-login-button" devName="Brand Section" devDescription="Brand logo and name section" className="flex items-center space-x-3">
              <Div devId="nav-register-button" devName="Brand Logo" devDescription="Geenius Interactive brand logo" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </Div>
              <Span 
                devId="brand-name" 
                devName="Brand Name" 
                devDescription="Geenius Interactive brand name"
                className="text-2xl font-bold text-white"
              >
                Geenius Interactive
              </Span>
            </Div>
            <Div devId="hero-title" devName="Navigation Buttons" devDescription="Navigation buttons section" className="flex items-center space-x-4">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-description"
                    devName="Dashboard Button"
                    devDescription="Navigation button to dashboard"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
                  >
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login">
                    <Button 
                      devId="hero-cta-buttons"
                      devName="Login Button"
                      devDescription="Navigation login button"
                      variant="ghost" 
                      className="text-gray-300 hover:text-white"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button 
                      devId="features-section"
                      devName="Register Button"
                      devDescription="Navigation register button"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </Div>
          </Nav>
        </Header>

        {/* Hero Section */}
        <Container componentId="feature-card-0">
          <Section devId="feature-card-1" devName="Hero Section Content" devDescription="Main hero section content" className="pt-32 pb-20 px-4">
            <Div devId="feature-card-2" devName="Hero Container" devDescription="Hero section container" className="container mx-auto text-center">
              <H1 
                devId="main-footer" 
                devName="Hero Title" 
                devDescription="Main hero headline"
                className="text-6xl md:text-8xl font-bold text-white mb-6"
              >
                From Idea to Live App
                <Span devId="noID" devName="Hero Highlight" devDescription="Highlighted text in hero title" className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {' '}in Minutes
                </Span>
              </H1>
              <P 
                devId="noID" 
                devName="Hero Subtitle" 
                devDescription="Hero subheadline description"
                className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
              >
                Your assistant can now build business apps just by describing what you need - No Developer Needed
              </P>
              
              {/* Interactive Demo Input */}
              <Div 
                devId="noID" 
                devName="Demo Input Container" 
                devDescription="Interactive demo input area"
                className="max-w-2xl mx-auto mb-12"
              >
                <Div devId="noID" devName="Demo Input Wrapper" devDescription="Demo input wrapper with button" className="relative">
                  <Input
                    devId="noID"
                    devName="Demo Input Field"
                    devDescription="Live demo input box"
                    placeholder={typingText}
                    value={currentDemo}
                    onChange={(e) => setCurrentDemo(e.target.value)}
                    className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400"
                  />
                  <Button 
                    devId="noID"
                    devName="Try Demo Button"
                    devDescription="Button to try the demo"
                    className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Try It
                  </Button>
                </Div>
              </Div>

              <Button 
                devId="noID"
                devName="Hero CTA Button"
                devDescription="Main hero call-to-action button"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-xl text-xl font-semibold transform hover:scale-105 transition-all"
              >
                See How It Works
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Div>
          </Section>
        </Container>

        {/* Problem Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Problem Section Content" devDescription="Problem section content" className="py-20 px-4 bg-black/20">
            <Div devId="noID" devName="Problem Container" devDescription="Problem section container" className="container mx-auto">
              <H2 
                devId="noID" 
                devName="Problem Section Title" 
                devDescription="Problem section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                The Problem
              </H2>
              <Div devId="noID" devName="Problem Cards Grid" devDescription="Grid of problem cards" className="grid md:grid-cols-3 gap-8">
                {problems.map((problem, index) => (
                  <Card 
                    key={index}
                    devId="noID"
                    devName={`${problem.title} Problem Card`}
                    devDescription={`Problem card for ${problem.title}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-red-500/50 transition-all"
                  >
                    <Div devId="noID" devName={`Problem Image ${index}`} devDescription={`Problem image for ${problem.title}`} className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${problem.image})`}} />
                    <CardContent devId="noID" devName={`Problem Content ${index}`} devDescription={`Problem content for ${problem.title}`} className="p-6">
                      <H3 devId="noID" devName={`Problem Title ${index}`} devDescription={`Problem title for ${problem.title}`} className="text-xl font-semibold text-white mb-3">{problem.title}</H3>
                      <P devId="noID" devName={`Problem Description ${index}`} devDescription={`Problem description for ${problem.title}`} className="text-gray-300">{problem.pain}</P>
                    </CardContent>
                  </Card>
                ))}
              </Div>
              <Div 
                devId="noID" 
                devName="Problem Statistics" 
                devDescription="Problem statistics section"
                className="text-center mt-12"
              >
                <P devId="noID" devName="Problem Stats Intro" devDescription="Introduction to problem statistics" className="text-gray-300 text-lg mb-4">Average custom development costs:</P>
                <Div devId="noID" devName="Problem Stats Grid" devDescription="Grid of problem statistics" className="flex justify-center space-x-8">
                  <Div devId="noID" devName="Average Cost Stat" devDescription="Average cost statistic" className="text-center">
                    <Div devId="noID" devName="Average Cost Value" devDescription="Average cost value" className="text-3xl font-bold text-red-400">$75,000</Div>
                    <Div devId="noID" devName="Average Cost Label" devDescription="Average cost label" className="text-gray-400">Average Cost</Div>
                  </Div>
                  <Div devId="noID" devName="Development Time Stat" devDescription="Development time statistic" className="text-center">
                    <Div devId="noID" devName="Development Time Value" devDescription="Development time value" className="text-3xl font-bold text-red-400">8 months</Div>
                    <Div devId="noID" devName="Development Time Label" devDescription="Development time label" className="text-gray-400">Development Time</Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Solution Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Solution Section Content" devDescription="Solution section content" className="py-20 px-4">
            <Div devId="noID" devName="Solution Container" devDescription="Solution section container" className="container mx-auto">
              <H2 
                devId="noID" 
                devName="Solution Section Title" 
                devDescription="Solution section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                The Solution
              </H2>
              <Div devId="noID" devName="Solution Steps Grid" devDescription="Grid of solution steps" className="grid md:grid-cols-4 gap-8">
                {solutionSteps.map((step, index) => (
                  <Card 
                    key={index}
                    devId="noID"
                    devName={`Solution Step ${step.step}`}
                    devDescription={`Solution step ${step.step}: ${step.title}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all cursor-pointer"
                  >
                    <Div devId="noID" devName={`Solution Step Number ${index}`} devDescription={`Step number for solution step ${step.step}`} className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Span devId="noID" devName={`Solution Step Text ${index}`} devDescription={`Step text for solution step ${step.step}`} className="text-white font-bold text-xl">{step.step}</Span>
                    </Div>
                    <Div devId="noID" devName={`Solution Step Icon ${index}`} devDescription={`Icon for solution step ${step.step}`} className="mb-4">{step.icon}</Div>
                    <H3 devId="noID" devName={`Solution Step Title ${index}`} devDescription={`Title for solution step ${step.step}`} className="text-xl font-semibold text-white mb-3">{step.title}</H3>
                    <P devId="noID" devName={`Solution Step Description ${index}`} devDescription={`Description for solution step ${step.step}`} className="text-gray-300">{step.description}</P>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Core Features Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Features Section Content" devDescription="Features section content" className="py-20 px-4 bg-black/20">
            <Div devId="noID" devName="Features Container" devDescription="Features section container" className="container mx-auto">
              <H2 
                devId="noID" 
                devName="Features Section Title" 
                devDescription="Core features section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                Core Features
              </H2>
              <Div devId="noID" devName="Features Cards Grid" devDescription="Grid of feature cards" className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card 
                    key={index}
                    devId="noID"
                    devName={`${feature.title} Feature Card`}
                    devDescription={`Feature card for ${feature.title}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-500/50 transition-all"
                  >
                    <Div devId="noID" devName={`Feature Icon ${index}`} devDescription={`Icon for feature ${feature.title}`} className="mb-6">{feature.icon}</Div>
                    <H3 devId="noID" devName={`Feature Title ${index}`} devDescription={`Title for feature ${feature.title}`} className="text-2xl font-semibold text-white mb-4">{feature.title}</H3>
                    <P devId="noID" devName={`Feature Description ${index}`} devDescription={`Description for feature ${feature.title}`} className="text-gray-300 mb-6">{feature.description}</P>
                    <Div devId="noID" devName={`Feature Demo ${index}`} devDescription={`Demo text for feature ${feature.title}`} className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                      <P devId="noID" devName={`Feature Demo Text ${index}`} devDescription={`Demo text content for feature ${feature.title}`} className="text-purple-300 text-sm">{feature.demo}</P>
                    </Div>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Platform Components Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Components Section Content" devDescription="Components section content" className="py-20 px-4">
            <Div devId="noID" devName="Components Container" devDescription="Components section container" className="container mx-auto text-center">
              <H2 
                devId="noID" 
                devName="Components Section Title" 
                devDescription="Platform components section title"
                className="text-5xl font-bold text-white mb-16"
              >
                Platform Ecosystem
              </H2>
              <Div devId="noID" devName="Components Cards Grid" devDescription="Grid of component cards" className="grid md:grid-cols-4 gap-8">
                {components.map((component, index) => (
                  <Card 
                    key={index}
                    devId="noID"
                    devName={`${component.name} Component`}
                    devDescription={`Platform component: ${component.name}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all cursor-pointer"
                  >
                    <Div devId="noID" devName={`Component Count ${index}`} devDescription={`Count for component ${component.name}`} className="text-4xl font-bold text-blue-400 mb-2">{component.count}</Div>
                    <H3 devId="noID" devName={`Component Name ${index}`} devDescription={`Name for component ${component.name}`} className="text-xl font-semibold text-white mb-3">{component.name}</H3>
                    <P devId="noID" devName={`Component Description ${index}`} devDescription={`Description for component ${component.name}`} className="text-gray-300">{component.description}</P>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Target Market Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Market Section Content" devDescription="Market section content" className="py-20 px-4 bg-black/20">
            <Div devId="noID" devName="Market Container" devDescription="Market section container" className="container mx-auto">
              <H2 
                devId="noID" 
                devName="Market Section Title" 
                devDescription="Target market section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                Target Market
              </H2>
              <Div devId="noID" devName="Industry Cards Grid" devDescription="Grid of industry cards" className="grid md:grid-cols-5 gap-6">
                {industries.map((industry, index) => (
                  <Card 
                    key={index}
                    devId="noID"
                    devName={`${industry.name} Industry Card`}
                    devDescription={`Industry card for ${industry.name}`}
                    className={`bg-white/5 backdrop-blur-sm border rounded-xl overflow-hidden cursor-pointer transition-all ${
                      selectedIndustry === index ? 'border-purple-500' : 'border-white/10 hover:border-purple-500/50'
                    }`}
                    onClick={() => setSelectedIndustry(index)}
                  >
                    <Div devId="noID" devName={`Industry Image ${index}`} devDescription={`Image for industry ${industry.name}`} className="h-32 bg-cover bg-center" style={{backgroundImage: `url(${industry.image})`}} />
                    <CardContent devId="noID" devName={`Industry Content ${index}`} devDescription={`Content for industry ${industry.name}`} className="p-4">
                      <H3 devId="noID" devName={`Industry Name ${index}`} devDescription={`Name for industry ${industry.name}`} className="text-lg font-semibold text-white mb-2">{industry.name}</H3>
                      <P devId="noID" devName={`Industry Use Case ${index}`} devDescription={`Use case for industry ${industry.name}`} className="text-gray-300 text-sm mb-2">{industry.useCase}</P>
                      <Badge devId="noID" devName={`Industry Market Size ${index}`} devDescription={`Market size for industry ${industry.name}`} className="bg-purple-600 text-white">{industry.marketSize}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Business Model Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Pricing Section Content" devDescription="Pricing section content" className="py-20 px-4">
            <Div devId="noID" devName="Pricing Container" devDescription="Pricing section container" className="container mx-auto">
              <H2 
                devId="noID" 
                devName="Pricing Section Title" 
                devDescription="Business model pricing section title"
                className="text-5xl font-bold text-white text-center mb-8"
              >
                Business Model
              </H2>
              <Div 
                devId="noID" 
                devName="Pricing Toggle Section" 
                devDescription="Monthly/Annual pricing toggle"
                className="flex justify-center mb-12"
              >
                <Div devId="noID" devName="Pricing Toggle Wrapper" devDescription="Wrapper for pricing toggle buttons" className="bg-white/10 rounded-lg p-1 flex">
                  <Button 
                    devId="noID"
                    devName="Monthly Button"
                    devDescription="Monthly pricing button"
                    variant={!isAnnual ? "default" : "ghost"}
                    onClick={() => setIsAnnual(false)}
                    className="px-6 py-2"
                  >
                    Monthly
                  </Button>
                  <Button 
                    devId="noID"
                    devName="Annual Button"
                    devDescription="Annual pricing button"
                    variant={isAnnual ? "default" : "ghost"}
                    onClick={() => setIsAnnual(true)}
                    className="px-6 py-2"
                  >
                    Annual (Save 25%)
                  </Button>
                </Div>
              </Div>
              <Div devId="noID" devName="Pricing Cards Grid" devDescription="Grid of pricing cards" className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <Card 
                    key={index}
                    devId="noID"
                    devName={`${plan.name} Pricing Card`}
                    devDescription={`Pricing card for ${plan.name} plan`}
                    className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                      plan.popular ? 'border-purple-500 ring-2 ring-purple-500/50' : 'border-white/10'
                    }`}
                  >
                    {plan.popular && (
                      <Badge devId="noID" devName={`Pricing Popular Badge ${index}`} devDescription={`Popular badge for ${plan.name} plan`} className="bg-purple-600 text-white mb-4">Most Popular</Badge>
                    )}
                    <H3 devId="noID" devName={`Pricing Plan Name ${index}`} devDescription={`Plan name for ${plan.name}`} className="text-2xl font-semibold text-white mb-4">{plan.name}</H3>
                    <Div devId="noID" devName={`Pricing Plan Price ${index}`} devDescription={`Price section for ${plan.name} plan`} className="mb-6">
                      <Span devId="noID" devName={`Pricing Plan Amount ${index}`} devDescription={`Price amount for ${plan.name} plan`} className="text-4xl font-bold text-white">${plan.price}</Span>
                      <Span devId="noID" devName={`Pricing Plan Period ${index}`} devDescription={`Price period for ${plan.name} plan`} className="text-gray-300">/month</Span>
                    </Div>
                    <Div devId="noID" devName={`Pricing Plan Features ${index}`} devDescription={`Features list for ${plan.name} plan`} className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <Div devId="noID" devName={`Pricing Feature ${index}-${featureIndex}`} devDescription={`Feature ${featureIndex} for ${plan.name} plan`} key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          <Span devId="noID" devName={`Pricing Feature Text ${index}-${featureIndex}`} devDescription={`Feature text ${featureIndex} for ${plan.name} plan`} className="text-gray-300">{feature}</Span>
                        </Div>
                      ))}
                    </Div>
                    <Button 
                      devId="noID"
                      devName={`${plan.name} CTA Button`}
                      devDescription={`CTA button for ${plan.name} plan`}
                      className={`w-full py-3 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Demo Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Demo Section Content" devDescription="Demo section content" className="py-20 px-4 bg-black/20">
            <Div devId="noID" devName="Demo Container" devDescription="Demo section container" className="container mx-auto text-center">
              <H2 
                devId="noID" 
                devName="Demo Title" 
                devDescription="Demo section title"
                className="text-5xl font-bold text-white mb-16"
              >
                Live Demo
              </H2>
              <Div 
                devId="noID" 
                devName="Demo Interface Container" 
                devDescription="Interactive demo interface"
                className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
              >
                <Div devId="noID" devName="Demo Interface Content" devDescription="Demo interface content area" className="bg-black/50 rounded-lg p-6 mb-6">
                  <P devId="noID" devName="Demo Interface Intro" devDescription="Demo interface introduction text" className="text-gray-300 mb-4">Try creating an app:</P>
                  <Div devId="noID" devName="Demo Buttons Grid" devDescription="Grid of demo buttons" className="grid md:grid-cols-3 gap-4">
                    <Button 
                      devId="noID"
                      devName="Restaurant Demo Button"
                      devDescription="Restaurant app demo button"
                      className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg"
                      onClick={() => setCurrentDemo("Restaurant menu and ordering system")}
                    >
                      Restaurant App
                    </Button>
                    <Button 
                      devId="noID"
                      devName="Appointment Demo Button"
                      devDescription="Appointment booking demo button"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg"
                      onClick={() => setCurrentDemo("Doctor appointment booking")}
                    >
                      Booking System
                    </Button>
                    <Button 
                      devId="noID"
                      devName="Contact Demo Button"
                      devDescription="Contact management demo button"
                      className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg"
                      onClick={() => setCurrentDemo("Contact management system")}
                    >
                      Contact Manager
                    </Button>
                  </Div>
                </Div>
                {currentDemo && (
                  <Div devId="noID" devName="Demo Result" devDescription="Demo result display" className="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
                    <P devId="noID" devName="Demo Result Text" devDescription="Demo result text content" className="text-green-300">✓ App created: {currentDemo}</P>
                    <P devId="noID" devName="Demo Result Deploy" devDescription="Demo result deployment message" className="text-gray-300 mt-2">Ready to deploy in 30 seconds!</P>
                  </Div>
                )}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Traction & Metrics Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Metrics Section Content" devDescription="Metrics section content" className="py-20 px-4">
            <Div devId="noID" devName="Metrics Container" devDescription="Metrics section container" className="container mx-auto">
              <H2 
                devId="noID" 
                devName="Metrics Section Title" 
                devDescription="Traction and metrics section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                Traction & Metrics
              </H2>
              <Div devId="noID" devName="Metrics Cards Grid" devDescription="Grid of metric cards" className="grid md:grid-cols-4 gap-8 mb-12">
                {metrics.map((metric, index) => (
                  <Card 
                    key={index}
                    devId="noID"
                    devName={`${metric.label} Metric Card`}
                    devDescription={`Metric card for ${metric.label}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                  >
                    <Div devId="noID" devName={`Metric Value ${index}`} devDescription={`Value for metric ${metric.label}`} className="text-3xl font-bold text-white mb-2">{metric.value}</Div>
                    <Div devId="noID" devName={`Metric Label ${index}`} devDescription={`Label for metric ${metric.label}`} className="text-gray-300 mb-2">{metric.label}</Div>
                    <Badge devId="noID" devName={`Metric Growth ${index}`} devDescription={`Growth badge for metric ${metric.label}`} className="bg-green-600 text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {metric.growth}
                    </Badge>
                  </Card>
                ))}
              </Div>
              <Div 
                devId="noID" 
                devName="Testimonials Section" 
                devDescription="Customer testimonials section"
                className="text-center"
              >
                <H3 devId="noID" devName="Testimonials Title" devDescription="Testimonials section title" className="text-2xl font-semibold text-white mb-8">What Our Customers Say</H3>
                <Div devId="noID" devName="Testimonials Grid" devDescription="Grid of testimonial cards" className="grid md:grid-cols-2 gap-8">
                  <Card devId="noID" devName="Testimonial 1" devDescription="First customer testimonial" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <P devId="noID" devName="Testimonial 1 Text" devDescription="First testimonial text" className="text-gray-300 mb-4">"Geenius saved us $80,000 and 8 months of development time. Our restaurant app was live in 2 days!"</P>
                    <P devId="noID" devName="Testimonial 1 Author" devDescription="First testimonial author" className="text-white font-semibold">- Maria Rodriguez, Restaurant Owner</P>
                  </Card>
                  <Card devId="noID" devName="Testimonial 2" devDescription="Second customer testimonial" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <P devId="noID" devName="Testimonial 2 Text" devDescription="Second testimonial text" className="text-gray-300 mb-4">"The AI understood exactly what we needed. Our patient booking system works perfectly."</P>
                    <P devId="noID" devName="Testimonial 2 Author" devDescription="Second testimonial author" className="text-white font-semibold">- Dr. James Wilson, Medical Practice</P>
                  </Card>
                </Div>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Investment Opportunity Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Investment Section Content" devDescription="Investment section content" className="py-20 px-4 bg-black/20">
            <Div devId="noID" devName="Investment Container" devDescription="Investment section container" className="container mx-auto">
              <H2 
                devId="noID" 
                devName="Investment Section Title" 
                devDescription="Investment opportunity section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                Investment Opportunity
              </H2>
              <Div devId="noID" devName="Investment Content Grid" devDescription="Grid of investment content" className="grid md:grid-cols-2 gap-12">
                <Div devId="noID" devName="Market Opportunity Section" devDescription="Market opportunity section">
                  <H3 devId="noID" devName="Market Opportunity Title" devDescription="Market opportunity title" className="text-3xl font-semibold text-white mb-6">Market Opportunity</H3>
                  <Div devId="noID" devName="Market Opportunity Stats" devDescription="Market opportunity statistics" className="space-y-4">
                    <Div devId="noID" devName="TAM Stat" devDescription="Total addressable market statistic" className="flex justify-between items-center">
                      <Span devId="noID" devName="TAM Label" devDescription="TAM label" className="text-gray-300">TAM (Total Addressable Market)</Span>
                      <Span devId="noID" devName="TAM Value" devDescription="TAM value" className="text-white font-bold">$280B</Span>
                    </Div>
                    <Div devId="noID" devName="SAM Stat" devDescription="Serviceable addressable market statistic" className="flex justify-between items-center">
                      <Span devId="noID" devName="SAM Label" devDescription="SAM label" className="text-gray-300">SAM (Serviceable Addressable Market)</Span>
                      <Span devId="noID" devName="SAM Value" devDescription="SAM value" className="text-white font-bold">$45B</Span>
                    </Div>
                    <Div devId="noID" devName="SOM Stat" devDescription="Serviceable obtainable market statistic" className="flex justify-between items-center">
                      <Span devId="noID" devName="SOM Label" devDescription="SOM label" className="text-gray-300">SOM (Serviceable Obtainable Market)</Span>
                      <Span devId="noID" devName="SOM Value" devDescription="SOM value" className="text-white font-bold">$2.3B</Span>
                    </Div>
                  </Div>
                </Div>
                <Div devId="noID" devName="Use of Funds Section" devDescription="Use of funds section">
                  <H3 devId="noID" devName="Use of Funds Title" devDescription="Use of funds title" className="text-3xl font-semibold text-white mb-6">Use of Funds</H3>
                  <Div devId="noID" devName="Use of Funds Stats" devDescription="Use of funds statistics" className="space-y-4">
                    <Div devId="noID" devName="Product Development Stat" devDescription="Product development funding statistic" className="flex justify-between items-center">
                      <Span devId="noID" devName="Product Development Label" devDescription="Product development label" className="text-gray-300">Product Development</Span>
                      <Span devId="noID" devName="Product Development Value" devDescription="Product development value" className="text-white font-bold">40%</Span>
                    </Div>
                    <Div devId="noID" devName="Marketing Sales Stat" devDescription="Marketing and sales funding statistic" className="flex justify-between items-center">
                      <Span devId="noID" devName="Marketing Sales Label" devDescription="Marketing and sales label" className="text-gray-300">Marketing & Sales</Span>
                      <Span devId="noID" devName="Marketing Sales Value" devDescription="Marketing and sales value" className="text-white font-bold">35%</Span>
                    </Div>
                    <Div devId="noID" devName="Team Expansion Stat" devDescription="Team expansion funding statistic" className="flex justify-between items-center">
                      <Span devId="noID" devName="Team Expansion Label" devDescription="Team expansion label" className="text-gray-300">Team Expansion</Span>
                      <Span devId="noID" devName="Team Expansion Value" devDescription="Team expansion value" className="text-white font-bold">20%</Span>
                    </Div>
                    <Div devId="noID" devName="Operations Stat" devDescription="Operations funding statistic" className="flex justify-between items-center">
                      <Span devId="noID" devName="Operations Label" devDescription="Operations label" className="text-gray-300">Operations</Span>
                      <Span devId="noID" devName="Operations Value" devDescription="Operations value" className="text-white font-bold">5%</Span>
                    </Div>
                  </Div>
                </Div>
              </Div>
              <Div 
                devId="noID" 
                devName="Team Section" 
                devDescription="Team members section"
                className="mt-16"
              >
                <H3 devId="noID" devName="Team Section Title" devDescription="Team section title" className="text-3xl font-semibold text-white text-center mb-8">Our Team</H3>
                <Div devId="noID" devName="Team Members Grid" devDescription="Grid of team member cards" className="grid md:grid-cols-4 gap-6">
                  {teamMembers.map((member, index) => (
                    <Card 
                      key={index}
                      devId="noID"
                      devName={`${member.name} Team Card`}
                      devDescription={`Team member card for ${member.name}`}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                    >
                      <Div 
                        devId="noID"
                        devName={`Team Member Image ${index}`}
                        devDescription={`Profile image for ${member.name}`}
                        className="w-20 h-20 mx-auto mb-4 rounded-full bg-cover bg-center"
                        style={{backgroundImage: `url(${member.image})`}}
                      />
                      <H3 devId="noID" devName={`Team Member Name ${index}`} devDescription={`Name for team member ${member.name}`} className="text-lg font-semibold text-white mb-1">{member.name}</H3>
                      <P devId="noID" devName={`Team Member Role ${index}`} devDescription={`Role for team member ${member.name}`} className="text-gray-300 text-sm mb-3">{member.role}</P>
                      <Button 
                        devId="noID"
                        devName={`${member.name} LinkedIn`}
                        devDescription={`LinkedIn button for ${member.name}`}
                        variant="ghost" 
                        className="text-blue-400 hover:text-blue-300"
                      >
                        LinkedIn
                      </Button>
                    </Card>
                  ))}
                </Div>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Call to Action Section */}
        <Container componentId="noID">
          <Section devId="noID" devName="Final CTA Section Content" devDescription="Final CTA section content" className="py-20 px-4">
            <Div devId="noID" devName="Final CTA Container" devDescription="Final CTA section container" className="container mx-auto text-center">
              <H2 
                devId="noID" 
                devName="Final CTA Section Title" 
                devDescription="Final call-to-action section title"
                className="text-5xl font-bold text-white mb-8"
              >
                Ready to Transform App Development?
              </H2>
              <P devId="noID" devName="Final CTA Description" devDescription="Final CTA description text" className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join the revolution in app creation. Whether you're an investor, potential user, or partner, 
                we'd love to show you what's possible.
              </P>
              <Div devId="noID" devName="Final CTA Cards Grid" devDescription="Grid of final CTA cards" className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card devId="noID" devName="Investor CTA Card" devDescription="Call-to-action card for investors" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <H3 devId="noID" devName="Investor CTA Title" devDescription="Investor CTA title" className="text-xl font-semibold text-white mb-4">For Investors</H3>
                  <P devId="noID" devName="Investor CTA Description" devDescription="Investor CTA description" className="text-gray-300 mb-6">Schedule a private demo and see our growth metrics</P>
                  <Input
                    devId="noID"
                    devName="Investor Email Input"
                    devDescription="Email input for investors"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 bg-white/10 border-white/20 text-white"
                  />
                  <Button 
                    devId="noID"
                    devName="Investor CTA Button"
                    devDescription="Investor call-to-action button"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Demo
                  </Button>
                </Card>
                
                <Card devId="noID" devName="User CTA Card" devDescription="Call-to-action card for users" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <H3 devId="noID" devName="User CTA Title" devDescription="User CTA title" className="text-xl font-semibold text-white mb-4">For Users</H3>
                  <P devId="noID" devName="User CTA Description" devDescription="User CTA description" className="text-gray-300 mb-6">Start building your app today with our free trial</P>
                  <Button 
                    devId="noID"
                    devName="User CTA Button"
                    devDescription="User call-to-action button"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Try Free
                  </Button>
                  <P devId="noID" devName="User CTA Note" devDescription="User CTA note text" className="text-gray-400 text-sm">No credit card required</P>
                </Card>
                
                <Card devId="noID" devName="Partner CTA Card" devDescription="Call-to-action card for partners" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <H3 devId="noID" devName="Partner CTA Title" devDescription="Partner CTA title" className="text-xl font-semibold text-white mb-4">For Partners</H3>
                  <P devId="noID" devName="Partner CTA Description" devDescription="Partner CTA description" className="text-gray-300 mb-6">Join our ecosystem and grow together</P>
                  <Button 
                    devId="noID"
                    devName="Partner CTA Button"
                    devDescription="Partner call-to-action button"
                    className="w-full bg-green-600 hover:bg-green-700 text-white mb-4"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Partner With Us
                  </Button>
                  <P devId="noID" devName="Partner CTA Note" devDescription="Partner CTA note text" className="text-gray-400 text-sm">Integration opportunities</P>
                </Card>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Footer */}
        <Footer 
          devId="noID" 
          devName="Landing Footer" 
          devDescription="Main footer with contact information"
          className="border-t border-white/10 py-12 px-4"
        >
          <Div devId="noID" devName="Footer Container" devDescription="Footer content container" className="container mx-auto">
            <Div devId="noID" devName="Footer Content Grid" devDescription="Grid of footer content sections" className="grid md:grid-cols-4 gap-8">
              <Div devId="noID" devName="Footer Brand Section" devDescription="Footer brand section">
                <Div devId="noID" devName="Footer Brand Logo" devDescription="Footer brand logo and name" className="flex items-center space-x-3 mb-4">
                  <Div devId="noID" devName="Footer Logo Icon" devDescription="Footer logo icon" className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </Div>
                  <Span devId="noID" devName="Footer Brand Name" devDescription="Footer brand name" className="text-xl font-bold text-white">Geenius Interactive</Span>
                </Div>
                <P devId="noID" devName="Footer Brand Description" devDescription="Footer brand description" className="text-gray-300">Transforming app development with AI-powered creation tools.</P>
              </Div>
              <Div devId="noID" devName="Footer Product Section" devDescription="Footer product links section">
                <H3 devId="noID" devName="Footer Product Title" devDescription="Footer product section title" className="text-white font-semibold mb-4">Product</H3>
                <Div devId="noID" devName="Footer Product Links" devDescription="Footer product links" className="space-y-2">
                  <P devId="noID" devName="Footer Features Link" devDescription="Footer features link" className="text-gray-300 hover:text-white cursor-pointer">Features</P>
                  <P devId="noID" devName="Footer Templates Link" devDescription="Footer templates link" className="text-gray-300 hover:text-white cursor-pointer">Templates</P>
                  <P devId="noID" devName="Footer Pricing Link" devDescription="Footer pricing link" className="text-gray-300 hover:text-white cursor-pointer">Pricing</P>
                  <P devId="noID" devName="Footer API Link" devDescription="Footer API link" className="text-gray-300 hover:text-white cursor-pointer">API</P>
                </Div>
              </Div>
              <Div devId="noID" devName="Footer Company Section" devDescription="Footer company links section">
                <H3 devId="noID" devName="Footer Company Title" devDescription="Footer company section title" className="text-white font-semibold mb-4">Company</H3>
                <Div devId="noID" devName="Footer Company Links" devDescription="Footer company links" className="space-y-2">
                  <P devId="noID" devName="Footer About Link" devDescription="Footer about link" className="text-gray-300 hover:text-white cursor-pointer">About</P>
                  <P devId="noID" devName="Footer Careers Link" devDescription="Footer careers link" className="text-gray-300 hover:text-white cursor-pointer">Careers</P>
                  <P devId="noID" devName="Footer Press Link" devDescription="Footer press link" className="text-gray-300 hover:text-white cursor-pointer">Press</P>
                  <P devId="noID" devName="Footer Contact Link" devDescription="Footer contact link" className="text-gray-300 hover:text-white cursor-pointer">Contact</P>
                </Div>
              </Div>
              <Div devId="noID" devName="Footer Connect Section" devDescription="Footer contact information section">
                <H3 devId="noID" devName="Footer Connect Title" devDescription="Footer connect section title" className="text-white font-semibold mb-4">Connect</H3>
                <Div devId="noID" devName="Footer Connect Info" devDescription="Footer contact information" className="space-y-2">
                  <P devId="noID" devName="Footer Email" devDescription="Footer email address" className="text-gray-300">hello@geenius.ai</P>
                  <P devId="noID" devName="Footer Phone" devDescription="Footer phone number" className="text-gray-300">+1 (555) 123-4567</P>
                  <P devId="noID" devName="Footer Address" devDescription="Footer address" className="text-gray-300">San Francisco, CA</P>
                </Div>
              </Div>
            </Div>
            <Div devId="noID" devName="Footer Bottom" devDescription="Footer bottom section with copyright" className="border-t border-white/10 mt-8 pt-8 text-center">
              <P devId="noID" devName="Footer Copyright" devDescription="Footer copyright text" className="text-gray-400">© 2024 Geenius Interactive. All rights reserved. Built with ❤️ for the future of app development.</P>
            </Div>
          </Div>
        </Footer>
      </Div>
    </Container>
  );
};