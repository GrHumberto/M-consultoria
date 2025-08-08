import { McButton } from "./mc-button";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function Navbar() {
  const { user, profile, isAdmin, signOut, loading } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-white/90 px-4 md:px-28 py-4 backdrop-blur-sm shadow-md">
      <div className="flex flex-1 items-center gap-2">
        <Link
          to="/"
          className="text-2xl md:text-4xl font-black text-primary tracking-tight hover:opacity-80 transition-opacity"
        >
          M-C
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link
          to="/catalogo"
          className="text-xl text-foreground hover:text-primary transition-colors"
        >
          Catálogo
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2 md:gap-6">
        {user ? (
          // Usuario autenticado
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium text-gray-700">
                {profile?.full_name || 'Usuario'}
              </span>
              {isAdmin && (
                <span className="text-xs text-orange-500 font-semibold">
                  Administrador
                </span>
              )}
            </div>
            <McButton 
              variant="outline-orange" 
              size="sm" 
              className="rounded-full text-sm md:text-base"
              onClick={handleSignOut}
              disabled={loading}
            >
              {loading ? 'Saliendo...' : 'Cerrar Sesión'}
            </McButton>
          </div>
        ) : (
          // Usuario no autenticado
          <>
            <Link to="/registro">
              <McButton
                variant="orange"
                size="sm"
                className="rounded-full text-sm md:text-base"
              >
                Regístrate
              </McButton>
            </Link>
            <Link to="/login" className="hidden md:inline-flex">
              <McButton
                variant="outline-orange"
                size="sm"
                className="rounded-full text-sm md:text-base"
              >
                Iniciar Sesión
              </McButton>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
