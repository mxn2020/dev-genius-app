import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession, signOut } from '../../lib/auth-client';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Input } from '../ui/input';
import { 
  LogOut, 
  Mail, 
  Shield, 
  Home, 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Play,
  MessageSquare,
  Settings,
  Plus,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { Container } from '../../lib/dev-container';

type DashboardTab = 'overview' | 'investors' | 'demos' | 'metrics' | 'feedback' | 'settings';

interface Investor {
  id: string;
  name: string;
  email: string;
  company: string;
  status: 'interested' | 'meeting_scheduled' | 'follow_up' | 'declined';
  lastContact: string;
  notes: string;
}

interface Demo {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  views: number;
  completions: number;
  conversionRate: number;
}

interface Metric {
  id: string;
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
}

interface FeedbackItem {
  id: string;
  source: string;
  message: string;
  rating: number;
  createdAt: string;
  category: 'product' | 'demo' | 'pitch' | 'general';
}

export const Dashboard: React.FC = () => {
  const { data: session, isPending } = useSession();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [newInvestorEmail, setNewInvestorEmail] = useState('');

  // Mock data - in real app, this would come from API
  const [investors] = useState<Investor[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@venturecap.com',
      company: 'Venture Capital Partners',
      status: 'meeting_scheduled',
      lastContact: '2024-01-15',
      notes: 'Very interested in AI/ML applications. Wants to see user metrics.'
    },
    {
      id: '2', 
      name: 'Michael Chen',
      email: 'mchen@techfund.io',
      company: 'Tech Innovation Fund',
      status: 'interested',
      lastContact: '2024-01-12',
      notes: 'Focused on B2B SaaS. Asked about enterprise features.'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily@growthvc.com', 
      company: 'Growth Ventures',
      status: 'follow_up',
      lastContact: '2024-01-10',
      notes: 'Wants to see competitive analysis and market positioning.'
    }
  ]);

  const [demos] = useState<Demo[]>([
    {
      id: '1',
      title: 'Restaurant App Builder',
      description: 'Demo showing restaurant menu and ordering system creation',
      createdAt: '2024-01-01',
      views: 1250,
      completions: 890,
      conversionRate: 71.2
    },
    {
      id: '2',
      title: 'Medical Practice Demo',
      description: 'Appointment booking and patient management system',
      createdAt: '2024-01-05',
      views: 980,
      completions: 720,
      conversionRate: 73.5
    },
    {
      id: '3',
      title: 'Legal Firm Portal',
      description: 'Case management and client communication platform',
      createdAt: '2024-01-08',
      views: 650,
      completions: 420,
      conversionRate: 64.6
    }
  ]);

  const [metrics] = useState<Metric[]>([
    { id: '1', name: 'Total Signups', value: '12,450', change: '+23%', trend: 'up' },
    { id: '2', name: 'Apps Created', value: '8,920', change: '+31%', trend: 'up' },
    { id: '3', name: 'Monthly Revenue', value: '$89,200', change: '+18%', trend: 'up' },
    { id: '4', name: 'Conversion Rate', value: '68.5%', change: '+5%', trend: 'up' },
    { id: '5', name: 'Churn Rate', value: '2.1%', change: '-12%', trend: 'down' },
    { id: '6', name: 'Customer Satisfaction', value: '4.8/5', change: '+0.2', trend: 'up' }
  ]);

  const [feedback] = useState<FeedbackItem[]>([
    {
      id: '1',
      source: 'Demo User',
      message: 'Amazing tool! Created my restaurant app in 5 minutes.',
      rating: 5,
      createdAt: '2024-01-15',
      category: 'product'
    },
    {
      id: '2',
      source: 'Investor Meeting',
      message: 'Impressive demo, but need to see more enterprise features.',
      rating: 4,
      createdAt: '2024-01-14',
      category: 'pitch'
    },
    {
      id: '3',
      source: 'Beta Tester',
      message: 'Love the concept, but the UI could be more intuitive.',
      rating: 4,
      createdAt: '2024-01-13',
      category: 'product'
    }
  ]);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'meeting_scheduled': return 'bg-green-600';
      case 'interested': return 'bg-blue-600';
      case 'follow_up': return 'bg-yellow-600';
      case 'declined': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? <TrendingUp className="w-4 h-4 text-green-500" /> : 
           trend === 'down' ? <TrendingUp className="w-4 h-4 text-red-500 rotate-180" /> :
           <div className="w-4 h-4 bg-gray-500 rounded-full" />;
  };

  if (isPending) {
    return (
      <Container componentId="dashboard-loading">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your dashboard...</p>
          </div>
        </div>
      </Container>
    );
  }

  if (!session) {
    return (
      <Container componentId="dashboard-unauthorized">
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="text-center">
                <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
                <p className="text-muted-foreground mb-4">
                  Please log in to access your dashboard.
                </p>
                <Button onClick={() => navigate('/login')} className="w-full">
                  Go to Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    );
  }

  const user = session.user;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <Container componentId="dashboard-unauthorized">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Total Investors</p>
                        <p className="text-2xl font-bold">{investors.length}</p>
                      </div>
                      <Users className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Active Demos</p>
                        <p className="text-2xl font-bold">{demos.length}</p>
                      </div>
                      <Play className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                        <p className="text-2xl font-bold">{demos.reduce((sum, demo) => sum + demo.views, 0).toLocaleString()}</p>
                      </div>
                      <Eye className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Avg Conversion</p>
                        <p className="text-2xl font-bold">{(demos.reduce((sum, demo) => sum + demo.conversionRate, 0) / demos.length).toFixed(1)}%</p>
                      </div>
                      <Target className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Investor Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {investors.slice(0, 3).map((investor) => (
                        <div key={investor.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{getUserInitials(investor.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{investor.name}</p>
                              <p className="text-xs text-muted-foreground">{investor.company}</p>
                            </div>
                          </div>
                          <Badge className={getStatusColor(investor.status)}>
                            {investor.status.replace('_', ' ')}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Demos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {demos.sort((a, b) => b.conversionRate - a.conversionRate).slice(0, 3).map((demo) => (
                        <div key={demo.id} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">{demo.title}</p>
                            <p className="text-xs text-muted-foreground">{demo.views} views</p>
                          </div>
                          <Badge variant="outline">
                            {demo.conversionRate}% conversion
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        );

      case 'investors':
        return (
          <Container componentId="dashboard-loading">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Investor Management</h3>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add investor email"
                    value={newInvestorEmail}
                    onChange={(e) => setNewInvestorEmail(e.target.value)}
                    className="w-64"
                  />
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Investor
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                {investors.map((investor) => (
                  <Card key={investor.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>{getUserInitials(investor.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{investor.name}</h4>
                            <p className="text-sm text-muted-foreground">{investor.company}</p>
                            <p className="text-xs text-muted-foreground">{investor.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge className={getStatusColor(investor.status)}>
                            {investor.status.replace('_', ' ')}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Mail className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground">Last contact: {investor.lastContact}</p>
                        <p className="text-sm mt-2">{investor.notes}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        );

      case 'demos':
        return (
          <Container componentId="dashboard-unauthorized">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Demo Management</h3>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Demo
                </Button>
              </div>

              <div className="grid gap-4">
                {demos.map((demo) => (
                  <Card key={demo.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{demo.title}</h4>
                          <p className="text-sm text-muted-foreground">{demo.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">Created: {demo.createdAt}</p>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-2xl font-bold">{demo.views}</p>
                            <p className="text-xs text-muted-foreground">Views</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold">{demo.completions}</p>
                            <p className="text-xs text-muted-foreground">Completions</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-green-600">{demo.conversionRate}%</p>
                            <p className="text-xs text-muted-foreground">Conversion</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        );

      case 'metrics':
        return (
          <Container componentId="dashboard-loading">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Business Metrics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric) => (
                  <Card key={metric.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{metric.name}</p>
                          <p className="text-2xl font-bold">{metric.value}</p>
                          <div className="flex items-center mt-2">
                            {getTrendIcon(metric.trend)}
                            <span className={`text-sm ml-1 ${
                              metric.trend === 'up' ? 'text-green-600' : 
                              metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              {metric.change}
                            </span>
                          </div>
                        </div>
                        <BarChart3 className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Q1 2024 Target</span>
                      <span className="font-bold">$120,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Q2 2024 Target</span>
                      <span className="font-bold">$180,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Q3 2024 Target</span>
                      <span className="font-bold">$250,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Q4 2024 Target</span>
                      <span className="font-bold">$350,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        );

      case 'feedback':
        return (
          <Container componentId="dashboard-unauthorized">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Customer Feedback</h3>
              
              <div className="grid gap-4">
                {feedback.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{item.category}</Badge>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < item.rating ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                >
                                  ★
                                </div>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm mb-2">{item.message}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>From: {item.source}</span>
                            <span>Date: {item.createdAt}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        );

      case 'settings':
        return (
          <Container componentId="dashboard-loading">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Dashboard Settings</h3>
              
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Email notifications for new investors</span>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Demo completion alerts</span>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Weekly metrics summary</span>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Export</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Export Investor Data (CSV)
                  </Button>
                  <Button variant="outline" className="w-full">
                    Export Demo Analytics (PDF)
                  </Button>
                  <Button variant="outline" className="w-full">
                    Export Metrics Report (Excel)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Container>
        );

      default:
        return null;
    }
  };

  return (
    <Container componentId="dashboard-unauthorized">
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Container componentId="dashboard-header">
          <div className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-xl font-semibold text-gray-900">
                    Geenius Dashboard
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" />
                    Back to Home
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <Container componentId="dashboard-loading">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.image || undefined} alt={user.name || 'User'} />
                        <AvatarFallback className="text-lg">
                          {getUserInitials(user.name || 'U')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">Admin</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      <Button
                        variant={activeTab === 'overview' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveTab('overview')}
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Overview
                      </Button>
                      <Button
                        variant={activeTab === 'investors' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveTab('investors')}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Investors
                      </Button>
                      <Button
                        variant={activeTab === 'demos' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveTab('demos')}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demos
                      </Button>
                      <Button
                        variant={activeTab === 'metrics' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveTab('metrics')}
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Metrics
                      </Button>
                      <Button
                        variant={activeTab === 'feedback' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveTab('feedback')}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Feedback
                      </Button>
                      <Button
                        variant={activeTab === 'settings' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveTab('settings')}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </Container>

            {/* Main Content */}
            <Container componentId="dashboard-loading">
              <div className="lg:col-span-3">
                {renderTabContent()}
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  );
};