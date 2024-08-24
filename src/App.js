import './App.css';
import Container from './components/container/Container';
import Login from './components/login/Login';
import ProtectedRoute from './components/protectedroute/ProjectedRoute'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Miner from './components/miners/miner1';
import { AuthProvider } from './components/AutContext/AutProvider';
import AddPdu from './components/addPdu/AddPdu';
import SignUp from './components/SignUp/SignUp';
import AddMiner from './components/add miner/AddMiner';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard" element={<ProtectedRoute element={<Container />} />} />
          <Route
            path="/dashboard/miner1"
            element={<ProtectedRoute element={<Container component={() => <Miner param={1} />} />} />}
          />
          <Route
            path="/dashboard/miner2"
            element={<ProtectedRoute element={<Container component={() => <Miner param={2} />} />} />}
          />
          <Route
            path="/dashboard/miner3"
            element={<ProtectedRoute element={<Container component={() => <Miner param={3} />} />} />}
          />
          <Route
            path="/dashboard/miner4"
            element={<ProtectedRoute element={<Container component={() => <Miner param={4} />} />} />}
          />
          <Route
            path="/dashboard/miner5"
            element={<ProtectedRoute element={<Container component={() => <Miner param={5} />} />} />}
          />
          <Route
            path="/dashboard/miner6"
            element={<ProtectedRoute element={<Container component={() => <Miner param={6} />} />} />}
          />
          <Route
            path="/dashboard/addpdu"
            element={<ProtectedRoute element={<Container component={() => <AddPdu />} />} />}
          />
          <Route
            path="/dashboard/signupuser"
            element={<ProtectedRoute element={<Container component={() => <SignUp />} />} />}
          />
          <Route
            path="/dashboard/signupminer"
            element={<ProtectedRoute element={<Container component={() => <AddMiner />} />} />}
          />
        </Routes>
      </Router>

    </AuthProvider>
  );
}

export default App;