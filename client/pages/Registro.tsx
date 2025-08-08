import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function Registro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [error, setError] = useState('');

  const { signUp, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (!formData.nombre || !formData.apellidoPaterno || !formData.email || !formData.password) {
      setError('Todos los campos marcados con * son obligatorios');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (!formData.acceptTerms) {
      setError('Debe aceptar los términos y condiciones');
      return;
    }

    const result = await signUp(
      formData.email,
      formData.password,
      formData.nombre,
      formData.apellidoPaterno,
      formData.apellidoMaterno || undefined
    );

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error || 'Error al registrarse');
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError(''); // Clear error when user types
  };

  const EyeIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M20.4702 2.46997C20.6123 2.33749 20.8004 2.26537 20.9947 2.26879C21.189 2.27222 21.3744 2.35093 21.5118 2.48835C21.6492 2.62576 21.7279 2.81114 21.7313 3.00545C21.7348 3.19975 21.6626 3.38779 21.5302 3.52997L3.53015 21.53C3.46149 21.6037 3.37869 21.6628 3.28669 21.7038C3.19469 21.7447 3.09538 21.7668 2.99467 21.7686C2.89397 21.7703 2.79394 21.7518 2.70056 21.7141C2.60717 21.6764 2.52233 21.6202 2.45111 21.549C2.3799 21.4778 2.32375 21.393 2.28603 21.2996C2.24831 21.2062 2.22978 21.1061 2.23156 21.0054C2.23334 20.9047 2.25538 20.8054 2.29637 20.7134C2.33736 20.6214 2.39647 20.5386 2.47015 20.47L20.4702 2.46997ZM1.32415 12.553C1.8632 14.1705 2.76287 15.6442 3.95515 16.863L7.05415 13.764C6.71981 12.8279 6.65808 11.8161 6.87614 10.8463C7.09419 9.87657 7.58308 8.98861 8.28594 8.28575C8.9888 7.58289 9.87675 7.09401 10.8465 6.87595C11.8163 6.65789 12.8281 6.71963 13.7642 7.05397L16.2412 4.57697C14.8941 4.02893 13.4534 3.74805 11.9992 3.74997C7.02915 3.74997 2.81415 6.97297 1.32415 11.44C1.20415 11.802 1.20415 12.192 1.32415 12.553Z"
        fill="#EF832C"
      />
      <path
        d="M8.25021 12.0001C8.25021 12.1801 8.26321 12.3571 8.28721 12.5301L12.5312 8.28705C11.9992 8.21096 11.4571 8.25009 10.9416 8.4018C10.426 8.5535 9.94913 8.81424 9.54316 9.16635C9.13719 9.51846 8.81164 9.95371 8.58856 10.4426C8.36548 10.9315 8.25009 11.4627 8.25021 12.0001ZM11.4702 15.7131L15.7132 11.4691C15.7956 12.0455 15.7427 12.6333 15.5586 13.1857C15.3744 13.7382 15.0641 14.2402 14.6523 14.6519C14.2405 15.0636 13.7384 15.3738 13.1859 15.5578C12.6334 15.7418 12.0457 15.7946 11.4692 15.7121L11.4702 15.7131Z"
        fill="#EF832C"
      />
      <path
        d="M17.2501 12C17.2501 11.381 17.1431 10.787 16.9461 10.236L20.0461 7.13599C21.238 8.35483 22.1373 9.82861 22.6761 11.446C22.7961 11.808 22.7961 12.198 22.6761 12.56C21.1871 17.027 16.9721 20.25 12.0011 20.25C10.5011 20.25 9.06811 19.956 7.75911 19.423L10.2361 16.946C11.0285 17.2286 11.8771 17.3168 12.7107 17.2029C13.5442 17.0891 14.3381 16.7766 15.0256 16.2917C15.7131 15.8069 16.2741 15.164 16.6612 14.4171C17.0483 13.6702 17.2503 12.8412 17.2501 12Z"
        fill="#EF832C"
      />
    </svg>
  );

  const GoogleIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_193_154)">
        <path
          d="M19.9905 10.1871C19.9905 9.36767 19.9224 8.76973 19.7752 8.14966H10.1992V11.848H15.8201C15.7068 12.7671 15.0948 14.1512 13.7349 15.0813L13.7159 15.2051L16.7436 17.4969L16.9534 17.5174C18.8798 15.7789 19.9905 13.221 19.9905 10.1871Z"
          fill="#4285F4"
        />
        <path
          d="M10.1992 19.9313C12.953 19.9313 15.2648 19.0454 16.9534 17.5174L13.7349 15.0813C12.8737 15.6682 11.7177 16.0779 10.1992 16.0779C7.50211 16.0779 5.21297 14.3395 4.39695 11.9366L4.27734 11.9466L1.12906 14.3273L1.08789 14.4391C2.76508 17.6945 6.21016 19.9313 10.1992 19.9313Z"
          fill="#34A853"
        />
        <path
          d="M4.39695 11.9366C4.18164 11.3165 4.05703 10.6521 4.05703 9.96559C4.05703 9.27902 4.18164 8.61467 4.38562 7.9946L4.37992 7.86253L1.19219 5.4436L1.08789 5.49208C0.396641 6.84299 0 8.36002 0 9.96559C0 11.5712 0.396641 13.0881 1.08789 14.439L4.39695 11.9366Z"
          fill="#FBBC05"
        />
        <path
          d="M10.1992 3.85336C12.1144 3.85336 13.4062 4.66168 14.1429 5.33718L17.0213 2.59107C15.2535 0.985496 12.953 0 10.1992 0C6.21016 0 2.76508 2.23672 1.08789 5.49214L4.38563 7.99466C5.21297 5.59183 7.50211 3.85336 10.1992 3.85336Z"
          fill="#EB4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_193_154">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-6"
      style={{ backgroundColor: "#FFFBF8" }}
    >
      <div className="w-full max-w-5xl">
        <div
          className="flex rounded-[54px] overflow-hidden"
          style={{
            /* 🔥 CAMBIAR IMAGEN AQUÍ: Reemplaza la URL de la imagen de fondo */
            background: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80') center/cover no-repeat, linear-gradient(89deg, #251509 55.34%, #F38B3E 100.09%)`,
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Left section - Background with text */}
          <div className="w-1/2 p-8 flex items-center">
            <div className="flex items-center gap-4 w-full">
              <div
                className="w-1 h-32"
                style={{ backgroundColor: "#FFFBF8" }}
              />
              <div className="flex-1">
                <div
                  className="font-['Noto_Sans_HK'] text-base font-black mb-2"
                  style={{ color: "#F7C297" }}
                >
                  Regístrate y protege
                </div>
                <div
                  className="font-['Noto_Sans_HK'] text-3xl font-light leading-tight"
                  style={{ color: "#FFFBF8" }}
                >
                  Prevenir es más fácil cuando tienes a los expertos de tu lado.
                </div>
              </div>
            </div>
          </div>

          {/* Right section - Form */}
          <div
            className="w-1/2 p-12"
            style={{
              backgroundColor: "#FFFBF8",
              borderRadius: "0 54px 54px 0",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* Form title */}
            <div className="mb-10">
              <h1
                className="font-['Noto_Sans_HK'] text-3xl font-light mb-2"
                style={{ color: "#A54A01" }}
              >
                Crea tu Cuenta
              </h1>
              <p
                className="font-['Noto_Sans_HK'] text-base font-bold"
                style={{ color: "#F4A86C" }}
              >
                Tu seguridad comienza aquí
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error Message */}
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
              {/* Nombre */}
              <div>
                <label
                  className="block font-['Noto_Sans_HK'] text-sm font-medium mb-1"
                  style={{ color: "#281504" }}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange('nombre', e.target.value)}
                  placeholder="Nombre"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D6D7] text-gray-800 font-['Noto_Sans'] text-base focus:outline-none focus:ring-2 focus:ring-[#EF832C]"
                  style={{ backgroundColor: "#FFFBF8" }}
                  required
                />
              </div>

              {/* Apellidos */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    className="block font-['Noto_Sans_HK'] text-sm font-medium mb-1"
                    style={{ color: "#281504" }}
                  >
                    Apellido Paterno
                  </label>
                  <input
                    type="text"
                    value={formData.apellidoPaterno}
                    onChange={(e) => handleInputChange('apellidoPaterno', e.target.value)}
                    placeholder="Apellido Paterno"
                    className="w-full h-12 px-4 rounded-lg border border-[#D1D6D7] text-gray-800 font-['Noto_Sans'] text-base focus:outline-none focus:ring-2 focus:ring-[#EF832C]"
                    style={{ backgroundColor: "#FFFBF8" }}
                    required
                  />
                </div>
                <div>
                  <label
                    className="block font-['Noto_Sans_HK'] text-sm font-medium mb-1"
                    style={{ color: "#281504" }}
                  >
                    Apellido Materno
                  </label>
                  <input
                    type="text"
                    value={formData.apellidoMaterno}
                    onChange={(e) => handleInputChange('apellidoMaterno', e.target.value)}
                    placeholder="Apellido Materno"
                    className="w-full h-12 px-4 rounded-lg border border-[#D1D6D7] text-gray-800 font-['Noto_Sans'] text-base focus:outline-none focus:ring-2 focus:ring-[#EF832C]"
                    style={{ backgroundColor: "#FFFBF8" }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  className="block font-['Noto_Sans_HK'] text-sm font-medium mb-1"
                  style={{ color: "#281504" }}
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="ejemplo@e-mail.com"
                  className="w-full h-12 px-4 rounded-lg border border-[#D1D6D7] text-gray-800 font-['Noto_Sans'] text-base focus:outline-none focus:ring-2 focus:ring-[#EF832C]"
                  style={{ backgroundColor: "#FFFBF8" }}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="block font-['Noto_Sans_HK'] text-sm font-medium mb-1"
                  style={{ color: "#281504" }}
                >
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full h-12 px-4 pr-12 rounded-lg border border-[#D1D6D7] font-['Barlow'] text-base focus:outline-none focus:ring-2 focus:ring-[#EF832C]"
                    style={{ backgroundColor: "#FFFBF8", color: "#333" }}
                    required
                  />
                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <EyeIcon />
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  className="block font-['Noto_Sans_HK'] text-sm font-medium mb-1"
                  style={{ color: "#281504" }}
                >
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="w-full h-12 px-4 pr-12 rounded-lg border border-[#D1D6D7] font-['Barlow'] text-base focus:outline-none focus:ring-2 focus:ring-[#EF832C]"
                    style={{ backgroundColor: "#FFFBF8", color: "#333" }}
                    required
                  />
                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <EyeIcon />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 my-8">
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: "#281504" }}
                />
                <span
                  className="font-['Noto_Sans_HK'] text-sm font-medium px-2"
                  style={{ color: "#281504" }}
                >
                  O regístrate con
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: "#281504" }}
                />
              </div>

              {/* Terms checkbox */}
              <div className="flex items-center gap-3 mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.acceptTerms}
                  onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                  className="w-4 h-4 rounded border border-[#A39888] accent-[#EF832C]"
                  style={{ backgroundColor: "#E7E0DE" }}
                />
                <label
                  htmlFor="terms"
                  className="font-['Noto_Sans_HK'] text-sm font-medium"
                  style={{ color: "#281504" }}
                >
                  Acepto los Términos y Condiciones
                </label>
              </div>

              {/* Google button */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-4 px-6 py-3 rounded-lg border border-[#C0C1C2] mb-4 hover:bg-gray-50 transition-colors"
                style={{ backgroundColor: "#FFFBF8" }}
              >
                <GoogleIcon />
                <span
                  className="font-['Noto_Sans_HK'] text-xl font-normal"
                  style={{ color: "#464848" }}
                >
                  Regístrate con Google
                </span>
              </button>

              {/* Register button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-10 py-4 rounded-lg font-['Noto_Sans_HK'] text-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
                style={{
                  backgroundColor: "#EF832C",
                  color: "#FFFBF8",
                }}
              >
                {loading ? 'Registrando...' : 'Regístrate'}
              </button>
            </form>

            {/* Login link */}
            <p
              className="mt-8 text-center text-sm"
              style={{ color: "#281504" }}
            >
              ¿Ya tienes cuenta?{" "}
              <Link
                to="/login"
                className="font-medium hover:underline"
                style={{ color: "#EF832C" }}
              >
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
