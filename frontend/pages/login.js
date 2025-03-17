import Navbar from '@/components/Navbar';

export default function Login() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/login"; // Redirect to backend login
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Login with Spotify</h1>
      <button onClick={handleLogin} className="bg-green-500 px-4 py-2 rounded">Login</button>
    </div>
  );
}
