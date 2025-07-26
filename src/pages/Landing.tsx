// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Code, 
  Globe, 
  Users, 
  Star, 
  User, 
  Play, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Smartphone, 
  Database, 
  Cloud,
  Mail,
  Calendar,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Shield,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, H3, P, Div, Footer, Input } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions for type-safe dynamic IDs
const getProblemCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['problem-card-0', 'problem-card-1', 'problem-card-2'];
  return ids[index] || 'noID';
};

const getSolutionStepId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['solution-step-0', 'solution-step-1', 'solution-step-2', 'solution-step-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2'];
  return ids[index] || 'noID';
};

const getComponentId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['component-0', 'component-1', 'component-2', 'component-3'];
  return ids[index] || 'noID';
};

const getIndustryCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['industry-card-0', 'industry-card-1', 'industry-card-2', 'industry-card-3', 'industry-card-4'];
  return ids[index] || 'noID';
};

const getPricingCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['pricing-card-0', 'pricing-card-1', 'pricing-card-2'];
  return ids[index] || 'noID';
};

const getMetricCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['metric-card-0', 'metric-card-1', 'metric-card-2', 'metric-card-3'];
  return ids[index] || 'noID';
};

const getTeamMemberId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['team-member-0', 'team-member-1', 'team-member-2', 'team-member-3'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentDemo, setCurrentDemo] = useState('');
  const [typingText, setTypingText] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);
  const [email, setEmail] = useState('');
  const { isAuthenticated, user } = useAuth();

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
    <Container componentId="geenius-pitch-deck">
      <Div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        {/* Header */}
        <Header 
          devId="pitch-header" 
          devName="Pitch Header" 
          devDescription="Main header with navigation and progress indicator"
          className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10"
        >
          <Nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Div className="flex items-center space-x-3">
              <Div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </Div>
              <Span 
                devId="geenius-brand" 
                devName="Geenius Brand" 
                devDescription="Geenius Interactive brand name"
                className="text-2xl font-bold text-white"
              >
                Geenius Interactive
              </Span>
            </Div>
            <Div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-btn"
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
                      devId="nav-login-btn"
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
                      devId="nav-register-btn"
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
        <Container componentId="hero-section">
          <Section className="pt-32 pb-20 px-4">
            <Div className="container mx-auto text-center">
              <H1 
                devId="hero-headline" 
                devName="Hero Headline" 
                devDescription="Main hero headline"
                className="text-6xl md:text-8xl font-bold text-white mb-6"
              >
                From Idea to Live App
                <Span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {' '}in Minutes
                </Span>
              </H1>
              <P 
                devId="hero-subheadline" 
                devName="Hero Subheadline" 
                devDescription="Hero subheadline description"
                className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
              >
                Your assistant can now build business apps just by describing what you need - No Developer Needed
              </P>
              
              {/* Interactive Demo Input */}
              <Div 
                devId="demo-input-section" 
                devName="Demo Input Section" 
                devDescription="Interactive demo input area"
                className="max-w-2xl mx-auto mb-12"
              >
                <Div className="relative">
                  <Input
                    devId="demo-input"
                    devName="Demo Input"
                    devDescription="Live demo input box"
                    placeholder={typingText}
                    value={currentDemo}
                    onChange={(e) => setCurrentDemo(e.target.value)}
                    className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400"
                  />
                  <Button 
                    devId="demo-try-btn"
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
                devId="hero-cta-btn"
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
        <Container componentId="problem-section">
          <Section className="py-20 px-4 bg-black/20">
            <Div className="container mx-auto">
              <H2 
                devId="problem-title" 
                devName="Problem Title" 
                devDescription="Problem section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                The Problem
              </H2>
              <Div className="grid md:grid-cols-3 gap-8">
                {problems.map((problem, index) => (
                  <Card 
                    key={index}
                    devId={getProblemCardId(index)}
                    devName={`${problem.title} Problem Card`}
                    devDescription={`Problem card for ${problem.title}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-red-500/50 transition-all"
                  >
                    <Div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${problem.image})`}} />
                    <CardContent className="p-6">
                      <H3 className="text-xl font-semibold text-white mb-3">{problem.title}</H3>
                      <P className="text-gray-300">{problem.pain}</P>
                    </CardContent>
                  </Card>
                ))}
              </Div>
              <Div 
                devId="problem-stats" 
                devName="Problem Stats" 
                devDescription="Problem statistics section"
                className="text-center mt-12"
              >
                <P className="text-gray-300 text-lg mb-4">Average custom development costs:</P>
                <Div className="flex justify-center space-x-8">
                  <Div className="text-center">
                    <Div className="text-3xl font-bold text-red-400">$75,000</Div>
                    <Div className="text-gray-400">Average Cost</Div>
                  </Div>
                  <Div className="text-center">
                    <Div className="text-3xl font-bold text-red-400">8 months</Div>
                    <Div className="text-gray-400">Development Time</Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Solution Section */}
        <Container componentId="solution-section">
          <Section className="py-20 px-4">
            <Div className="container mx-auto">
              <H2 
                devId="solution-title" 
                devName="Solution Title" 
                devDescription="Solution section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                The Solution
              </H2>
              <Div className="grid md:grid-cols-4 gap-8">
                {solutionSteps.map((step, index) => (
                  <Card 
                    key={index}
                    devId={getSolutionStepId(index)}
                    devName={`Solution Step ${step.step}`}
                    devDescription={`Solution step ${step.step}: ${step.title}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all cursor-pointer"
                  >
                    <Div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Span className="text-white font-bold text-xl">{step.step}</Span>
                    </Div>
                    <Div className="mb-4">{step.icon}</Div>
                    <H3 className="text-xl font-semibold text-white mb-3">{step.title}</H3>
                    <P className="text-gray-300">{step.description}</P>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Core Features Section */}
        <Container componentId="features-section">
          <Section className="py-20 px-4 bg-black/20">
            <Div className="container mx-auto">
              <H2 
                devId="features-title" 
                devName="Features Title" 
                devDescription="Core features section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                Core Features
              </H2>
              <Div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card 
                    key={index}
                    devId={getFeatureCardId(index)}
                    devName={`${feature.title} Feature Card`}
                    devDescription={`Feature card for ${feature.title}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-500/50 transition-all"
                  >
                    <Div className="mb-6">{feature.icon}</Div>
                    <H3 className="text-2xl font-semibold text-white mb-4">{feature.title}</H3>
                    <P className="text-gray-300 mb-6">{feature.description}</P>
                    <Div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                      <P className="text-purple-300 text-sm">{feature.demo}</P>
                    </Div>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Platform Components Section */}
        <Container componentId="components-section">
          <Section className="py-20 px-4">
            <Div className="container mx-auto text-center">
              <H2 
                devId="components-title" 
                devName="Components Title" 
                devDescription="Platform components section title"
                className="text-5xl font-bold text-white mb-16"
              >
                Platform Ecosystem
              </H2>
              <Div className="grid md:grid-cols-4 gap-8">
                {components.map((component, index) => (
                  <Card 
                    key={index}
                    devId={getComponentId(index)}
                    devName={`${component.name} Component`}
                    devDescription={`Platform component: ${component.name}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all cursor-pointer"
                  >
                    <Div className="text-4xl font-bold text-blue-400 mb-2">{component.count}</Div>
                    <H3 className="text-xl font-semibold text-white mb-3">{component.name}</H3>
                    <P className="text-gray-300">{component.description}</P>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Target Market Section */}
        <Container componentId="market-section">
          <Section className="py-20 px-4 bg-black/20">
            <Div className="container mx-auto">
              <H2 
                devId="market-title" 
                devName="Market Title" 
                devDescription="Target market section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                Target Market
              </H2>
              <Div className="grid md:grid-cols-5 gap-6">
                {industries.map((industry, index) => (
                  <Card 
                    key={index}
                    devId={getIndustryCardId(index)}
                    devName={`${industry.name} Industry Card`}
                    devDescription={`Industry card for ${industry.name}`}
                    className={`bg-white/5 backdrop-blur-sm border rounded-xl overflow-hidden cursor-pointer transition-all ${
                      selectedIndustry === index ? 'border-purple-500' : 'border-white/10 hover:border-purple-500/50'
                    }`}
                    onClick={() => setSelectedIndustry(index)}
                  >
                    <Div className="h-32 bg-cover bg-center" style={{backgroundImage: `url(${industry.image})`}} />
                    <CardContent className="p-4">
                      <H3 className="text-lg font-semibold text-white mb-2">{industry.name}</H3>
                      <P className="text-gray-300 text-sm mb-2">{industry.useCase}</P>
                      <Badge className="bg-purple-600 text-white">{industry.marketSize}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Business Model Section */}
        <Container componentId="pricing-section">
          <Section className="py-20 px-4">
            <Div className="container mx-auto">
              <H2 
                devId="pricing-title" 
                devName="Pricing Title" 
                devDescription="Business model pricing section title"
                className="text-5xl font-bold text-white text-center mb-8"
              >
                Business Model
              </H2>
              <Div 
                devId="pricing-toggle" 
                devName="Pricing Toggle" 
                devDescription="Monthly/Annual pricing toggle"
                className="flex justify-center mb-12"
              >
                <Div className="bg-white/10 rounded-lg p-1 flex">
                  <Button 
                    devId="monthly-btn"
                    devName="Monthly Button"
                    devDescription="Monthly pricing button"
                    variant={!isAnnual ? "default" : "ghost"}
                    onClick={() => setIsAnnual(false)}
                    className="px-6 py-2"
                  >
                    Monthly
                  </Button>
                  <Button 
                    devId="annual-btn"
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
              <Div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <Card 
                    key={index}
                    devId={getPricingCardId(index)}
                    devName={`${plan.name} Pricing Card`}
                    devDescription={`Pricing card for ${plan.name} plan`}
                    className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                      plan.popular ? 'border-purple-500 ring-2 ring-purple-500/50' : 'border-white/10'
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="bg-purple-600 text-white mb-4">Most Popular</Badge>
                    )}
                    <H3 className="text-2xl font-semibold text-white mb-4">{plan.name}</H3>
                    <Div className="mb-6">
                      <Span className="text-4xl font-bold text-white">${plan.price}</Span>
                      <Span className="text-gray-300">/month</Span>
                    </Div>
                    <Div className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <Div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          <Span className="text-gray-300">{feature}</Span>
                        </Div>
                      ))}
                    </Div>
                    <Button 
                      devId={`pricing-cta-${index}`}
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
        <Container componentId="demo-section">
          <Section className="py-20 px-4 bg-black/20">
            <Div className="container mx-auto text-center">
              <H2 
                devId="demo-title" 
                devName="Demo Title" 
                devDescription="Demo section title"
                className="text-5xl font-bold text-white mb-16"
              >
                Live Demo
              </H2>
              <Div 
                devId="demo-interface" 
                devName="Demo Interface" 
                devDescription="Interactive demo interface"
                className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
              >
                <Div className="bg-black/50 rounded-lg p-6 mb-6">
                  <P className="text-gray-300 mb-4">Try creating an app:</P>
                  <Div className="grid md:grid-cols-3 gap-4">
                    <Button 
                      devId="demo-restaurant"
                      devName="Restaurant Demo"
                      devDescription="Restaurant app demo button"
                      className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg"
                      onClick={() => setCurrentDemo("Restaurant menu and ordering system")}
                    >
                      Restaurant App
                    </Button>
                    <Button 
                      devId="demo-appointment"
                      devName="Appointment Demo"
                      devDescription="Appointment booking demo button"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg"
                      onClick={() => setCurrentDemo("Doctor appointment booking")}
                    >
                      Booking System
                    </Button>
                    <Button 
                      devId="demo-contact"
                      devName="Contact Demo"
                      devDescription="Contact management demo button"
                      className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg"
                      onClick={() => setCurrentDemo("Contact management system")}
                    >
                      Contact Manager
                    </Button>
                  </Div>
                </Div>
                {currentDemo && (
                  <Div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
                    <P className="text-green-300">✓ App created: {currentDemo}</P>
                    <P className="text-gray-300 mt-2">Ready to deploy in 30 seconds!</P>
                  </Div>
                )}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Traction & Metrics Section */}
        <Container componentId="metrics-section">
          <Section className="py-20 px-4">
            <Div className="container mx-auto">
              <H2 
                devId="metrics-title" 
                devName="Metrics Title" 
                devDescription="Traction and metrics section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                Traction & Metrics
              </H2>
              <Div className="grid md:grid-cols-4 gap-8 mb-12">
                {metrics.map((metric, index) => (
                  <Card 
                    key={index}
                    devId={getMetricCardId(index)}
                    devName={`${metric.label} Metric Card`}
                    devDescription={`Metric card for ${metric.label}`}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                  >
                    <Div className="text-3xl font-bold text-white mb-2">{metric.value}</Div>
                    <Div className="text-gray-300 mb-2">{metric.label}</Div>
                    <Badge className="bg-green-600 text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {metric.growth}
                    </Badge>
                  </Card>
                ))}
              </Div>
              <Div 
                devId="testimonials" 
                devName="Testimonials" 
                devDescription="Customer testimonials section"
                className="text-center"
              >
                <H3 className="text-2xl font-semibold text-white mb-8">What Our Customers Say</H3>
                <Div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <P className="text-gray-300 mb-4">"Geenius saved us $80,000 and 8 months of development time. Our restaurant app was live in 2 days!"</P>
                    <P className="text-white font-semibold">- Maria Rodriguez, Restaurant Owner</P>
                  </Card>
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <P className="text-gray-300 mb-4">"The AI understood exactly what we needed. Our patient booking system works perfectly."</P>
                    <P className="text-white font-semibold">- Dr. James Wilson, Medical Practice</P>
                  </Card>
                </Div>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Investment Opportunity Section */}
        <Container componentId="investment-section">
          <Section className="py-20 px-4 bg-black/20">
            <Div className="container mx-auto">
              <H2 
                devId="investment-title" 
                devName="Investment Title" 
                devDescription="Investment opportunity section title"
                className="text-5xl font-bold text-white text-center mb-16"
              >
                Investment Opportunity
              </H2>
              <Div className="grid md:grid-cols-2 gap-12">
                <Div>
                  <H3 className="text-3xl font-semibold text-white mb-6">Market Opportunity</H3>
                  <Div className="space-y-4">
                    <Div className="flex justify-between items-center">
                      <Span className="text-gray-300">TAM (Total Addressable Market)</Span>
                      <Span className="text-white font-bold">$280B</Span>
                    </Div>
                    <Div className="flex justify-between items-center">
                      <Span className="text-gray-300">SAM (Serviceable Addressable Market)</Span>
                      <Span className="text-white font-bold">$45B</Span>
                    </Div>
                    <Div className="flex justify-between items-center">
                      <Span className="text-gray-300">SOM (Serviceable Obtainable Market)</Span>
                      <Span className="text-white font-bold">$2.3B</Span>
                    </Div>
                  </Div>
                </Div>
                <Div>
                  <H3 className="text-3xl font-semibold text-white mb-6">Use of Funds</H3>
                  <Div className="space-y-4">
                    <Div className="flex justify-between items-center">
                      <Span className="text-gray-300">Product Development</Span>
                      <Span className="text-white font-bold">40%</Span>
                    </Div>
                    <Div className="flex justify-between items-center">
                      <Span className="text-gray-300">Marketing & Sales</Span>
                      <Span className="text-white font-bold">35%</Span>
                    </Div>
                    <Div className="flex justify-between items-center">
                      <Span className="text-gray-300">Team Expansion</Span>
                      <Span className="text-white font-bold">20%</Span>
                    </Div>
                    <Div className="flex justify-between items-center">
                      <Span className="text-gray-300">Operations</Span>
                      <Span className="text-white font-bold">5%</Span>
                    </Div>
                  </Div>
                </Div>
              </Div>
              <Div 
                devId="team-section" 
                devName="Team Section" 
                devDescription="Team members section"
                className="mt-16"
              >
                <H3 className="text-3xl font-semibold text-white text-center mb-8">Our Team</H3>
                <Div className="grid md:grid-cols-4 gap-6">
                  {teamMembers.map((member, index) => (
                    <Card 
                      key={index}
                      devId={getTeamMemberId(index)}
                      devName={`${member.name} Team Card`}
                      devDescription={`Team member card for ${member.name}`}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                    >
                      <Div 
                        className="w-20 h-20 mx-auto mb-4 rounded-full bg-cover bg-center"
                        style={{backgroundImage: `url(${member.image})`}}
                      />
                      <H3 className="text-lg font-semibold text-white mb-1">{member.name}</H3>
                      <P className="text-gray-300 text-sm mb-3">{member.role}</P>
                      <Button 
                        devId={`linkedin-${index}`}
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
        <Container componentId="final-cta-section">
          <Section className="py-20 px-4">
            <Div className="container mx-auto text-center">
              <H2 
                devId="final-cta-title" 
                devName="Final CTA Title" 
                devDescription="Final call-to-action section title"
                className="text-5xl font-bold text-white mb-8"
              >
                Ready to Transform App Development?
              </H2>
              <P className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join the revolution in app creation. Whether you're an investor, potential user, or partner, 
                we'd love to show you what's possible.
              </P>
              <Div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <H3 className="text-xl font-semibold text-white mb-4">For Investors</H3>
                  <P className="text-gray-300 mb-6">Schedule a private demo and see our growth metrics</P>
                  <Input
                    devId="investor-email"
                    devName="Investor Email"
                    devDescription="Email input for investors"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 bg-white/10 border-white/20 text-white"
                  />
                  <Button 
                    devId="investor-cta"
                    devName="Investor CTA"
                    devDescription="Investor call-to-action button"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Demo
                  </Button>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <H3 className="text-xl font-semibold text-white mb-4">For Users</H3>
                  <P className="text-gray-300 mb-6">Start building your app today with our free trial</P>
                  <Button 
                    devId="user-cta"
                    devName="User CTA"
                    devDescription="User call-to-action button"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Try Free
                  </Button>
                  <P className="text-gray-400 text-sm">No credit card required</P>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <H3 className="text-xl font-semibold text-white mb-4">For Partners</H3>
                  <P className="text-gray-300 mb-6">Join our ecosystem and grow together</P>
                  <Button 
                    devId="partner-cta"
                    devName="Partner CTA"
                    devDescription="Partner call-to-action button"
                    className="w-full bg-green-600 hover:bg-green-700 text-white mb-4"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Partner With Us
                  </Button>
                  <P className="text-gray-400 text-sm">Integration opportunities</P>
                </Card>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Footer */}
        <Footer 
          devId="pitch-footer" 
          devName="Pitch Footer" 
          devDescription="Main footer with contact information"
          className="border-t border-white/10 py-12 px-4"
        >
          <Div className="container mx-auto">
            <Div className="grid md:grid-cols-4 gap-8">
              <Div>
                <Div className="flex items-center space-x-3 mb-4">
                  <Div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </Div>
                  <Span className="text-xl font-bold text-white">Geenius Interactive</Span>
                </Div>
                <P className="text-gray-300">Transforming app development with AI-powered creation tools.</P>
              </Div>
              <Div>
                <H3 className="text-white font-semibold mb-4">Product</H3>
                <Div className="space-y-2">
                  <P className="text-gray-300 hover:text-white cursor-pointer">Features</P>
                  <P className="text-gray-300 hover:text-white cursor-pointer">Templates</P>
                  <P className="text-gray-300 hover:text-white cursor-pointer">Pricing</P>
                  <P className="text-gray-300 hover:text-white cursor-pointer">API</P>
                </Div>
              </Div>
              <Div>
                <H3 className="text-white font-semibold mb-4">Company</H3>
                <Div className="space-y-2">
                  <P className="text-gray-300 hover:text-white cursor-pointer">About</P>
                  <P className="text-gray-300 hover:text-white cursor-pointer">Careers</P>
                  <P className="text-gray-300 hover:text-white cursor-pointer">Press</P>
                  <P className="text-gray-300 hover:text-white cursor-pointer">Contact</P>
                </Div>
              </Div>
              <Div>
                <H3 className="text-white font-semibold mb-4">Connect</H3>
                <Div className="space-y-2">
                  <P className="text-gray-300">hello@geenius.ai</P>
                  <P className="text-gray-300">+1 (555) 123-4567</P>
                  <P className="text-gray-300">San Francisco, CA</P>
                </Div>
              </Div>
            </Div>
            <Div className="border-t border-white/10 mt-8 pt-8 text-center">
              <P className="text-gray-400">© 2024 Geenius Interactive. All rights reserved. Built with ❤️ for the future of app development.</P>
            </Div>
          </Div>
        </Footer>
      </Div>
    </Container>
  );
};