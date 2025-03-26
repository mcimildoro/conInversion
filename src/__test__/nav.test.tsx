import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar2 from "../components/Navbar/navbar";
import { itemsNavbar } from "@/../data";
import { usePathname } from "next/navigation";
import { SVGProps } from "react";

// Mock de usePathname para evitar errores en Next.js
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

interface IconProps extends SVGProps<SVGSVGElement> {
    "data-testid": string;
}

// Mock de los íconos de lucide-react
jest.mock("lucide-react", () => ({
    Home: (props: IconProps) => <svg {...props} data-testid="icon-home" />,
    User: (props: IconProps) => <svg {...props} data-testid="icon-user" />,
    BookText: (props: IconProps) => <svg {...props} data-testid="icon-booktext" />,
    CodeSquare: (props: IconProps) => <svg {...props} data-testid="icon-codesquare" />,
    MessageCircle: (props: IconProps) => <svg {...props} data-testid="icon-messagecircle" />,
}));



  it("Cambia el icono activo al cambiar de ruta", () => {
    const { rerender } = render(<Navbar2 />);
  
    // Verifica que el icono de "Home" esté activo
    expect(screen.getByTestId("icon-home").closest("a")).toHaveClass("bg-green-700");
  
    // Simula que estamos en "/about-me"
    (usePathname as jest.Mock).mockReturnValue("/about-me");
    rerender(<Navbar2 />);
  
    // Verifica que ahora el icono "User" está activo
    expect(screen.getByTestId("icon-user").closest("a")).toHaveClass("bg-green-700");
  });


// Test de renderizado de la navbar
it("La navbar se renderiza correctamente", () => {
    render(<Navbar2 />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
});

// Test para verificar que los iconos están presentes
it("Los iconos se muestran en la navbar", () => {
    render(<Navbar2 />);
    expect(screen.getByTestId("icon-home")).toBeInTheDocument();
    expect(screen.getByTestId("icon-user")).toBeInTheDocument();
    expect(screen.getByTestId("icon-booktext")).toBeInTheDocument();
    expect(screen.getByTestId("icon-codesquare")).toBeInTheDocument();
    expect(screen.getByTestId("icon-messagecircle")).toBeInTheDocument();
});
