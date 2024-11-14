import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-2xl font-semibold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-8">We're working on fixing the issue.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 
                       transition-colors duration-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 