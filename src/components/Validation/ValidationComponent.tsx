import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "@clerk/clerk-react";


const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => password.length >= 6;

const validateInputs = (
  email: string,
  password: string,
  setError: React.Dispatch<React.SetStateAction<string>>
): boolean => {
  if (!validateEmail(email)) {
    setError("Email inválido.");
    return false;
  }
  if (!validatePassword(password)) {
    setError("A senha deve ter pelo menos 6 caracteres.");
    return false;
  }
  setError("");
  return true;
};

const LoginComponent: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, isLoaded } = useSignIn();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (): void => {
    console.log("Tentando login...");
    if (!validateInputs(email, password, setError)) {
      console.log("Validação falhou!");
      return;
    }
    console.log("Login bem-sucedido! Redirecionando...");
    navigate("/shop");
  };

  const handleGoogleSignIn = async (): Promise<void> => {
    if (!isLoaded) return;
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/shop",
        redirectUrlComplete: "/shop", 
      });
    } catch (error) {
      console.error("Erro ao autenticar com Google:", error);
      setError("Falha ao autenticar com Google");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign In</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full mb-6">
          <label className="block text-sm font-medium text-gray-700">Senha:</label>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={handleLogin}
          className="bg-gray-500 text-white px-4 py-2 rounded-md w-full mb-2"
        >
          Login
        </button>

        <button
          onClick={handleGoogleSignIn}
          className="bg-gray-300 text-black px-4 py-2 rounded-md w-full"
        >
          Login com Google
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;

