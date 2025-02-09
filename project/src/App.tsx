import React from 'react';
import { 
  Droplets, 
  Shield, 
  Smartphone, 
  BarChart3, 
  AlertTriangle, 
  Gauge, 
  Home, 
  Settings,
  CheckCircle2
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">Leak Shield</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How it Works</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          نظام ذكي للتنبؤ بكشف تسريبات المياه
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Intelligent system for detecting and preventing water leaks using AI and IoT technology
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Gauge className="h-8 w-8 text-blue-600" />}
              title="Smart Sensors"
              description="IoT sensors monitor water flow, pressure, and detect hidden leaks"
            />
            <FeatureCard 
              icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
              title="AI Analysis"
              description="Machine learning algorithms predict and detect abnormal water usage patterns"
            />
            <FeatureCard 
              icon={<Smartphone className="h-8 w-8 text-blue-600" />}
              title="Mobile Control"
              description="Monitor and control your water system from anywhere using our mobile app"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={<Droplets className="h-6 w-6 text-blue-600" />}
              title="Save Water"
              description="Reduce water consumption by up to 30%"
            />
            <BenefitCard
              icon={<Home className="h-6 w-6 text-blue-600" />}
              title="Protect Property"
              description="Prevent structural damage from hidden leaks"
            />
            <BenefitCard
              icon={<AlertTriangle className="h-6 w-6 text-blue-600" />}
              title="Early Warning"
              description="Get instant alerts before problems escalate"
            />
            <BenefitCard
              icon={<Settings className="h-6 w-6 text-blue-600" />}
              title="Automation"
              description="Automatic shutdown in case of serious leaks"
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Step 
                number="1"
                title="Install Smart Sensors"
                description="Place IoT sensors at key points in your water system"
              />
              <Step 
                number="2"
                title="Connect to Platform"
                description="Sensors connect to our cloud platform for real-time monitoring"
              />
              <Step 
                number="3"
                title="AI Analysis"
                description="Our AI analyzes data patterns to detect anomalies"
              />
              <Step 
                number="4"
                title="Instant Alerts"
                description="Receive notifications and take action through the mobile app"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Leak Shield</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400">Privacy</a>
              <a href="#" className="hover:text-blue-400">Terms</a>
              <a href="#" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;